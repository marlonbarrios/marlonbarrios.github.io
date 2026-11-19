import Image from "next/image";
import Link from "next/link";
import { getProjectImages } from "@/lib/works";

const captions = [
  "The creature rests on the face. Its eyes follow the hand.",
  "A pinch draws the soft body out into a trail.",
];

export async function ExtraordinaryAlien() {
  const images = await getProjectImages("extraordinary-alien");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Extraordinary Alien</h1>
      <p className="dek">A soft body that answers the hand</p>
      <p className="byline">
        Extraordinary Alien 2 · part of{" "}
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
      </p>
      <p className="links">
        <a
          href="https://marlonbarrios.github.io/extraordinary_alien2/"
          target="_blank"
          rel="noreferrer"
        >
          Open the live app
        </a>
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
        <a
          href="https://marlonbarrios.github.io/extraordinary-alien/"
          target="_blank"
          rel="noreferrer"
        >
          Original version
        </a>
        <a
          href="https://github.com/marlonbarrios/extraordinary_alien2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>

      <div className="prose">
        <p>
          <em>Extraordinary Alien</em> was the name for my green card
          application. That name became an allegory of extraordinariness. The
          piece plays, ironically, with being taken or not taken by the United
          States as a valuable artist.
        </p>
        <p>
          The creature is a soft body drawn in the browser. The webcam tracks
          the hand. The index finger and the thumb push the body, pinch it, and
          change its color. The spacebar shows or hides the springs and starts
          the sound.
        </p>
        <p>
          This page is Extraordinary Alien 2, part of{" "}
          <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>.
          The creature is built with p5.js, Toxiclibs, and MediaPipe, adapted
          from{" "}
          <a
            href="https://thecodingtrain.com/challenges/177-soft-body-character"
            target="_blank"
            rel="noreferrer"
          >
            The Coding Train’s soft-body character
          </a>, by Daniel Shiffman, and from nahuelgerth.
        </p>
      </div>

      {images.map((image, index) => (
        <figure className="project-figure" key={image.src}>
          <Image
            src={image.src}
            alt="Extraordinary Alien, a pink soft-body creature answering the hand"
            width={image.width}
            height={image.height}
            sizes="(max-width: 1120px) 100vw, 832px"
            priority={index === 0}
          />
          <figcaption>{captions[index] ?? "The soft-body creature."}</figcaption>
        </figure>
      ))}
    </article>
  );
}
