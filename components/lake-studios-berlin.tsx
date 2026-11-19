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
      <h1>Lake Studios Berlin</h1>
      <p className="dek">Dance research and residency center</p>
      <p className="byline">Founding member · Researcher in residence</p>

      <div className="prose">
        <p>
          I am one of the founding members of{" "}
          <a href="https://lakestudiosberlin.com/" target="_blank" rel="noreferrer">
            Lake Studios Berlin
          </a>
          , the Lakeys. I became the designer and architect of how the
          residencies work, and I created the model for Lake Studios as an
          art and research center.
        </p>
        <p>
          I continue with Lake Studios as a researcher in residence. Digital
          Bodies, a context I have been invited to facilitate there yearly,
          is part of{" "}
          <Link href="/projects/embodied-creative-facilitation#digital-bodies">
            Embodied Creative Facilitation
          </Link>
          .
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
