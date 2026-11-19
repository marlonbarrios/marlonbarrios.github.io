import Image from "next/image";
import Link from "next/link";
import { getProjectImages, type WorkImage } from "@/lib/works";

const kent =
  "https://aelab.uk/project/2nd-international-choreographic-coding-lab-by-motion-bank-ae-lab/";
const opera = "https://aelab.uk/project/ccl-rbo/";
const credit = "© AΦE / A+E Lab, CCL at the Royal Ballet and Opera, 2026.";
const sharing = "Public sharing, Royal Ballet and Opera, June 7, 2026.";

const bodyCaptions: Record<string, { alt: string; caption: string }> = {
  "01-digital-body.jpg": {
    alt: "Lake Studios Berlin news page for Digital Body 4.0, 8–22 November, with a studio photograph of a performer on a green floor beside a projection.",
    caption: "Digital Body 4.0, 8–22 November. Lake Studios Berlin.",
  },
};

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

function Film({
  id,
  title,
  caption,
}: {
  id: string;
  title: string;
  caption: string;
}) {
  return (
    <figure className="video">
      <div className="video-frame">
        <iframe
          src={`https://player.vimeo.com/video/${id}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption>
        {caption}{" "}
        <a href={`https://vimeo.com/${id}`} target="_blank" rel="noreferrer">
          Watch on Vimeo
        </a>
      </figcaption>
    </figure>
  );
}

export async function EmbodiedCreativeFacilitation() {
  const images = await getProjectImages("choreographic-coding-lab");
  const bodies = await getProjectImages("lake-studios-berlin");
  const shot = (name: string) =>
    images.find((image) => image.src.endsWith(`/${name}`));
  const shown = new Set(
    [
      "05-group.jpg",
      "01-working.jpg",
      "03-costume.jpg",
      "04-sharing.jpg",
      "07-wings.jpg",
      "08-screen.jpg",
      "02-colleagues.jpg",
    ]
      .map((name) => shot(name)?.src)
      .filter((src): src is string => Boolean(src)),
  );

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Embodied Creative Facilitation</h1>
      <p className="dek">Epistemic peer-to-peer collaboration.</p>
      <p className="byline">
        <a href="#choreographic-coding-lab">Choreographic Coding Lab</a>
        {" · "}
        <a href="#digital-bodies">Digital Bodies</a>
      </p>

      <div className="prose">
        <p>
          I create contexts for collaboration, and for exploring how different
          kinds of cognitive assemblages meet computational technologies:
          scores, rule systems, and interactive systems that can use AI, XR,
          and AR. The emphasis is the collaboration itself, an epistemic
          peer-to-peer environment.
        </p>
        <p>
          I mainly do this yearly. What is presented here are the contexts I
          have been invited to facilitate: the Choreographic Coding Lab, and
          Digital Bodies at{" "}
          <Link href="/projects/lake-studios-berlin">Lake Studios Berlin</Link>.
          The facilitation can begin in Vipassana meditation and move into an
          experiment with choreographic practice, improvisational games, and
          the uses of cognitive media and AI in the creative process. It draws
          on different kinds of knowledge mapping.
        </p>
        <p>
          This kind of context draws on my research into network environments
          and open spaces for creativity and collaboration. That research was
          deeply influenced by the philosophical framework of{" "}
          <a
            href="https://www.hzt-berlin.de/en/center/about/"
            target="_blank"
            rel="noreferrer"
          >
            HZT Berlin
          </a>
          , where I was a research associate from 2012 to 2016.
        </p>
      </div>

      <h2 id="choreographic-coding-lab">Choreographic Coding Lab</h2>
      <div className="prose">
        <p>
          The Choreographic Coding Lab is a traveling laboratory founded by{" "}
          <a
            href="https://medium.com/motion-bank/the-choreographic-coding-lab-format-by-motion-bank-61d34fe28e82"
            target="_blank"
            rel="noreferrer"
          >
            Motion Bank
          </a>
          . Since 2013 it has moved between cities. I facilitated the last two
          editions in the UK, invited by Aoi Nakamura and Esteban Lecoq of A+E
          Lab, their art and technology hub in Chatham, Kent.
        </p>
      </div>

      <h3>Royal Ballet and Opera</h3>
      <div className="prose">
        <p>
          The Choreographic Coding Lab at the Royal Ballet and Opera took place
          May 30–June 7, 2026, as part of the RBO/SHIFT festival. The public
          sharing was on June 7 at PLAY SHIFT. Participants worked inside the
          house, across costumes, archives, and technical production. I
          facilitated it with Anton Koch (Motion Bank) and Daniel Bisig (Zurich
          University of the Arts). Aoi Nakamura and Esteban Lecoq of AΦE / A+E
          Lab hosted. The lab was commissioned by the Royal Ballet and Opera,
          with support from ElevenLabs.
        </p>
        <p>
          <a href={opera} target="_blank" rel="noreferrer">
            A+E Lab on the Royal Ballet and Opera lab
          </a>
        </p>
      </div>

      <Film
        id="1205510986"
        title="CCL at Royal Ballet and Opera, May 30–June 7, 2026"
        caption="CCL at the Royal Ballet and Opera, May 30–June 7, 2026."
      />

      <Figure
        image={shot("05-group.jpg")}
        alt="The group of participants and facilitators posed together in the studio."
        caption={`Participants and facilitators. ${credit}`}
      />
      <Figure
        image={shot("01-working.jpg")}
        alt="Marlon Barrios Solano sits at a laptop during a working session, holding a printed page, with other participants at tables behind him."
        caption={`Working session at the Royal Ballet and Opera, 2026. ${credit}`}
      />
      <Figure
        image={shot("03-costume.jpg")}
        alt="A group gathered in costume storage, with painted scenery, corsets, and a chandelier around them."
        caption="A visit to costume storage during the lab, June 2026."
      />
      <Figure
        image={shot("04-sharing.jpg")}
        alt="People gathered around laptops, monitors, and a sound setup during the public sharing."
        caption={sharing}
      />
      <Figure
        image={shot("07-wings.jpg")}
        alt="A monitor on a flight case shows a standing figure with large digital wings."
        caption={sharing}
      />
      <Figure
        image={shot("08-screen.jpg")}
        alt="A close view of a monitor showing a kneeling figure with a fan of digital forms behind them."
        caption={sharing}
      />
      <Figure
        image={shot("02-colleagues.jpg")}
        alt="Three people with Royal Ballet and Opera lanyards seated together at a wooden table."
        caption="During the Choreographic Coding Lab at the Royal Ballet and Opera, June 2026."
      />

      <h3>A+E Lab, Chatham</h3>
      <div className="prose">
        <p>
          The second International Choreographic Coding Lab at A+E Lab ran
          March 24–28, 2025, in the Historic Dockyard, Chatham, with a public
          sharing on March 28. This was the lab’s second edition in the UK, and
          its focus was artificial intelligence. I facilitated it with David
          Rittershaus (Motion Bank, Hochschule Mainz) and Daniel Bisig (Centre
          for Dance Research, Coventry University, Zurich University of the
          Arts, and Motion Bank). Aoi Nakamura and Esteban Lecoq hosted the
          week.
        </p>
        <p>
          The gathering opened the evening before, on March 23, with XR Sunday
          Social at A+E Lab.
        </p>
        <p>
          <a href={kent} target="_blank" rel="noreferrer">
            A+E Lab on the Chatham lab
          </a>
        </p>
      </div>

      <Film
        id="1085820827"
        title="2nd International Choreographic Coding Lab by Motion Bank, A+E Lab, Chatham, March 2025"
        caption="2nd International Choreographic Coding Lab by Motion Bank and A+E Lab, Chatham, March 24–28, 2025."
      />
      <Film
        id="1085802239"
        title="XR Sunday Social, A+E Lab, Chatham, March 23, 2025"
        caption="XR Sunday Social, A+E Lab, Chatham, March 23, 2025."
      />

      {images
        .filter((image) => !shown.has(image.src))
        .map((image) => (
          <Figure
            key={image.src}
            image={image}
            alt="Choreographic Coding Lab."
            caption="Choreographic Coding Lab."
          />
        ))}

      <h2 id="digital-bodies">Digital Bodies</h2>
      <div className="prose">
        <p>
          Digital Bodies is the framework I facilitate at{" "}
          <Link href="/projects/lake-studios-berlin">Lake Studios Berlin</Link>,
          and I mainly do it yearly. In 2026 I co-facilitate{" "}
          <a
            href="https://lakestudiosberlin.com/event/digital-body-4-0/"
            target="_blank"
            rel="noreferrer"
          >
            Digital Body 4.0
          </a>
          , 8–22 November, a residency for Berlin artists, with Mark Coniglio.
        </p>
      </div>

      {bodies.map((image) => {
        const name = image.src.split("/").pop() ?? "";
        const known = bodyCaptions[name];
        return (
          <Figure
            key={image.src}
            image={image}
            alt={known?.alt ?? "Digital Bodies at Lake Studios Berlin."}
            caption={known?.caption ?? "Digital Bodies at Lake Studios Berlin."}
          />
        );
      })}

      <p className="links">
        <a
          href="https://medium.com/motion-bank/the-choreographic-coding-lab-format-by-motion-bank-61d34fe28e82"
          target="_blank"
          rel="noreferrer"
        >
          Motion Bank
        </a>
        <a href={opera} target="_blank" rel="noreferrer">
          Royal Ballet and Opera lab
        </a>
        <a href={kent} target="_blank" rel="noreferrer">
          Chatham lab
        </a>
        <a
          href="https://lakestudiosberlin.com/event/digital-body-4-0/"
          target="_blank"
          rel="noreferrer"
        >
          Digital Body 4.0
        </a>
        <Link href="/projects/lake-studios-berlin">Lake Studios Berlin</Link>
      </p>
    </article>
  );
}
