import Image from "next/image";
import Link from "next/link";
import { getProjectImages } from "@/lib/works";

const captions = [
  "The live grid. Webcam snapshots cycle in a fixed order while the piece runs.",
  "Canonical in performance. The grid is projected while the piece runs from a laptop.",
  "A hand approaches the camera. Each cell holds a slightly earlier moment.",
];

export async function Canonical() {
  const images = await getProjectImages("canonical");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Canonical</h1>
      <p className="dek">
        A metalogical structure for performance of presence
      </p>
      <p className="byline">
        Part of{" "}
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
      </p>
      <p className="links">
        <a
          href="https://marlonbarrios.github.io/canonical01/"
          target="_blank"
          rel="noreferrer"
        >
          Open the live app
        </a>
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
        <a
          href="https://github.com/marlonbarrios/canonical01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>

      <div className="prose">
        <p>
          <em>Canonical</em> is an interactive audiovisual piece. The webcam is
          taken in snapshots and set into a fixed grid, ten rows by twelve
          columns, that cycles in a canonical order. Pachelbel’s Canon in D
          plays with that grid. The title names two things: a recognized
          pattern, and the metalogical structure that governs how the snapshots
          are assembled and shown.
        </p>
        <p>
          Canonical has become a practice. I use it to feel my presence in
          relation to this computational device, and to make a coupling with
          it. At the same time, the grid is a metaphor of memory.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/UNm8dwiwLKQ"
            title="Canonical"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Canonical.{" "}
          <a
            href="https://www.youtube.com/watch?v=UNm8dwiwLKQ"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      {images.map((image, index) => (
        <figure className="project-figure" key={image.src}>
          <Image
            src={image.src}
            alt={captions[index] ?? "Canonical"}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1120px) 100vw, 832px"
            priority={index === 0}
          />
          <figcaption>{captions[index] ?? image.title}</figcaption>
        </figure>
      ))}
    </article>
  );
}
