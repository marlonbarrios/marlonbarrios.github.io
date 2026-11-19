import Link from "next/link";

export function UnstableLandscapes2003() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>UnstableLandscapes</h1>
      <p className="dek">2003–2008</p>
      <p className="byline">
        Interactive performances
      </p>
      <p className="links">
        <Link href="/projects/unstable-landscapes">UnstableLandscapes</Link>
      </p>

      <div className="prose">
        <p>
          From 2003 to 2008 I made interactive performances, programmed mostly in
          Max/MSP/Jitter. The work combined improvisational dance with
          interactivity and real-time processing.
        </p>
        <p>
          Many of the videos are low resolution. They are documentation of the
          work.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PL8C5E8BF050DA1B39"
            title="Unstablelandscape: samples of work"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Unstablelandscape: samples of work.{" "}
          <a
            href="https://www.youtube.com/playlist?list=PL8C5E8BF050DA1B39"
            target="_blank"
            rel="noreferrer"
          >
            Open the playlist
          </a>
        </figcaption>
      </figure>
    </article>
  );
}
