import type { Metadata } from "next";
import { NetworkCloud } from "@/components/network-cloud";
import { ontology, type OntologyKind } from "@/lib/ontology";

export const metadata: Metadata = {
  title: "Network",
  description:
    "A gravitational cloud of the projects, concepts, and contexts on this site. Each node links to its place.",
};

const filters: Array<{ id: OntologyKind | "All"; label: string }> = [
  { id: "All", label: "All" },
  { id: "Project", label: "Projects" },
  { id: "Concept", label: "Concepts" },
  { id: "Context", label: "Contexts" },
];

function countOf(id: OntologyKind | "All") {
  if (id === "All") return ontology.length;
  return ontology.filter((entry) => entry.kind === id).length;
}

const countLabel: Record<OntologyKind | "All", string> = {
  All: "nodes",
  Project: "projects",
  Concept: "concepts",
  Context: "contexts",
};

export default function NetworkPage() {
  return (
    <article className="network-stage">
      <h1>Network</h1>
      <div className="network-stage-bar">
        <div className="ontology-kinds" role="radiogroup" aria-label="Show a kind">
          {filters.map((filter) => (
            <span key={filter.id}>
              <input
                type="radio"
                name="stage-kind"
                id={`stage-kind-${filter.id}`}
                value={filter.id}
                defaultChecked={filter.id === "All"}
              />
              <label htmlFor={`stage-kind-${filter.id}`}>
                {filter.id !== "All" ? <span className="kind-swatch" data-kind={filter.id} aria-hidden="true" /> : null}
                {filter.label}
              </label>
            </span>
          ))}
        </div>
        <p className="network-stage-count">
          {filters.map((filter) => (
            <span key={filter.id} data-for={filter.id}>
              {countOf(filter.id)} {countLabel[filter.id]}
            </span>
          ))}
        </p>
      </div>
      <div className="network-frame">
        <NetworkCloud />
      </div>
    </article>
  );
}
