import Image from "next/image";
import Link from "next/link";
import { getProjectImages } from "@/lib/works";

export async function PseudoOuroboros() {
  const images = await getProjectImages("pseudo-ouroboros");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Pseudo Ouroboros</h1>
      <p className="dek">The genesis of self-interest in gradient descent</p>
      <p className="links">
        <a
          href="https://marlonbarrios.github.io/pseudo_ouroboros/"
          target="_blank"
          rel="noreferrer"
        >
          Open the live app
        </a>
        <a
          href="https://github.com/marlonbarrios/pseudo_ouroboros"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>

      <div className="prose">
        <p>
          <em>Pseudo Ouroboros</em> is an experimental generative piece. A
          snake-like organism moves in smooth curves and keeps renewing itself,
          an ouroboros that does not bite its tail. The path comes from noise
          and simple rules, in the manner of gradient descent turning back on
          its own steps.
        </p>
        <p>
          The sound is made in the browser and changes with the creature’s
          movement, and with the time of day.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/58GtF1Lki5Y"
            title="Pseudo Ouroboros"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Pseudo Ouroboros.{" "}
          <a
            href="https://www.youtube.com/watch?v=58GtF1Lki5Y"
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
            alt="Pseudo Ouroboros, a snake-like generative trail"
            width={image.width}
            height={image.height}
            sizes="(max-width: 1120px) 100vw, 832px"
            priority={index === 0}
          />
          <figcaption>The generative trail.</figcaption>
        </figure>
      ))}
    </article>
  );
}
