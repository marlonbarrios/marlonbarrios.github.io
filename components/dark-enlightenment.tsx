import Image from "next/image";
import Link from "next/link";
import { getProjectImages, type WorkImage } from "@/lib/works";

function Figure({
  image,
  alt,
  caption,
}: {
  image?: WorkImage;
  alt: string;
  caption: string;
}) {
  if (!image) return null;
  return (
    <figure className="project-figure">
      <Image
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 1120px) 100vw, 1120px"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export async function DarkEnlightenment() {
  const images = await getProjectImages("dark-enlightenment");
  const shot = (name: string) =>
    images.find((image) => image.src.endsWith(`/${name}`));
  const album = shot("album.png");
  const playlist =
    "https://suno.com/playlist/c8e5c323-b6d3-4ffa-9993-a0b5bfee3729";

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Dark Enlightenment</h1>
      <p className="dek">Techno-republics and Other Vectors</p>
      <p className="byline">
        Dancing within the storm · Theater im Depot, Dortmund · October 1, 2025
      </p>
      <p className="links">
        <Link href="/projects/tectonics-of-otherness">
          Part of The Tectonics of Otherness
        </Link>
        <a href={playlist} target="_blank" rel="noreferrer">
          Listen on Suno
        </a>
      </p>

      <div className="prose">
        <p>
          <em>Dark Enlightenment</em> is a rave within synthetic media. Motion, migration, dance, and
          ideology collide inside a speculative techno-environment. Sound,
          image, and movement make a dense atmosphere, a site where generative
          AI is both medium and mirror, reflecting the tangled histories of
          power that shape the present.
        </p>
        <p>
          At the core is a playlist of AI-generated songs, lyrics, and videos,
          unfolding across several screens and switching between English and
          German. Each track is a poetic node linking Dark Enlightenment,
          technorepublics, eugenics, and algorithmic bias. The music hits hard:
          high volume, reactive light, fog. Half rave, half ritual.
        </p>
        <p>
          The songs were composed with AI in Suno. The album is{" "}
          <a href={playlist} target="_blank" rel="noreferrer">
            Dark Enlightenment, Techno-republics and Other Vectors
          </a>. That music became part of the rave, dancing within the storm.
        </p>
        <p>
          A live camera links to models and real-time diffusion, answering the
          movement of visitors. A Dark Enlightenment Scroll streams algorithmic
          text that narrates the absurdities of ideology and history.
        </p>
        <p>
          The work is both party and tragedy, an algorithmic choreography
          confronting the ghosts of fascism, nationalism, and white supremacy.
          It invites reflection, and it invites you to dance within the storm.
          There is no outside to the systems we inhabit.
        </p>
        <p>
          The boundary between performance, the audience, and the intensity of
          a rave inside a synthetic environment was a way to expose the
          paradoxes of utopian visions. It converged at Theater im Depot.
          Marcel Gbeffa was in the dance.
        </p>
      </div>

      <Figure
        image={shot("01-dancing.jpg")}
        alt="People dancing in haze before a projection of a planet."
        caption="The rave. Beyond Gravity, Theater im Depot, Dortmund, October 1, 2025."
      />

      <Figure
        image={shot("02-room.jpg")}
        alt="People dancing at night under yellow light, with video projected on the walls."
        caption="High volume, reactive light, fog. Theater im Depot, Dortmund."
      />

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/t-PcjBN-NdU"
            title="Dark Enlightenment: Techno-republics and Other Vectors — Dancing within the storm"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Dark Enlightenment: Techno-republics and Other Vectors — Dancing
          within the storm.{" "}
          <a
            href="https://www.youtube.com/watch?v=t-PcjBN-NdU"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLC2ijZ2U-avi_CB1NQFV6og2eg7ZTpWo3"
            title="Dark Enlightenment, Techno-republic and other vectors"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Dark Enlightenment, Techno-republic and other vectors. The synthetic
          media made for the rave.{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLC2ijZ2U-avi_CB1NQFV6og2eg7ZTpWo3"
            target="_blank"
            rel="noreferrer"
          >
            Open the playlist
          </a>
        </figcaption>
      </figure>

      {album ? (
        <figure className="project-figure">
          <a href={playlist} target="_blank" rel="noreferrer">
            <Image
              src={album.src}
              alt="The Suno album Dark Enlightenment, Techno-republics and Other Vectors."
              width={album.width}
              height={album.height}
              sizes="(max-width: 1120px) 100vw, 832px"
            />
          </a>
          <figcaption>
            The album, composed with AI in Suno. The music of the rave.{" "}
            <a href={playlist} target="_blank" rel="noreferrer">
              Open the playlist
            </a>
          </figcaption>
        </figure>
      ) : null}
    </article>
  );
}
