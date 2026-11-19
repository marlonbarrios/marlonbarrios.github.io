import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    name: "My LatentWelt",
    href: "https://github.com/marlonbarrios/my_latentwelt_localai#my-latentwelt",
    src: "/images/local-ai/01-my-latentwelt.png",
    width: 1496,
    height: 1386,
    alt: "My LatentWelt: pendulum paths write Spanish text, including the words mi Latentwelt, across a white field.",
    caption:
      "My LatentWelt. Pendulums write the model’s text along their paths.",
  },
  {
    name: "Semantic Tensegrities",
    href: "https://github.com/marlonbarrios/semantic_temsegrities_localai#semantic-tensegrities--local-ai",
    src: "/images/local-ai/02-semantic-tensegrities.png",
    width: 1508,
    height: 1194,
    alt: "Semantic Tensegrities in the browser: words such as semantic, word, relationships, and linguistics linked by looping lines.",
    caption:
      "Semantic Tensegrities. Words fall with the voice and gather into a network.",
  },
  {
    name: "I Am Not Saying",
    href: "https://github.com/marlonbarrios/I_am_not_sain_localai#i-am-not-saying--a-machine-for-synthetic-expression",
    src: "/images/local-ai/03-i-am-not-saying.png",
    width: 1244,
    height: 848,
    alt: "I Am Not Saying: white letterforms drift across a face with an open mouth, seated in a white chair in a room of computers.",
    caption: "I Am Not Saying. Text leaves the mouth and drifts until it fades.",
  },
  {
    name: "Machine Forgetting",
    href: "https://github.com/marlonbarrios/machine_forgeting_localai#machine-forgetting",
    src: "/images/local-ai/04-machine-forgetting.png",
    width: 1512,
    height: 1208,
    alt: "Machine Forgetting: stretched phrases such as Silence and Tookeens fade curve across a white field.",
    caption:
      "Machine Forgetting. The text is scrubbed, stretched, and reorganized.",
  },
  {
    name: "El Inmigrante",
    href: "https://github.com/marlonbarrios/el_inmigrante_localAI#el-inmigrante--an-endless-tale-of-memory-and-loss",
    src: "/images/local-ai/05-el-inmigrante.png",
    width: 3096,
    height: 2016,
    alt: "The El Inmigrante website: a dark page with the title, the lines ¿Olvida usted algo? and Ojalá, and a button to enter the installation.",
    caption:
      "El Inmigrante. The site opens the installation from Lomelí’s two lines.",
  },
  {
    name: "Bauhaus Time Traveler",
    href: "https://github.com/marlonbarrios/bauhaus_time_traveler_localai_pc",
    src: "/images/born-in-latent-space/uf/03-10-26_marlon-sotd-masterclass-performance-2.jpg",
    width: 6000,
    height: 4000,
    alt: "Lecture-performance at the School of Theatre and Dance, University of Florida, March 2026.",
    caption:
      "Bauhaus Time Traveler, the local AI version. Part of Born in Latent Space.",
  },
];

export function LocalAI() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Local AI</h1>
      <p className="dek">Research into models that run on the machine.</p>
      <p className="byline">
        The apps live within{" "}
        <Link href="/projects/laboratory-of-synthetic-meaning">
          Laboratory of Synthetic Meaning
        </Link>
      </p>
      <p className="links">
        <Link href="/projects/laboratory-of-synthetic-meaning">
          Laboratory of Synthetic Meaning
        </Link>
        <Link href="/ontology">Ontology</Link>
        {apps.map((app) => (
          <a key={app.href} href={app.href} target="_blank" rel="noreferrer">
            {app.name}
          </a>
        ))}
      </p>
      <div className="prose">
        <p>
          <em>Local AI</em> is research into running language models on the
          machine in front of you.
        </p>
        <p>
          The model stays with the person who runs it. The work does not depend
          on a remote service remaining available. The code can be shared,
          read, and changed.
        </p>
        <p>
          So far the apps are My LatentWelt, Semantic Tensegrities, I Am Not
          Saying, Machine Forgetting, and El Inmigrante. They live within{" "}
          <Link href="/projects/laboratory-of-synthetic-meaning">
            Laboratory of Synthetic Meaning
          </Link>
          .{" "}
          <Link href="/projects/bauhaus-time-traveler">Bauhaus Time Traveler</Link>{" "}
          is the local AI version of that app, and part of{" "}
          <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>.
        </p>
        <p>
          The{" "}
          <Link href="/ontology">ontology</Link> is part of this research. A
          local model can read the map of the work.
        </p>
      </div>
      {apps.map((app) => (
        <figure className="project-figure is-half" key={app.href}>
          <a href={app.href} target="_blank" rel="noreferrer">
            <Image
              src={app.src}
              alt={app.alt}
              width={app.width}
              height={app.height}
              sizes="(max-width: 1120px) 100vw, 832px"
            />
          </a>
          <figcaption>
            <a href={app.href} target="_blank" rel="noreferrer">
              {app.caption}
            </a>
          </figcaption>
        </figure>
      ))}
    </article>
  );
}
