import type p5 from "p5";
import { ontology, ontologyEdges, type OntologyKind } from "@/lib/ontology";

export type NetworkControls = {
  getKind: () => OntologyKind | "All";
  onHover: (name: string | null) => void;
  onOpen: (href: string) => void;
  onReady?: (redraw: () => void) => void;
};

const shortName: Record<string, string> = {
  "UnstableLandscapes, 2003–2008": "UL 2003–2008",
  "The Tectonics of Otherness": "Tectonics of Otherness",
  "Interactive Generative Videos": "Generative Videos",
  "Laboratory of Synthetic Meaning": "Synthetic Meaning",
  "In Pursuit of Stolen Ghosts": "Stolen Ghosts",
  "Digressions in Latent Space": "Digressions",
  "Choreographic Coding Lab": "Coding Lab",
  "Embodied Creative Facilitation": "Facilitation",
  "Digital Bodies": "Digital Bodies",
  "Barely There / I Am Home in Latent Space": "Barely There",
  "All Watched Over by Machines of Loving Grace": "Machines of Loving Grace",
  "Center for Arts, Migration, and Entrepreneurship": "CAME",
  "AI and the Arts Certificate": "AI and the Arts",
  "My House Is Your House": "My House",
  "Body Multi-Tracker": "Body Tracker",
  "Bauhaus Time Traveler": "Bauhaus Traveler",
};

type Body = {
  name: string;
  kind: OntologyKind;
  href: string;
  label: string;
  pos: p5.Vector;
  vel: p5.Vector;
  phase: number;
  pinned: boolean;
};

let mountId = 0;

function hash(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967296;
}

function tint(p: p5, hex: string, alpha: number) {
  const color = p.color(hex || "#888888");
  return p.color(p.red(color), p.green(color), p.blue(color), alpha);
}

export async function mountNetwork(host: HTMLElement, controls: NetworkControls) {
  const id = ++mountId;
  const loaded = await import("p5");
  const p5 = loaded.default;
  if (typeof p5 !== "function") throw new Error("p5 did not load");
  if (id !== mountId) return () => {};
  host.querySelectorAll("canvas").forEach((canvas) => canvas.remove());
  const nameIndex = new Map(ontology.map((entry, index) => [entry.name, index]));
  const links = ontologyEdges().map(
    ([a, b]) => [nameIndex.get(a.name) ?? 0, nameIndex.get(b.name) ?? 0] as const,
  );
  const neighbors = new Map<string, Set<string>>();
  for (const entry of ontology) neighbors.set(entry.name, new Set());
  for (const [a, b] of ontologyEdges()) {
    neighbors.get(a.name)?.add(b.name);
    neighbors.get(b.name)?.add(a.name);
  }

  let hovered: string | null = null;
  let drag: { index: number; moved: boolean } | null = null;
  let ready = false;
  let resizeSketch = () => {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  host.querySelectorAll("canvas").forEach((canvas) => canvas.remove());

  const sketch = new p5((p: p5) => {
    const bodies: Body[] = [];

    function palette() {
      const style = getComputedStyle(document.documentElement);
      const value = (name: string) => style.getPropertyValue(name).trim();
      return {
        ink: value("--ink"),
        muted: value("--muted"),
        bg: value("--bg"),
        project: value("--node-project"),
        concept: value("--node-concept"),
        context: value("--node-context"),
      };
    }

    function colorOf(kind: OntologyKind, colors: ReturnType<typeof palette>) {
      if (kind === "Project") return colors.project;
      if (kind === "Concept") return colors.concept;
      return colors.context;
    }

    function visible(name: string) {
      const kind = controls.getKind();
      if (kind === "All") return true;
      return ontology.find((entry) => entry.name === name)?.kind === kind;
    }

    function emphasis(name: string) {
      if (!visible(name)) return 0;
      if (!hovered || controls.getKind() !== "All") return 255;
      if (name === hovered) return 255;
      if (neighbors.get(hovered)?.has(name)) return 255;
      return 36;
    }

    function step(drift: boolean) {
      const cx = p.width / 2;
      const cy = p.height / 2;
      const time = p.millis() / 1000;
      for (let i = 0; i < bodies.length; i++) {
        const a = bodies[i];
        for (let j = i + 1; j < bodies.length; j++) {
          const b = bodies[j];
          const delta = p5.Vector.sub(b.pos, a.pos);
          let dist = delta.mag();
          if (dist < 26) dist = 26;
          delta.setMag(4200 / (dist * dist));
          if (!a.pinned) a.vel.sub(delta);
          if (!b.pinned) b.vel.add(delta);
        }
      }
      for (const [i, j] of links) {
        const a = bodies[i];
        const b = bodies[j];
        const delta = p5.Vector.sub(b.pos, a.pos);
        const dist = Math.max(delta.mag(), 0.01);
        const rest = 150 + Math.sin(time * 0.9 + (i + j) * 0.17) * 28;
        const pull = (dist - rest) * 0.11;
        delta.setMag(pull);
        if (!a.pinned) a.vel.add(delta);
        if (!b.pinned) b.vel.sub(delta);
      }
      for (const body of bodies) {
        if (body.pinned || body.name === hovered) {
          body.vel.set(0, 0);
          continue;
        }
        body.vel.x += (cx - body.pos.x) * 0.003;
        body.vel.y += (cy - body.pos.y) * 0.003;
        if (drift) {
          body.vel.x += Math.sin(time * 0.55 + body.phase) * 0.35;
          body.vel.y += Math.cos(time * 0.42 + body.phase * 1.3) * 0.35;
        }
        const margin = 80;
        if (body.pos.x < margin) body.vel.x += 2.2;
        if (body.pos.x > p.width - margin) body.vel.x -= 2.2;
        if (body.pos.y < margin) body.vel.y += 2.2;
        if (body.pos.y > p.height - margin) body.vel.y -= 2.2;
        body.vel.mult(0.86);
        body.pos.add(body.vel);
      }
    }

    function pick(x: number, y: number) {
      let found: Body | null = null;
      let best = 18;
      for (const body of bodies) {
        if (!visible(body.name)) continue;
        const dist = Math.hypot(body.pos.x - x, body.pos.y - y);
        if (dist < best) {
          best = dist;
          found = body;
        }
      }
      return found;
    }

    function fit() {
      const rect = host.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      if (width < 2 || height < 2) return;
      if (!bodies.length) {
        p.resizeCanvas(width, height);
        const fieldW = p.width;
        const fieldH = p.height;
        ontology.forEach((entry, index) => {
          const turn = hash(entry.name) * p.TWO_PI;
          const radius = 20 + hash(`${entry.name}:r`) * Math.min(fieldW, fieldH) * 0.28;
          bodies[index] = {
            name: entry.name,
            kind: entry.kind,
            href: entry.href,
            label: shortName[entry.name] ?? entry.name,
            pos: p.createVector(
              fieldW / 2 + Math.cos(turn) * radius,
              fieldH / 2 + Math.sin(turn) * radius * 0.72,
            ),
            vel: p.createVector(0, 0),
            phase: hash(`${entry.name}:p`) * p.TWO_PI,
            pinned: false,
          };
        });
        for (let i = 0; i < 8; i++) step(false);
        if (!reduced) p.loop();
      } else if (p.width !== width || p.height !== height) {
        const scaleX = width / Math.max(p.width, 1);
        const scaleY = height / Math.max(p.height, 1);
        for (const body of bodies) {
          body.pos.x *= scaleX;
          body.pos.y *= scaleY;
          body.vel.x *= scaleX;
          body.vel.y *= scaleY;
        }
        p.resizeCanvas(width, height);
      }
      const canvas = host.querySelector("canvas");
      if (!canvas) return;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      if (bodies.length && width > 20 && height > 20) host.dataset.live = "true";
    }

    resizeSketch = fit;

    p.setup = () => {
      p.pixelDensity(1);
      p.createCanvas(Math.max(2, Math.floor(host.clientWidth) || 2), Math.max(2, Math.floor(host.clientHeight) || 2));
      p.textFont(getComputedStyle(document.body).fontFamily);
      p.textSize(12);
      fit();
      ready = true;
      controls.onReady?.(() => p.redraw());
      if (reduced) p.noLoop();
      let tries = 0;
      const ensure = () => {
        if (bodies.length || tries > 30) return;
        tries += 1;
        fit();
        if (!bodies.length) requestAnimationFrame(ensure);
      };
      requestAnimationFrame(ensure);
    };

    p.draw = () => {
      if (!bodies.length) return;
      if (p.width > 20 && p.height > 20) host.dataset.live = "true";
      if (!drag) {
        const inside = p.mouseX >= 0 && p.mouseY >= 0 && p.mouseX <= p.width && p.mouseY <= p.height;
        const hit = inside ? pick(p.mouseX, p.mouseY) : null;
        const name = hit?.name ?? null;
        if (name !== hovered) {
          hovered = name;
          controls.onHover(name);
        }
        p.cursor(hit ? "pointer" : "default");
      }
      const colors = palette();
      if (!reduced) step(true);
      p.background(colors.bg || "#12110f");
      const related = hovered ? (neighbors.get(hovered) ?? new Set<string>()) : null;
      const drawLink = (a: Body, b: Body, weight: number, alpha: number) => {
        p.strokeWeight(weight);
        p.stroke(tint(p, colors.muted, alpha));
        p.line(a.pos.x, a.pos.y, b.pos.x, b.pos.y);
      };
      for (const pass of ["off", "rest", "on"] as const) {
        for (const [i, j] of links) {
          const a = bodies[i];
          const b = bodies[j];
          if (!a || !b || !visible(a.name) || !visible(b.name)) continue;
          const touches = related ? a.name === hovered || b.name === hovered : false;
          const state = !related ? "rest" : touches ? "on" : "off";
          if (state !== pass) continue;
          if (state === "on") drawLink(a, b, 1.15, 230);
          else if (state === "off") drawLink(a, b, 0.4, 18);
          else drawLink(a, b, 0.55, 78);
        }
      }
      for (const body of bodies) {
        if (!visible(body.name)) continue;
        const alpha = emphasis(body.name);
        const hex = colorOf(body.kind, colors);
        p.noStroke();
        p.fill(tint(p, hex, alpha));
        if (body.kind === "Context") {
          p.push();
          p.translate(body.pos.x, body.pos.y);
          p.rotate(p.PI / 4);
          p.rectMode(p.CENTER);
          p.square(0, 0, body.name === hovered ? 12 : 9);
          p.pop();
        } else {
          const diameter = body.kind === "Project" ? 16 : body.kind === "Concept" ? 13 : 12;
          p.circle(body.pos.x, body.pos.y, body.name === hovered ? diameter + 4 : diameter);
        }
      }
      p.noStroke();
      p.textAlign(p.LEFT, p.CENTER);
      for (const body of bodies) {
        const alpha = emphasis(body.name);
        if (alpha < 80) continue;
        p.fill(tint(p, colors.ink, alpha));
        const size = body.name === hovered ? 14 : body.kind === "Concept" ? 12 : 11;
        p.textSize(size);
        p.text(body.label, body.pos.x + 10, body.pos.y);
      }
    };

    p.mousePressed = () => {
      const hit = pick(p.mouseX, p.mouseY);
      if (!hit) return;
      const index = bodies.indexOf(hit);
      hit.pinned = true;
      drag = { index, moved: false };
    };

    p.mouseDragged = () => {
      if (!drag) return;
      const body = bodies[drag.index];
      if (Math.hypot(p.mouseX - body.pos.x, p.mouseY - body.pos.y) > 3) drag.moved = true;
      body.vel.set(p.mouseX - body.pos.x, p.mouseY - body.pos.y);
      body.pos.set(p.mouseX, p.mouseY);
    };

    p.mouseReleased = () => {
      if (!drag) return;
      const body = bodies[drag.index];
      body.pinned = false;
      body.vel.mult(0.25);
      const moved = drag.moved;
      drag = null;
      if (!moved) controls.onOpen(body.href);
    };

    p.mouseMoved = () => {
      if (reduced) p.redraw();
    };
  }, host);

  const observer = new ResizeObserver(() => {
    if (!ready) return;
    resizeSketch();
  });
  observer.observe(host);

  return () => {
    observer.disconnect();
    sketch.remove();
    host.querySelectorAll("canvas").forEach((canvas) => canvas.remove());
  };
}
