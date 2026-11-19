"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ontology, type OntologyKind } from "@/lib/ontology";

const filters: Array<{
  id: OntologyKind | "All";
  label: string;
  count: string;
}> = [
  { id: "All", label: "All", count: "entries" },
  { id: "Project", label: "Projects", count: "projects" },
  { id: "Concept", label: "Concepts", count: "concepts" },
  { id: "Context", label: "Contexts", count: "contexts" },
];

function countOf(id: OntologyKind | "All") {
  if (id === "All") return ontology.length;
  return ontology.filter((entry) => entry.kind === id).length;
}

function matches(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return ontology;
  return ontology.filter((entry) => {
    const haystack = [entry.name, entry.kind, entry.text, ...(entry.terms ?? [])]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export function OntologyIndex() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => matches(query), [query]);
  const conceptCount = countOf("Concept");
  const groups = filters.filter((filter) => filter.id !== "All");

  return (
    <div className="ontology">
      <p className="ontology-count">
        {conceptCount} concepts. {ontology.length} nodes in all.
      </p>
      <div className="ontology-tools">
        <label className="ontology-search" htmlFor="ontology-query">
          Search
          <input
            id="ontology-query"
            type="search"
            value={query}
            placeholder="A project, concept, or context"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="ontology-kinds" role="radiogroup" aria-label="Show a kind">
        {filters.map((filter) => (
          <span key={filter.id}>
            <input
              type="radio"
              name="ontology-kind"
              id={`ontology-kind-${filter.id}`}
              value={filter.id}
              defaultChecked={filter.id === "All"}
            />
            <label htmlFor={`ontology-kind-${filter.id}`}>
              {filter.label}
              <span>{countOf(filter.id)}</span>
            </label>
          </span>
        ))}
      </div>
      <p className="ontology-count ontology-live">
        {filters.map((filter) => (
          <span key={filter.id} data-for={filter.id}>
            {countOf(filter.id)} {filter.count}
          </span>
        ))}
      </p>
      <p className="ontology-count ontology-search-count" aria-live="polite">
        {results.length === 0
          ? "Nothing matches that search."
          : `${results.length} ${results.length === 1 ? "entry" : "entries"}`}
      </p>
      {groups.map((filter) => {
        const items = results.filter((entry) => entry.kind === filter.id);
        if (items.length === 0) return null;
        return (
          <section key={filter.id} className="ontology-section" data-kind={filter.id}>
            <h2>{filter.label}</h2>
            <ul className="ontology-list">
              {items.map((entry) => (
                <li key={`${entry.kind}-${entry.name}`}>
                  <Link href={entry.href}>{entry.name}</Link>
                  <p>{entry.text}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
