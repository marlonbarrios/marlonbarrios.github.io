import Link from "next/link";
import type { ReactNode } from "react";
import { stillSlots } from "@/components/image-cluster";
import { PhotoOrder } from "@/components/random-figures";
import { getProjectImages } from "@/lib/works";

function weave(parts: ReactNode[], figures: ReactNode[], name: string) {
  const count = Math.max(parts.length, figures.length);
  const nodes: ReactNode[] = [];
  for (let index = 0; index < count; index++) {
    if (parts[index]) {
      nodes.push(
        <div className="prose" key={`${name}-text-${index}`}>
          {parts[index]}
        </div>,
      );
    }
    if (figures[index]) nodes.push(figures[index]);
  }
  return nodes;
}

const submergeCaption =
  "Submerge Festival 2025, Lake Studios Berlin. Photograph by Maria Kousi.";

const floridaCaption =
  "Lecture-performance at the School of Theatre and Dance, University of Florida, March 2026. Photograph © Center for Arts, Migration, and Entrepreneurship (CAME).";

export async function BornInLatentSpace() {
  const submergeImages = await getProjectImages("born-in-latent-space", "submerge");
  const floridaImages = await getProjectImages("born-in-latent-space", "uf");
  const submergeAlt =
    "Born in Latent Space at Submerge Festival 2025, Lake Studios Berlin";
  const floridaAlt =
    "Born in Latent Space, lecture-performance at the School of Theatre and Dance, University of Florida, March 2026";
  const submerge = stillSlots(submergeImages.length, submergeAlt, submergeCaption);
  const florida = stillSlots(floridaImages.length, floridaAlt, floridaCaption);

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Born in Latent Space</h1>
      <blockquote className="pullquote">
        <p>
          “This is the unseeable space in which machine learning makes its
          meaning. Beyond that which we are incapable of visualizing is that
          which we are incapable of even understanding.”
        </p>
        <footer>— James Bridle</footer>
      </blockquote>
      <p className="dek">
        A performance-lecture integrating creative coding, generative AI, sound,
        and concept.
      </p>
      <p className="links">
        <Link href="/about#born-in-latent-space">Read in About</Link>
        <a
          href="https://drive.google.com/drive/folders/1JttS30B9fDtavkZ9La0dVl87Q2r5UNba"
          target="_blank"
          rel="noreferrer"
        >
          Images for press
        </a>
      </p>

      <PhotoOrder pool={floridaImages} initial={floridaImages}>
      {weave(
        [
          <p key="open-1">
            <em>Born in Latent Space</em> is a lecture-performance, installation,
            and workshop platform—an ongoing artistic and research project
            (2024–2029) that I develop as a living, evolving system rather than a
            fixed work.
          </p>,
          <p key="open-2">
            At its core, it is a performance-lecture in which I appear with a
            laptop, voice, body, and a constellation of custom-built and
            generative AI applications, engaging in real time with machine
            processes. However, this format is only one possible manifestation.
            The work can expand into an installation, unfold as a participatory
            workshop, or operate as a hybrid environment where these modalities
            overlap and inform one another.
          </p>,
          <p key="open-3">
            <em>Born in Latent Space</em> also operates as a{" "}
            <strong>cognitive assembly</strong>, drawing on the notion
            articulated by N. Katherine Hayles, where cognition is distributed
            across human and nonhuman actors, technical systems, and environments.
            In this sense, the work is not simply performed—it is enacted as a
            field of relations in which thinking emerges through the interaction
            of bodies, algorithms, interfaces, histories, and imaginaries.
          </p>,
          <p key="open-4">
            The project is composed as a constellation of fragments—vignettes,
            conceptual notes, stories, applications, playlists, prompts, and
            generative systems—that I continuously rearrange and recombine. These
            elements function as a network that I activate in real time to
            navigate the latent space of all the possible stories inhabiting the
            moment of performance. Each iteration becomes a different pathway, a
            situated traversal through a shifting field of potentials.
          </p>,
          <p key="open-5">
            Within this system, I perform through a fully embodied practice that
            integrates storytelling, singing, movement, and at times DJing or
            VJing, alongside the live use of real-time computational and AI-based
            tools and movement scores. Voice, gesture, and physical action
            operate as interfaces, as ways of thinking and sensing within an
            expanded ecology of cognition. The body does not represent the
            system; it participates in it, entangled in processes of generation,
            translation, and response.
          </p>,
          <p key="open-6">
            The work weaves together fiction and lived experience, drawing from
            histories of migration, cybernetics, complexity, and evolving notions
            of life and intelligence. It engages with epistemological and
            philosophical frameworks that include evolutionary theory, and
            symbiogenesis, while also opening toward speculative and poetic modes
            of knowing. These strands unfold in relation to multiple forms of
            symbiosis between human and machine, memory and speculation,
            embodiment and abstraction, individual and collective cognition.
          </p>,
        ],
        florida,
        "florida",
      )}
      </PhotoOrder>

      <PhotoOrder pool={submergeImages} initial={submergeImages}>
      {weave(
        [
          <p key="close-1">
            At the same time, the project integrates a sustained investigation
            into the conditions of the present, shaped by the catastrophes of
            late capitalism, postcolonial histories, and the persistent force of
            patriarchal eurocentric hegemonies. Even when not explicitly
            thematic, these forces inform the work’s urgency to question how
            otherness is produced. This inquiry extends into what I describe as
            the <strong>tectonics of otherness</strong>, a shifting terrain in
            which identities, differences, and power relations are continuously
            generated and destabilized.
          </p>,
          <p key="close-2">
            <em>Born in Latent Space</em> also incorporates contemplative
            practices and philosophical influences from Buddhism, particularly
            the notion of emptiness (śūnyatā), understood here as a form of
            epistemic clearing. This orientation allows the work to remain open,
            decentered, and relational—queer in its structure, without a fixed
            point of origin or authority, continually dissolving and
            reconstituting its own conditions.
          </p>,
          <p key="close-3">
            As an installation, the work becomes spatial and distributed, with
            autonomous processes, screens, and interfaces that extend beyond the
            temporal frame of performance. As a workshop, it opens into a shared
            laboratory where participants engage directly with its tools and
            questions, activating their own relationships to AI, embodiment, and
            knowledge production.
          </p>,
          <p key="close-4">
            <a
              href="https://marlonbarrios.github.io/tectonics_of-_otherness/"
              target="_blank"
              rel="noreferrer"
            >
              The Tectonics of Otherness
            </a>{" "}
            of this work was further developed during a residency{" "}
            <em>Beyond Gravity</em> at Theater im Depot in Dortmund, Germany,
            from July to October 2025, where the project expanded its
            investigation into performance as a distributed, computational, and
            embodied system.
          </p>,
          <p key="close-5">
            Across all its forms, <em>Born in Latent Space</em> functions as a
            performative infrastructure: a space where ideas are enacted, tested,
            and transformed through action. It is not a fixed piece but a
            terrain—an evolving cognitive and aesthetic system that I enter,
            navigate, and reconfigure each time, in relation to machines,
            environments, and others.
          </p>,
        ],
        submerge.slice(0, 5),
        "submerge",
      )}

      <h2>Born in Latent Space has been presented at</h2>
      <ul className="record">
        <li>
          <strong>
            Born in Latent Space – Spring Into Dance, School of Theatre and
            Dance, University of Florida
          </strong>{" "}
          — March 2026
        </li>
        <li>
          <strong>Born in Latent Space – Stockholm University of the Arts</strong>
          , Department of Dance, Stockholm, Sweden — September 17–19, 2025 —{" "}
          <a href="https://www.uniarts.se/" target="_blank" rel="noreferrer">
            uniarts.se
          </a>
        </li>
        <li>
          <strong>
            Performance lecture at Submerge Festival —{" "}
            <em>Submerge: getting into the work</em> vol. 7
          </strong>
          , Lake Studios Berlin, Berlin, Germany — July 21 – August 24, 2025 —{" "}
          <a
            href="https://lakestudiosberlin.com/submerge-festival/"
            target="_blank"
            rel="noreferrer"
          >
            Lake Studios Berlin
          </a>
        </li>
        <li>
          <strong>
            Submerge Festival — <em>Submerge: getting into the work</em> vol. 7
          </strong>
          , Lake Studios Berlin, Berlin, Germany — July 21 – August 22, 2025 —{" "}
          <a
            href="https://lakestudiosberlin.com/event/submerge-festival-2025/"
            target="_blank"
            rel="noreferrer"
          >
            workshop
          </a>
        </li>
        <li>
          <strong>OOTFest25 (UN)SEEN</strong>, Riverside Studios &amp; Open
          Online Theatre, London, UK — June 5–8, 2025
        </li>
        <li>
          <strong>CAME Innovation Summit 2025</strong>, University of Florida,
          Gainesville, Florida, USA — April 11, 2025
        </li>
        <li>
          <strong>XR Sunday Social at A+E Lab</strong>, A+E Lab, Chatham, UK —
          March 23, 2025
        </li>
        <li>
          <strong>Summit: AI and the Future of Performance</strong>, University
          of the Arts London, London, UK — March 18, 2025
        </li>
        <li>
          <strong>AI and Research Celebration</strong>, College of Medicine,
          University of Florida, Gainesville, Florida, USA — February 24, 2025
        </li>
        <li>
          <strong>FLOAT Polycrisis</strong>, How Bazar, Gainesville, Florida,
          USA — November 13, 2024
        </li>
        <li>
          <strong>Hybrid Biennale</strong>, Hellerau, Dresden, Germany — October
          26, 2024
        </li>
        <li>
          <strong>ICA 2024 Live Arts Festival</strong>, Cape Town, South Africa
          — September 5, 2024
        </li>
        <li>
          <strong>Generative AI, Arts and Ethics Think-Tank</strong>, Château de
          Fey, France — March 5, 2024
        </li>
        <li>
          <strong>ACCAD Future Tech</strong>, The Ohio State University (OSU
          Dance, online) — February 22, 2024
        </li>
        <li>
          <strong>Unfinished Fridays</strong>, Lake Studios Berlin — February
          23, 2024
        </li>
      </ul>

      {submerge[5]}
      </PhotoOrder>

      <h2>Upcoming performances and residencies</h2>
      <ul className="record">
        <li>
          <strong>Born in Latent Space – Lake Studios Berlin</strong>, Body
          Digital 2026 — November 2026 —{" "}
          <a
            href="https://lakestudiosberlin.com/"
            target="_blank"
            rel="noreferrer"
          >
            lakestudiosberlin.com
          </a>
        </li>
        <li>
          <strong>Born in Latent Space with Marlon Barrios Solano</strong>, part
          of Miami Art Week, MDC Wolfson Auditorium, 1261, 300 NE 2nd Ave.,
          Miami, FL 33132 — Monday, November 30, 2026, 2PM
        </li>
      </ul>

      <h2>Support</h2>
      <div className="prose">
        <p>
          I’d also like to acknowledge the support and fellowships that have
          enabled this evolving work:
        </p>
      </div>
      <ul className="record">
        <li>
          Supported through several art-research residencies at{" "}
          <a
            href="https://lakestudiosberlin.com/"
            target="_blank"
            rel="noreferrer"
          >
            Lake Studios Berlin
          </a>{" "}
          since 2024, offering space to develop <em>Born in Latent Space</em>{" "}
          in a creative setting.
        </li>
        <li>
          A research grant from{" "}
          <a href="https://fal.ai/grants" target="_blank" rel="noreferrer">
            fal.ai Research Grants
          </a>
          , focused on real-time low-latency model development and creative
          use.
        </li>
        <li>
          Residency support at{" "}
          <a
            href="https://radiona.org/artist-in-residence/"
            target="_blank"
            rel="noreferrer"
          >
            Radiona – Zagreb Makerspace
          </a>{" "}
          in Croatia.
        </li>
        <li>
          The ongoing Maker-in-Residence position at the{" "}
          <a
            href="https://arts.ufl.edu/people/profiles/marlon-barrios-solano/"
            target="_blank"
            rel="noreferrer"
          >
            Center for Arts, Migration, and Entrepreneurship (CAME)
          </a>{" "}
          at the University of Florida.
        </li>
      </ul>

      <h2>Excerpt</h2>
      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/G-GjwEc1UDE"
            title="Born in Latent Space, 2 minute excerpt, OOTFest25 (UN)SEEN, Riverside Studios, London, June 2025"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Born in Latent Space (2 min excerpt), OOTFest25 (UN)SEEN, Ijad Dance
          Company, Riverside Studios, London, June 2025.{" "}
          <a
            href="https://www.youtube.com/watch?v=G-GjwEc1UDE"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <h2>Rider and scores</h2>
      <ul className="record">
        <li>
          <a
            href="https://github.com/user-attachments/files/22024326/Technical.Rider.Born.in.Latent.Space.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Tech rider of Born in Latent Space
          </a>
        </li>
        <li>
          <a
            href="https://marlonbarrios.github.io/born_in_latent_space_performance_apps/"
            target="_blank"
            rel="noreferrer"
          >
            Apps, playlists, and scores
          </a>
        </li>
      </ul>

      <h2>Born in Latent Space is touring</h2>
    </article>
  );
}
