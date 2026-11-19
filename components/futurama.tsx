import Image from "next/image";
import Link from "next/link";
import { getProjectImages } from "@/lib/works";

function figureCopy(src: string) {
  if (src.includes("Tad_Tadlock")) {
    return {
      alt: "Tad Tadlock and Marc Breaux in a car, from Design for Dreaming, 1956",
      caption: "Tad Tadlock and Marc Breaux in Design for Dreaming, 1956.",
    };
  }
  return {
    alt: "Tad Tadlock in a close-up from the upscaled Futurama video",
    caption: "Tad Tadlock in the upscaled video.",
  };
}

export async function Futurama() {
  const images = await getProjectImages("futurama");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Futurama</h1>
      <p className="dek">1956, upscaled</p>
      <p className="byline">
        The first piece in Dancing for Technology · homage to{" "}
        <a
          href="https://en.wikipedia.org/wiki/Tad_Tadlock"
          target="_blank"
          rel="noreferrer"
        >
          Tad Tadlock
        </a>
      </p>
      <p className="links">
        <Link href="/projects/unstable-landscapes-2003">
          UnstableLandscapes, 2003–2008
        </Link>
        <a
          href="https://en.wikipedia.org/wiki/Tad_Tadlock"
          target="_blank"
          rel="noreferrer"
        >
          Tad Tadlock
        </a>
        <a href="https://arts.ufl.edu/" target="_blank" rel="noreferrer">
          College of the Arts, University of Florida
        </a>
      </p>

      <div className="prose">
        <p>
          I made <em>Futurama</em> in 2003 at 320 × 240 pixels, a tiny frame
          carrying a speculative world. At the time I considered it a
          video-dance. It never entered the screen-dance festival circuit,
          simply because it was too small, and perhaps because it was
          procedurally generated. Upscaling was practically impossible then.
        </p>
        <p>
          Decades later I have enhanced it with AI, to raise the resolution. I
          am still refining the process, and I am strangely attached to the
          artifacts: the blur, the compression noise, the retrofuturistic
          vibration. It feels like a temporal fold. A 1956 industrial utopia
          meets early digital experimentation, and meets contemporary
          generative AI.
        </p>
        <p>
          It was one of my earliest attempts at generativity through rule
          systems, a computational structure that could autonomously mix,
          layer, and process found footage. Two video streams were randomly
          combined and transformed in Max/MSP/Jitter, a nonlinear video-dance
          that kept mutating. The choreography was not fixed. It was
          procedural.
        </p>
        <p>
          The source is <em>Design for Dreaming</em> (1956), a General Motors
          promotional film, a glossy mid-century fantasy of cars, appliances,
          and techno-desire. I re-routed that corporate futurism through a
          rule-based improvisational engine.
        </p>
        <p>
          An interactive version existed for several years. The upper layer
          becomes visible and audible only when a participant moves inside a
          spotlight. The body activates the system. The dance reveals the
          dream. The sound was composed for the clips.
        </p>
        <p>
          This was the first piece in the series Dancing for Technology, in
          homage to the dancer{" "}
          <a
            href="https://en.wikipedia.org/wiki/Tad_Tadlock"
            target="_blank"
            rel="noreferrer"
          >
            Tad Tadlock
          </a>, who appeared in many of these utopian propaganda films.
        </p>
        <p>
          In retrospect, the work foreshadowed my ongoing investigations into
          generative systems, latent structures, and computational
          choreography. Before large language models. Before diffusion models.
          Just rules, randomness, and a desire to let the machine improvise.
          Sometimes the past was already rehearsing the future.
        </p>
        <p>
          Presented with the{" "}
          <a href="https://arts.ufl.edu/" target="_blank" rel="noreferrer">
            College of the Arts
          </a>{" "}
          and the Center for Arts, Migration, and Entrepreneurship at the
          University of Florida.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/UR_Xq6i0xpE?start=58"
            title="Futurama, 1956, upscaled"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Futurama, 1956, upscaled.{" "}
          <a
            href="https://www.youtube.com/watch?v=UR_Xq6i0xpE&t=58s"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      {images.map((image, index) => {
        const copy = figureCopy(image.src);
        return (
          <figure className="project-figure" key={image.src}>
            <Image
              src={image.src}
              alt={copy.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1120px) 100vw, 832px"
              priority={index === 0}
            />
            <figcaption>{copy.caption}</figcaption>
          </figure>
        );
      })}
    </article>
  );
}
