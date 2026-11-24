import Image from "next/image";
import Link from "next/link";
import { getProjectImages } from "@/lib/works";

const captions: Record<string, { alt: string; caption: string }> = {
  "01-digital-body.jpg": {
    alt: "Lake Studios Berlin news page for Digital Body 4.0, 8–22 November, with a studio photograph of a performer on a green floor beside a projection.",
    caption: "Digital Body 4.0, 8–22 November. Lake Studios Berlin.",
  },
};

export async function LakeStudiosBerlin() {
  const images = await getProjectImages("lake-studios-berlin");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>LAKE Studios Berlin</h1>
      <p className="dek">Dance research and residency center</p>
      <p className="byline">Founding member · Researcher in residence</p>

      <div className="prose">
        <p>
          I am one of the second-generation founding members of{" "}
          <a href="https://lakestudiosberlin.com/" target="_blank" rel="noreferrer">
            LAKE Studios Berlin
          </a>
          , the Lakies. During this phase, I contributed to shaping the
          residency model and developing the vision of LAKE Studios as a space
          for artistic research and exchange, particularly at the intersection
          of dance and technology. The development of artist-led spaces,
          collaborative structures and research-oriented programs is also an
          integral part of my artistic research and practice.
        </p>
        <p>
          I continue my relationship with LAKE Studios as a researcher in
          residence, returning regularly to develop my artistic and
          technological research, as well as leading meditation sessions and
          facilitating the Digital Bodies research labs. Digital Bodies, a
          context I have been invited to facilitate there yearly, is part of
          my{" "}
          <Link href="/projects/embodied-creative-facilitation#digital-bodies">
            Embodied Creative Facilitation
          </Link>{" "}
          practice.
        </p>
      </div>

      {images.map((image) => {
        const name = image.src.split("/").pop() ?? "";
        const known = captions[name];
        return (
          <figure className="project-figure" key={image.src}>
            <Image
              src={image.src}
              alt={known?.alt ?? "Lake Studios Berlin."}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
            <figcaption>{known?.caption ?? "Lake Studios Berlin."}</figcaption>
          </figure>
        );
      })}

      <p className="links">
        <a href="https://lakestudiosberlin.com/" target="_blank" rel="noreferrer">
          Lake Studios Berlin
        </a>
        <a
          href="https://lakestudiosberlin.com/person/team/marlon-barrios-solano-3/"
          target="_blank"
          rel="noreferrer"
        >
          Researcher in residence
        </a>
        <a
          href="https://lakestudiosberlin.com/event/digital-body-4-0/"
          target="_blank"
          rel="noreferrer"
        >
          Digital Body 4.0
        </a>
        <Link href="/projects/embodied-creative-facilitation#digital-bodies">
          Embodied Creative Facilitation
        </Link>
      </p>
    </article>
  );
}
