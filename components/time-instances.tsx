import Image from "next/image";
import Link from "next/link";
import { getProjectImages, type WorkImage } from "@/lib/works";

const apps = [
  ["Ray Casting Clock", "https://marlonbarrios.github.io/ray_casting_clock/"],
  ["Ephemeral Accumulation for Human Time Scale", "https://marlonbarrios.github.io/ephemeral_accumulation/"],
  ["Perceived Activity at Certain Times", "https://marlonbarrios.github.io/PerceivedActivityatCertainTime-/docs/index.html"],
  ["Temporal Patterns of 100 Rotating Nested Squares", "https://marlonbarrios.github.io/spirograh100squares/"],
  ["Animated Phyllotaxis", "https://marlonbarrios.github.io/animated_phylotaxis/"],
  ["Concentric Waves", "https://marlonbarrios.github.io/concentric_waves/"],
  ["Portal with Oscilations", "https://marlonbarrios.github.io/portal01/"],
  ["Breathing Circle", "https://marlonbarrios.github.io/breathing_circle/"],
  ["Black Ink Ensō", "https://marlonbarrios.github.io/black_ink_enso/"],
  ["Fibonacci Zoom Out", "https://marlonbarrios.github.io/fibonacci_zoomout/"],
  ["Captive Network", "https://marlonbarrios.github.io/captivenetwork/"],
  ["Gravitas Epistola", "https://marlonbarrios.github.io/gravitas_epistola/"],
  ["Transcriptional Fugue", "https://transcriptionla-fugue-02.vercel.app/"],
  ["Infinite Cellular Automata", "https://marlonbarrios.github.io/infinitecellularautomata/"],
  ["Animated Lines", "https://marlonbarrios.github.io/animated_lines_sound/"],
  ["Connected Pathfinders", "https://marlonbarrios.github.io/connected_pathfinders/"],
  ["Absence 01", "https://marlonbarrios.github.io/absence01/"],
  ["Dissipative Stilness 01", "https://marlonbarrios.github.io/dissipative01/"],
  ["Chromatic Crescent", "https://marlonbarrios.github.io/chromatic_crescent/"],
  ["Epistemic Foraging & Self-Reference", "https://marlonbarrios.github.io/epistemicforagingandselfreference/"],
] as const;

function Figure({
  image,
  alt,
  caption,
  href,
  priority = false,
}: {
  image?: WorkImage;
  alt: string;
  caption: string;
  href?: string;
  priority?: boolean;
}) {
  if (!image) return null;
  const picture = (
    <Image
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      sizes="(max-width: 1120px) 40rem, 40rem"
      priority={priority}
    />
  );
  return (
    <figure className="project-figure">
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {picture}
        </a>
      ) : (
        picture
      )}
      <figcaption>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer">
            {caption}
          </a>
        ) : (
          caption
        )}
      </figcaption>
    </figure>
  );
}

export async function TimeInstances() {
  const images = await getProjectImages("time-instances");
  const shot = (name: string) => images.find((image) => image.src.endsWith(`/${name}`));

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Time Instances</h1>
      <p className="dek">Small Gestures of Becoming</p>
      <p className="byline">A computational installation on time, minimal geometry, and epistemic perception</p>

      <div className="prose">
        <p>
          For this project, I imagine the exhibition space as a quiet machine:
          twenty screens, each hosting a live generative system running in the
          browser. Few are interactive. Some simply breathe. All of them persist
          in computation, fed by light and electricity, unfolding their own
          sense of chronos.
        </p>
        <Figure
          image={shot("installation.png")}
          alt="Time Instances, installation view of screens in a dark room"
          caption="Time Instances, installation view"
          priority
        />
        <p>
          What visitors see are not fixed videos or animations. They are
          procedures. Algorithms performing time.
        </p>
        <Figure
          image={shot("infinite-cellular-automata.png")}
          alt="Infinite Cellular Automata, a field of black and white triangular patterns"
          caption="Infinite Cellular Automata"
          href="https://marlonbarrios.github.io/infinitecellularautomata/"
        />
        <p>
          Across the room flows a generative sound environment, a low-frequency
          vibratory field that holds the screens together, as if each visual
          process emits a faint resonance, a computational hum of becoming.
        </p>
        <p>
          The visual language is intentionally minimal. I start with the point,
          the line, the circle, the spiral. I work with constraints: light and
          dark, repetition, iteration, drift. I am trying to understand how we
          represent time through geometry, how we produce distinctions, how we
          cut something continuous into something knowable.
        </p>
        <p>
          The work also comes from the classical algorithms of creative code,
          and from what those procedures can still do. Used together, they make
          an environment for reflection on time, form, growth, and perhaps life.
        </p>
        <Figure
          image={shot("ray-casting-clock.png")}
          alt="Ray Casting Clock, a black and white generative clock"
          caption="Ray Casting Clock"
          href="https://marlonbarrios.github.io/ray_casting_clock/"
        />
        <p>
          These epistemic gestures now live inside computational systems,
          machines that also differentiate, predict, loop, and forget. The live
          apps are not only representations of time. They are temporal entities
          themselves, co-constituted by code, electricity, probability, and
          attention.
        </p>
        <Figure
          image={shot("epistemic-foraging.png")}
          alt="Epistemic Foraging and Self-Reference, a grey path of squares on white"
          caption="Epistemic Foraging & Self-Reference"
          href="https://marlonbarrios.github.io/epistemicforagingandselfreference/"
        />
        <p>
          The pieces are designed to run in the browser. Some of them demand
          interaction. When they do, the instruction is written next to the
          link.
        </p>
        <ol>
          {apps.map(([title, href]) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer">
                {title}
              </a>
              {title === "Transcriptional Fugue" ? " — temporarily deactivated" : null}
              {title === "Gravitas Epistola" ? " — write anything on the keyboard" : null}
              {title === "Animated Lines" ? " — make a line with the mouse" : null}
              {title === "Connected Pathfinders"
                ? " — draw a single shape with the mouse cursor, then press the up and down arrows to add connected dancers"
                : null}
              {title === "Epistemic Foraging & Self-Reference"
                ? " — press the space bar to toggle sound, and click in the space to feed the creature"
                : null}
            </li>
          ))}
        </ol>
        <p>
          Together they form a distributed meditation on temporality,
          algorithmic perception, and the micro-geometries of experience. Each
          screen becomes a lens on time: vibration, drift, recursion, breath,
          entropy, memory, emergence, and form. A relational field of
          processes, simple geometries becoming sites of epistemic inquiry.
        </p>
      </div>
    </article>
  );
}
