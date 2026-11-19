import Image from "next/image";
import Link from "next/link";
import { getProjectImages, type WorkImage } from "@/lib/works";

const site = "https://marlonbarrios.github.io/hybrid_intelligences_viz";

function page(path: string) {
  return `${site}/${path}`;
}

function Figure({
  image,
  alt,
  caption,
}: {
  image: WorkImage;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="project-figure">
      <Image
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 1120px) 100vw, 1120px"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const platform = [
  ["essays.html", "Essays", "Essays I have published. Guest writing later."],
  ["ontology.html", "Ontology", "A searchable scheme of concepts and relations — JSON-LD, Turtle, OWL."],
  ["network.html", "Network", "Information visualization: a radial map of the same vocabulary."],
  ["views.html", "Views", "Network first, then chord, hive, layered verb, and path walker."],
  ["voice.html", "Voice", "Conversational AI grounded in the ontology."],
  ["image.html", "Image", "Abstract info-viz stills generated from a concept."],
  ["mini-pod.html", "Mini-pod", "A spoken episode from the same knowledge architecture."],
  ["enact.html", "Enact", "Cognitive prompts for a choreography of awareness."],
  ["interior.html", "Interior", "The model speculates on interpretability, Umwelt, and interspecies reading."],
  ["creative-b.html", "Creative B", "The inaugural summer 2026 prototype: Canvas, slides, highlights, showcase."],
] as const;

export async function HybridIntelligences() {
  const images = await getProjectImages("hybrid-intelligences");
  const program = images.find((image) => image.src.endsWith("/program.jpg"));
  const network = images.find((image) => image.src.endsWith("/network.jpg"));
  const siteHome = images.find((image) => image.src.endsWith("/site-home.png"));
  const conceptNetwork = images.find((image) =>
    image.src.endsWith("/conceptual-network.png"),
  );

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Hybrid Intelligences</h1>
      <p className="dek">
        A three-year research project, and a hybrid tool for dynamic knowledge.
      </p>
      <p className="byline">
        Launched summer 2026 · Maker-in-Residence, CAME
      </p>
      <p className="links">
        <a href={site} target="_blank" rel="noreferrer">
          Open the project site
        </a>
      </p>

      {conceptNetwork ? (
        <Figure
          image={conceptNetwork}
          alt="Network view of Hybrid Intelligences: a circular field of linked concepts, authors, and relations."
          caption="Network view."
        />
      ) : null}

      <div className="prose">
        <p>
          Hybrid Intelligences is a three-year research project I lead as
          Maker-in-Residence at the{" "}
          <a href="https://arts.ufl.edu/came/" target="_blank" rel="noreferrer">
            Center for Arts, Migration + Entrepreneurship (CAME)
          </a>{" "}
          in the{" "}
          <a href="https://arts.ufl.edu/" target="_blank" rel="noreferrer">
            University of Florida College of the Arts
          </a>
          . It was launched in summer 2026.
        </p>
        <p>
          Its aim is to develop an epistemic framework that can account for,
          explain, and follow what happens when humans think, make, and decide
          inside cognitive assemblages — and to treat embodiment as a complex
          phenomenon, not a simple fact of having flesh.
        </p>
      </div>

      <h2>The project</h2>
      {program ? (
        <Figure
          image={program}
          alt="Diagram of the Hybrid Intelligences Program: Embodied Leadership and Creativity in the Era of AI. Creative B at the University of Florida, July 13–30, 2026 — co-led by Marlon Barrios Solano and Erika Moore, with three tracks, partners, and the public site as a hybrid dynamic knowledge architecture."
          caption="The summer 2026 prototype · Creative B 2026 · July 13–30."
        />
      ) : null}
      <div className="prose">
        <p>
          The work is my research: a sustained inquiry into intelligence,
          creativity, and leadership in the era of AI. The first course — a
          prototype of the framework — was launched that summer as the inaugural{" "}
          <a href={page("creative-b.html")} target="_blank" rel="noreferrer">
            Creative B 2026
          </a>{" "}
          program (
          <em>
            Hybrid Intelligences: Embodied Leadership and Creativity in the Era
            of AI
          </em>
          , July 13–30, 2026). The three-year project continues after that
          prototype. This site is one of its instruments.
        </p>
        <p>
          Hybrid Intelligences does not treat intelligence as a thing located
          inside a skull, a machine, a server, or a sovereign individual.
          Intelligence is an activity of coupling. It is a relational event. It
          happens through bodies, tools, architectures, histories, gestures,
          laws, media, atmospheres, and the fragile rhythms of co-presence. In
          the era of artificial intelligence, this premise is not only
          philosophical. It is urgent. Mediation has become cognitive. The
          tools that once transmitted messages now participate in the production
          of perception, memory, imagination, decision, orientation, and
          future-making.
        </p>
      </div>

      <h2>An epistemic framework</h2>
      <div className="prose">
        <p>
          The goal is a vocabulary that can follow the developments and changes
          implicated when humans interact in cognitive assemblages — without
          collapsing into techno-dualism on one side or biological
          exceptionalism on the other.
        </p>
        <p>
          Embodiment must be understood as <em>complex</em> and{" "}
          <em>emergent</em>. A living body is already a nested ecology: nerves,
          breath, posture, affect, memory, training, injury, culture, language,
          tools, rooms, laws, and other bodies. No single level explains
          cognition. Capacities appear from relations that none of the parts
          possess alone. Complex embodiment names this condition: mind as
          world-involving process, always more than biological presence, always
          more than technical mediation, always becoming through relation.
        </p>
        <p>
          The project draws on enactivism and 4E cognition — embodied,
          embedded, enacted, extended — and on posthumanist accounts of mind,
          especially N. Katherine Hayles’s cognitive assemblages and
          techno-symbiosis. Cognition, in this sense, is not restricted to
          conscious human thought. It is the interpretation of information
          within contexts that connect it with meaning. Intelligence does not
          belong exclusively to the human user or the technical device. It
          circulates through bodies, sensors, interfaces, datasets, habits,
          institutions, and environments.
        </p>
        <p>
          The fuller argument is in{" "}
          <a href={page("essay.html")} target="_blank" rel="noreferrer">
            Essay 1
          </a>
          .{" "}
          <a href={page("essay-2.html")} target="_blank" rel="noreferrer">
            Essay 2
          </a>{" "}
          (<em>My Umwelt</em>) and{" "}
          <a href={page("essay-3.html")} target="_blank" rel="noreferrer">
            Essay 3
          </a>{" "}
          continue that inquiry — Essay 3 describes the Hub’s ontology,
          knowledge graph, and generative interfaces as one experimental
          cognitive assemblage. The three essays published now are mine. The{" "}
          <a href={page("essays.html")} target="_blank" rel="noreferrer">
            Essays
          </a>{" "}
          section is a publishing hub for this research and for collaborations
          that feed the ontology directly.
        </p>
      </div>

      <h2>This platform</h2>
      {network ? (
        <Figure
          image={network}
          alt="A person standing in profile before a large circular Hybrid Intelligences network visualization: concentric rings of concepts, authors, and relations glowing from a cyan core."
          caption="The site as a hybrid dynamic knowledge architecture."
        />
      ) : null}
      <div className="prose">
        <p>
          This online platform is itself a hybrid: a dynamic cognitive
          assemblage I created — a knowledge architecture
          for investigating embodiment inside relational frameworks of embodied
          cognition and posthumanist thought. It is almost an augmented tool
          for understanding the hybridity of the cognitive process — not a
          brochure about the research, but a working instrument of it. In the
          ontology it is named the Hybrid Intelligences Hub.
        </p>
        <p>
          Ontology design, information visualization, conversational AI, and
          essay publication sit in one coupling. Concepts can be read as
          definitions, as a radial map, as a spoken companion, as a generated
          still, and as writing. The site is a place to publish relevant
          knowledge and to keep making that knowledge move. That architecture
          is the subject of{" "}
          <a href={page("essay-3.html")} target="_blank" rel="noreferrer">
            Essay 3
          </a>
          .
        </p>
      </div>
      {siteHome ? (
        <Figure
          image={siteHome}
          alt="The Hybrid Intelligences website home, with the line Cognition as coupling across bodies, tools, institutions, and worlds."
          caption="The project site."
        />
      ) : null}
      <ul className="record">
        {platform.map(([path, title, detail]) => (
          <li key={path}>
            <a href={page(path)} target="_blank" rel="noreferrer">
              {title}
            </a>
            {" — "}
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
}
