import Image from "next/image";
import Link from "next/link";
import { getProjectImages } from "@/lib/works";

export async function Proximities() {
  const images = await getProjectImages("proximities");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Proximities</h1>
      <p className="dek">Interactive image and sound</p>
      <p className="byline">
        Two apps, used sometimes in{" "}
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
      </p>
      <p className="links">
        <a
          href="https://marlonbarrios.github.io/instrumentalproximities/"
          target="_blank"
          rel="noreferrer"
        >
          Instrumental Proximities
        </a>
        <a
          href="https://marlonbarrios.github.io/body_proximities/"
          target="_blank"
          rel="noreferrer"
        >
          Body Proximities
        </a>
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
        <a
          href="https://github.com/marlonbarrios/instrumentalproximities"
          target="_blank"
          rel="noreferrer"
        >
          Instrumental Proximities on GitHub
        </a>
        <a
          href="https://github.com/marlonbarrios/body_proximities"
          target="_blank"
          rel="noreferrer"
        >
          Body Proximities on GitHub
        </a>
      </p>

      {images.map((image, index) => (
        <figure className="project-figure" key={image.src}>
          <Image
            src={image.src}
            alt="Instrumental Proximities, lines connecting the hands and the face"
            width={image.width}
            height={image.height}
            sizes="(max-width: 1120px) 100vw, 832px"
            priority={index === 0}
          />
          <figcaption>
            Instrumental Proximities. Lines connect the hands and the face.
          </figcaption>
        </figure>
      ))}

      <div className="prose">
        <p>
          <em>Proximities</em> is two apps for interactive image and sound.
          Lines are drawn across what each app tracks, and the movement makes
          ambient sound. The difference is what is tracked.
        </p>
        <p>
          <em>Instrumental Proximities</em> tracks the face and the hands,
          including the lips. Lines connect those points. The height of a hand,
          the speed of a gesture, and the opening of the mouth each change the
          sound.
        </p>
        <p>
          <em>Body Proximities</em> tracks the hands and the center of the
          body, and the extremities of the legs as well. Lines run from that
          center out through the hands and the legs, and the sound answers how
          near the hands come.
        </p>
        <p>
          I use them sometimes in{" "}
          <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>,
          to generate a sense of intimacy, and at the same time a relationship
          with the face and the lips, and with how near the hands come to the
          face. Both are built with p5.js, MediaPipe, and Tone.js.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/1-0gC-jJMHA"
            title="Proximities"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Proximities.{" "}
          <a
            href="https://www.youtube.com/watch?v=1-0gC-jJMHA"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>
    </article>
  );
}
