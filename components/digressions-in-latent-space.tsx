import Image from "next/image";
import Link from "next/link";
import { getProjectImages } from "@/lib/works";

export async function DigressionsInLatentSpace() {
  const images = await getProjectImages("digressions-in-latent-space");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Digressions in Latent Space</h1>
      <p className="dek">Album</p>
      <p className="byline">
        Recording tools and generative AI · shared on Bandcamp
      </p>
      <p className="links">
        <a
          href="https://marlonbarriossolano.bandcamp.com/album/digressions-in-latent-space"
          target="_blank"
          rel="noreferrer"
        >
          Bandcamp
        </a>
        <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>
        <Link href="/projects/in-pursuit-of-stolen-ghosts">
          In Pursuit of Stolen Ghosts
        </Link>
      </p>

      {images.map((image, index) => (
        <figure className="project-figure" key={image.src}>
          <Image
            src={image.src}
            alt="Digressions in Latent Space"
            width={image.width}
            height={image.height}
            sizes="(max-width: 1120px) 100vw, 1120px"
            priority={index === 0}
          />
          <figcaption>Digressions in Latent Space</figcaption>
        </figure>
      ))}

      <div className="prose">
        <p>
          Making <em>Digressions in Latent Space</em> has been a journey into
          my own creative process, into generative AI, and into the
          multimodality of my practice. This electronic experimental album is a
          sonorous exploration that runs alongside my multimedia
          lecture-performance, <em>Duets in Latent Space</em>. It follows the
          dance between composing soundscapes and the generative capabilities
          of artificial intelligence.
        </p>
        <p>
          Latent space is a high-dimensional, abstract domain where the hidden
          features of data are compressed and represented. The album is a
          bridge between a person and a model, and a record of what that
          collaboration can generate.
        </p>
        <p>
          Each track offers a different listening. Together they follow the
          project’s interest in unseen dimensions of data, cultural memory, and
          language. The pieces came out of working with generative models and
          machine learning, looking for hidden narratives and for soundscapes
          that keep changing.
        </p>
        <p>
          I began with MusicGen, the model developed by Meta and available on
          Replicate, and with the sound design of many other models, edited in
          Audacity. That combination let me sculpt the audio landscapes of the
          album. Each track is one facet of the exchange between my own
          composing and the models, and of the ordinary work of editing.
        </p>
        <p>
          <em>In Pursuit of Stolen Ghosts</em> uses theremin-like sounds to
          evoke a science-fiction wonder, alongside its search for ancestors
          erased by colonialism. The track takes the opaque outputs of a
          model’s black box and makes a haunting atmosphere, an invitation to
          sit with an identity shaped by forgotten connections.
        </p>
        <p>
          <em>Blackbox Hyper-Objects</em> stays with that opacity. It draws on
          Timothy Morton’s hyperobjects: entities that are vast and
          distributed, and still intimate with daily life. The piece is a
          contemplation of models that shape existence and remain beyond full
          comprehension.
        </p>
        <p>
          <em>Bauhaus Time Traveler Stripper</em> sets Bauhaus principles next
          to a speculative future. Strippers of the future travel back as
          embodiments of the Bauhaus ethos. Rapid beats and shifting
          soundscapes follow the speed of technological and social change, and
          the mutability of the societies still to come.
        </p>
        <p>
          Sharing the album on{" "}
          <a
            href="https://marlonbarriossolano.bandcamp.com/album/digressions-in-latent-space"
            target="_blank"
            rel="noreferrer"
          >
            Bandcamp
          </a>{" "}
          is more than a release. I want
          listeners to consider what AI does inside art, and how these tools
          can widen a practice. The record is also a reflection on human and
          machine collaboration, and on poking at hidden narratives inside an
          ecology of latent spaces.
        </p>
      </div>
    </article>
  );
}
