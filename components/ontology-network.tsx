"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { ontology, type OntologyKind } from "@/lib/ontology";
import { mountNetwork } from "@/components/network-sketch";

const kinds: Array<OntologyKind | "All"> = [
  "All",
  "Project",
  "Concept",
  "Context",
];

const kindLabel: Record<OntologyKind | "All", string> = {
  All: "All",
  Project: "Projects",
  Concept: "Concepts",
  Context: "Contexts",
};

function selectedKind(root: ParentNode | null): OntologyKind | "All" {
  const checked = root?.querySelector<HTMLInputElement>('input[name="network-kind"]:checked');
  const value = checked?.value;
  if (value === "Project" || value === "Concept" || value === "Context") return value;
  return "All";
}

export function OntologyNetwork() {
  const router = useRouter();
  const markerRef = useRef<HTMLSpanElement>(null);
  const redrawRef = useRef<() => void>(() => {});
  const routerRef = useRef(router);
  routerRef.current = router;
  const [showing, setShowing] = useState(false);
  const [host, setHost] = useState<HTMLDivElement | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const activeNode = ontology.find((entry) => entry.name === active) ?? null;

  useLayoutEffect(() => {
    const page = markerRef.current?.closest(".network-page");
    if (!(page instanceof HTMLElement)) return;
    const sync = () => {
      setShowing(page.getClientRects().length > 0 && getComputedStyle(page).display !== "none");
    };
    sync();
    const observer = new MutationObserver(sync);
    let node: HTMLElement | null = page;
    while (node && node !== document.body) {
      observer.observe(node, { attributes: true, attributeFilter: ["style", "class", "hidden"] });
      node = node.parentElement;
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!host) return;
    let remove = () => {};
    let gone = false;
    const root = host.closest(".ontology-net-wrap");
    mountNetwork(host, {
      getKind: () => selectedKind(root),
      onHover: (name) => setActive(name),
      onOpen: (href) => routerRef.current.push(href),
      onReady: (redraw) => {
        redrawRef.current = redraw;
      },
    })
      .then((cleanup) => {
        if (gone) {
          cleanup();
          return;
        }
        remove = cleanup;
        redrawRef.current();
      })
      .catch((reason: unknown) => {
        if (gone) return;
        setError(reason instanceof Error ? reason.message : "The network could not be drawn.");
      });
    const group = root?.querySelector(".ontology-kinds");
    const onChange = () => redrawRef.current();
    group?.addEventListener("change", onChange);
    return () => {
      gone = true;
      group?.removeEventListener("change", onChange);
      remove();
    };
  }, [host]);

  const cloud = (
    <div
      className="ontology-net-wrap"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: 40,
      }}
    >
      <div className="ontology-net-frame">
        {error ? <p className="ontology-net-error">{error}</p> : null}
        <div ref={setHost} className="ontology-net" />
        <ul className="ontology-net-links">
          {ontology.map((entry) => (
            <li key={`${entry.kind}-${entry.name}`}>
              <Link href={entry.href}>{entry.name}</Link>
            </li>
          ))}
        </ul>
        {activeNode ? (
          <div className="ontology-net-detail" aria-live="polite">
            <p className="ontology-net-name">
              <a href={activeNode.href}>{activeNode.name}</a>
              <span>{activeNode.kind}</span>
            </p>
            <p>{activeNode.text}</p>
          </div>
        ) : null}
      </div>
      <div className="ontology-net-bar">
        <nav className="ontology-net-nav" aria-label="Pages">
          <Link href="/about">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/ontology">Ontology</Link>
          <Link href="/network" aria-current="page">
            Network
          </Link>
        </nav>
        <div className="ontology-kinds" role="radiogroup" aria-label="Show a kind">
          {kinds.map((id) => (
            <span key={id}>
              <input
                type="radio"
                name="network-kind"
                id={`network-kind-${id}`}
                value={id}
                defaultChecked={id === "All"}
              />
              <label htmlFor={`network-kind-${id}`}>
                {id !== "All" ? <span className="kind-swatch" data-kind={id} aria-hidden="true" /> : null}
                {kindLabel[id]}
              </label>
            </span>
          ))}
        </div>
        <p className="ontology-net-status">
          <span data-for="All">{ontology.length} nodes</span>
          <span data-for="Project">{ontology.filter((entry) => entry.kind === "Project").length} projects</span>
          <span data-for="Concept">{ontology.filter((entry) => entry.kind === "Concept").length} concepts</span>
          <span data-for="Context">{ontology.filter((entry) => entry.kind === "Context").length} contexts</span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      <span ref={markerRef} hidden />
      {showing ? createPortal(cloud, document.body) : null}
    </>
  );
}
