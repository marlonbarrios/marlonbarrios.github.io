import Link from "next/link";

export function Proteans() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Proteans</h1>
      <p className="dek">“There is always someone for you… in the future”</p>
      <p className="byline">
        Single-channel video installation · Concept, programming, and AI video
        production
      </p>

      <div className="prose">
        <p>
          <em>Proteans</em> plays a continuous loop of ten time travelers from
          the future, each seeking to date people from our present or their
          past. In each video, a Protean introduces themselves and shares their
          story.
        </p>
        <p>
          The imagery and text for each Protean are generated through{" "}
          <a href="https://proteus-umber.vercel.app" target="_blank" rel="noreferrer">
            Proteus
          </a>, an app I developed. A large language model writes the
          text. DALL-E makes the images. Deepfake then brings those stills to
          life with the corresponding text.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/iYiMgqiLDyU"
            title="Proteans: There is always someone for you… in the future"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Proteans: “There is always someone for you… in the future.”{" "}
          <a
            href="https://www.youtube.com/watch?v=iYiMgqiLDyU"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <p className="links">
        <a
          href="https://proteus-umber.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Open Proteus
        </a>
        <a
          href="https://github.com/marlonbarrios/proteus"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
      </p>
    </article>
  );
}
