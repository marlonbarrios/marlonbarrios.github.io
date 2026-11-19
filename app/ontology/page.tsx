import type { Metadata } from "next";
import { OntologyIndex } from "@/components/ontology-index";

export const metadata: Metadata = {
  title: "Ontology",
  description:
    "The projects, concepts, and contexts on this site, as a text index.",
};

export default function OntologyPage() {
  return (
    <article className="project">
      <p className="kicker">Ontology</p>
      <h1>Ontology</h1>
      <p className="dek">
        The projects, concepts, and contexts on this site.
      </p>
      <OntologyIndex />
    </article>
  );
}
