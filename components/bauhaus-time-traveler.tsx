import Link from "next/link";
import { stillFigures } from "@/components/image-cluster";
import { getProjectImages } from "@/lib/works";

const videos = [
  {
    id: "8mCOuFeESII",
    title: "Bauhaus Time Traveler",
    short: false,
  },
  {
    id: "FXqlyg2kZZU",
    title: "Bauhaus Time Traveler",
    short: false,
  },
  {
    id: "0HA865xe0pM",
    title: "Bauhaus Time Traveler",
    short: false,
  },
  {
    id: "DQc6vfDTufg",
    title: "Bauhaus Time Traveler",
    short: true,
  },
];

const floridaCaption =
  "Lecture-performance at the School of Theatre and Dance, University of Florida, March 2026. Photograph © Center for Arts, Migration, and Entrepreneurship (CAME).";

export async function BauhausTimeTraveler() {
  const images = await getProjectImages("born-in-latent-space", "uf");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Bauhaus Time Traveler</h1>
      <p className="dek">One of the first apps I developed, in 2024.</p>
      <p className="byline">
        Part of{" "}
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
      </p>
      <p className="links">
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
        <Link href="/projects/local-ai">Local AI</Link>
        <a
          href="https://github.com/marlonbarrios/bauhaus_time_traveler_localai_pc"
          target="_blank"
          rel="noreferrer"
        >
          A local, open source version
        </a>
        <a href="https://fal.ai/grants" target="_blank" rel="noreferrer">
          fal.ai Research Grants
        </a>
      </p>

      <div className="prose">
        <p>
          <em>Bauhaus Time Traveler</em> is one of the first apps I developed,
          in 2024. It is part of{" "}
          <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>.
        </p>
        <p>
          The app transforms the webcam in real time. The first version used
          turbo models, mostly through a research grant from{" "}
          <a href="https://fal.ai/grants" target="_blank" rel="noreferrer">
            fal.ai
          </a>
          . Those models made images fast enough that the sequence read as
          video.
        </p>
        <p>
          It kept developing. Later versions used Stream Diffusion, and then
          Daydream, served online from the Daydream platform. The latest
          version is the local AI version. It is part of{" "}
          <Link href="/projects/local-ai">Local AI</Link>, and the code is in{" "}
          <a
            href="https://github.com/marlonbarrios/bauhaus_time_traveler_localai_pc"
            target="_blank"
            rel="noreferrer"
          >
            bauhaus_time_traveler_localai_pc
          </a>
          .
        </p>
      </div>

      {videos.map((video) => (
        <figure className="video" key={video.id}>
          <div className={video.short ? "video-frame is-short" : "video-frame"}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <figcaption>
            {video.short ? "A short of the app. " : "A recording of the app. "}
            <a
              href={
                video.short
                  ? `https://www.youtube.com/shorts/${video.id}`
                  : `https://www.youtube.com/watch?v=${video.id}`
              }
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
            </a>
          </figcaption>
        </figure>
      ))}

      {stillFigures(
        images,
        "Born in Latent Space, lecture-performance at the School of Theatre and Dance, University of Florida, March 2026",
        floridaCaption,
      )}
    </article>
  );
}
