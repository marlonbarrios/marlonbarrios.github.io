import Image from "next/image";
import Link from "next/link";
import { getProjectImages, type WorkImage } from "@/lib/works";

const site = "https://marlonbarrios.github.io/tectonics_of-_otherness/";
const festival =
  "Beyond Gravity Festival, DIPOD / Theater im Depot, Dortmund, October 1–5, 2025.";
const process =
  "Creation process, Dortmund, August–September 2025.";

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

export async function TectonicsOfOtherness() {
  const images = await getProjectImages("tectonics-of-otherness");
  const shot = (name: string) =>
    images.find((image) => image.src.endsWith(`/${name}`));

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>The Tectonics of Otherness</h1>
      <p className="dek">Reloaded · October 2025–ongoing</p>
      <p className="byline">
        With María Luisa Angulo
      </p>
      <p className="links">
        <a href={site} target="_blank" rel="noreferrer">
          Open the project site
        </a>
      </p>

      <Figure
        image={shot("01-gathering.jpg")}
        alt="Visitors gathered around a projection and a wall of notes at DIPOD / Theater im Depot, Dortmund."
        caption={festival}
      />

      <div className="prose">
        <p>
          This project investigates the <em>tectonics of otherness</em> — the
          deep, shifting forces that shape relationships between coloniality
          and postcoloniality, self and other, human and machine, memory and
          speculation. We understand these forces as dynamic vectors,
          continuously in motion, intersecting across bodies, lands, and
          epistemologies.
        </p>
        <p>
          The most constant element we have discovered through this research
          is movement — migration, displacement, and transformation.
        </p>
        <p>
          Within this framework, we have created a polymorphic, mutating
          physical and epistemic space, traversed by artificial intelligence,
          where the knowing of self and other becomes entangled in networks of
          power, memory, perception, and imagination. This tectonic space is
          alive and shifting, transforming from day to day as the residency
          and exhibition unfolds.
        </p>
      </div>

      <div className="prose">
        <p>
          <em>The Tectonics of Otherness</em> is a project María Luisa Angulo (El
          Salvador/France) and I (Venezuela/USA) initiated and led. We developed
          it during the residency Beyond Gravity at DIPOD / Theater im Depot in
          Dortmund, Germany, within the Beyond Gravity Festival and Symposium
          (October 1–5, 2025).
        </p>
        <p>
          The space created welcomes the participation of four international
          collaborators:
        </p>
      </div>
      <ul className="record">
        <li>Lenara Werle (Brazil/Germany)</li>
        <li>Marcel Gbeffa (Benin)</li>
        <li>Vera Rivas (Mexico)</li>
        <li>Oliver Walton (Australia/UK)</li>
      </ul>
      <div className="prose">
        <p>
          Together, the six artists form an evolving field of encounters — a
          shared ecosystem of stillness, movement, sound, text, affect, and
          synthetic imagery.
        </p>
      </div>

      <Figure
        image={shot("03-listening.jpg")}
        alt="Two people rest on cushions wearing headphones and eye masks, in the installation at Beyond Gravity."
        caption={festival}
      />

      <div className="prose">
        <p>
          Visitors are invited to engage through an array of interactive
          interfaces, activities, and applications, designed as portals for
          encounter. Each app or installation functions as a conceptual node,
          part of a living and adaptive ecosystem.
        </p>
        <p>
          The project opened on October 1st at 6:00 p.m. with{" "}
          <Link href="/projects/dark-enlightenment">Dark Enlightenment</Link>,
          the rave: Techno-republics and Other Vectors, dancing within the
          storm.
        </p>
      </div>

      <Figure
        image={shot("04-satellite.jpg")}
        alt="A projection of a satellite view of Earth fills a screen in the hazy installation."
        caption={festival}
      />

      <div className="prose">
        <p>
          Throughout the festival (October 1–5, 2025), the installation hosted
          moments of activation, including:
        </p>
      </div>
      <ul className="record">
        <li>Real-time interactions with AI chatbots</li>
        <li>
          Live generative imagery using Stable Diffusion and streaming models
        </li>
        <li>
          Low-latency AI companions for speculative conversations across
          temporalities
        </li>
        <li>
          Participatory performances inviting visitors to sense, move, and
          think with the shifting tectonics of otherness
        </li>
      </ul>

      <Figure
        image={shot("05-process.jpg")}
        alt="A person works on a laptop in the studio, with notes covering the walls and a large sheet of paper on the floor."
        caption={process}
      />

      <Figure
        image={shot("06-scores.jpg")}
        alt="Handwritten scores and notes on a wall, including the heading Ejes de las Tectónicas de la otredad."
        caption={process}
      />

      <Figure
        image={shot("08-manifesto.jpg")}
        alt="A screen in the installation showing a Spanish text that begins Entre Cybersyn y la húmeda negrura de la Noche."
        caption="Beyond Gravity, Dortmund, September 2025."
      />

      <div className="prose">
        <p>
          <em>The Tectonics of Otherness</em> proposes an ever-changing field
          of inquiry — a space of migration, speculation, and embodied
          cognition, where the ground itself moves, and we move with it.
        </p>
      </div>
    </article>
  );
}
