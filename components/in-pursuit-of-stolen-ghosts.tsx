import Image from "next/image";
import Link from "next/link";

export function InPursuitOfStolenGhosts() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>In Pursuit of Stolen Ghosts</h1>
      <p className="dek">Duet in Latent Space · Generative version</p>
      <p className="byline">
        Lake Studios Berlin · February 2024
      </p>

      <div className="prose">
        <p>
          I developed <em>In Pursuit of Stolen Ghosts | Duet in Latent Space</em>{" "}
          during an artistic and research residency at Lake Studios Berlin in
          February 2024. The piece sits at the intersection of generative AI,
          sound, and performance. Latent space is a metaphor for what is
          remembered, distorted, and re-generated.
        </p>
        <p>
          The work reflects on cultural loss and diaspora, and on my Venezuelan
          heritage and migration. The stolen ghost
          names the feeling of ancestral and collective memory that can no
          longer be fully recovered. The app is one surface where sketch,
          sound, and model output meet.
        </p>
      </div>

      <figure className="project-figure is-half">
        <Image
          src="/images/in-pursuit-of-stolen-ghosts/ghost2.jpg"
          alt="A generated figure with outstretched arms, holding spheres linked by cords inside a dark ring."
          width={512}
          height={512}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          Generated figure. Sketch, sound, and the model meet in one image.
        </figcaption>
      </figure>
      <figure className="project-figure">
        <Image
          src="/images/in-pursuit-of-stolen-ghosts/01-touch.jpg"
          alt="A person draws on a large touch screen. A sketch sits on the left and a generated figure with outstretched arms on the right."
          width={1280}
          height={720}
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
        <figcaption>
          Touch screen version, Dortmund. The drawing and the generated figure
          share the screen.
        </figcaption>
      </figure>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/SAQ17Rze1aI"
            title="In Pursuit of Stolen Ghosts, touch screen version, Dortmund, Germany"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Touch screen version, Dortmund, Germany.{" "}
          <a
            href="https://www.youtube.com/watch?v=SAQ17Rze1aI"
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
