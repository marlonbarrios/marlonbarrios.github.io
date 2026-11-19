import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { AboutPortrait } from "@/components/about-portrait";

const PORTRAIT_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function portraitSrcs() {
  const dir = path.join(process.cwd(), "public", "images", "about");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(
      (name) =>
        !name.startsWith(".") &&
        PORTRAIT_EXT.has(path.extname(name).toLowerCase()),
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => `/images/about/${encodeURIComponent(name)}`);
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I am Marlon Barrios Solano, a Venezuelan-American interdisciplinary artist, creative technologist, and researcher with a background in dance, software engineering, and cognitive science.",
};

export default function AboutPage() {
  return (
    <article className="about">
      <p className="kicker">About</p>
      <div className="about-layout">
        <AboutPortrait srcs={portraitSrcs()} />
        <div>
          <h1>Marlon Barrios Solano</h1>
          <p className="links">
            <a
              href="https://drive.google.com/drive/folders/1JttS30B9fDtavkZ9La0dVl87Q2r5UNba"
              target="_blank"
              rel="noreferrer"
            >
              Images for press
            </a>
          </p>
          <div className="prose">
        <p>
          I am Marlon Barrios Solano, a Venezuelan-American interdisciplinary
          artist, creative technologist, and researcher with a background in
          dance, software engineering, and cognitive science. My work focuses
          on generative AI, machine learning, creative coding, and interactive
          performance.
        </p>
        <p>
          My work is not organized as discrete projects, but as a system of
          dynamic, interrelated fragments—a living archive of notes,
          applications, performances, and conceptual nodes that can be engaged
          individually or navigated as an evolving network. These fragments
          are continuously developed, recombined, and activated across
          different contexts.
        </p>
        <p className="break">
          Since August 2024, I have been the Maker-in-Residence at the Center
          for Arts, Migration, and Entrepreneurship (CAME) at the University of
          Florida, where I focus on AI, art, and diasporas. I teach Algorithmic
          Creativity and AI, Art, and Society, asynchronous courses in the AI
          and the Arts Certificate offered by the College of the Arts.
        </p>
        <p>
          I am also a researcher in residence at Lake Studios Berlin, where I
          am a founding member. In 2025, I was awarded the Beyond Gravity /
          Decolonizing the Digital Residency at Theater im Depot in Dortmund,
          where I continue to explore the speculative intersections of
          technology, memory, and the Global South.
        </p>
        <p className="break">
          My work unfolds across interconnected areas: interdisciplinary
          performance, creative coding, machine learning, and generative AI.
          Through these intersecting frameworks, I explore queer longing,
          techno-intimacy, cybernetic feedback loops, migration, displacement,
          and diasporic memory. I investigate computational creativity and
          synthetic cognition by designing hybrid systems—cognitive
          assemblages—where language and self-organizing processes become
          aesthetic vectors and agents. The work incorporates generative AI,
          creative coding, generative writing, voice and movement interaction,
          bottom-up robotics, and contemplative practices such as Vipassana
          meditation.
        </p>
        <p>
          I create dynamic browser-based artworks, improvisational scores,
          sound environments, AI chatbots, and generative video
          systems—organizing them into installations, participatory
          performances, lectures, and workshops. All are published and
          distributed under open-source licenses as acts of epistemic sharing
          and community care.
        </p>
        <p>
          At the intersection of art and AI, I engage speculative theory as
          both compass and choreography. I use it to build counter-narratives
          that challenge Silicon Valley’s extractivist logic and disembodied
          optimization fantasies.
        </p>
        <p id="born-in-latent-space" className="mode">
          In the ongoing long-term project Born in Latent Space, machine
          learning and generative AI become a poetic and epistemic terrain for
          re-imagining cultural memory, resistance, and planetary futurities. I
          am particularly drawn to nonhuman cognition and machine
          imagination—not as metaphors, but as living speculative zones. Born
          in Latent Space is a five-year exploration into synthetic memory,
          machine dreaming, and recursive performance. I engage AI models as
          collaborators with their own strange logics and temporalities. These
          systems hallucinate, fail, glitch, and speculate. I treat their
          outputs not as finished artifacts but as speculative beings—
          provisional fragments that generate more questions than answers. As a
          lecture-performance it is also a live, embodied encounter through
          voice, movement, storytelling, singing, and real-time audiovisual
          composition, and it can expand into an installation or a workshop.
        </p>
        <p id="unstable-landscapes" className="mode">
          UnstableLandscapes is a distributed instantiation of this research.
          Here, the work becomes an environment for collective cognition—a
          spatialized system in which participants, interfaces, and
          computational processes form a distributed cognitive assembly. Rather
          than centering on a single performer, the emphasis shifts toward
          group dynamics, shared attention, and participatory navigation within
          an evolving landscape of interacting nodes or cells. While it can be
          presented as an installation, its core condition is relational,
          distributed, and emergent.
        </p>
        <p className="break">
          Performing knowing: I increasingly use performance-lectures, games,
          and game-like structures as dramaturgies of knowledge—sites where
          cognition becomes participatory, unstable, and playful. These game
          systems function as speculative engines for improvisation, shared
          learning, and embodied cognition. The performances, apps, and
          installations I design become rehearsal spaces for possible worlds.
        </p>
        <p>
          I create epistemic fictions—AI-generated scripts, poetic scores, and
          distorted prompts that serve not as tools but as provocations. These
          challenge dominant notions of intelligence and open up space for
          improvisation, fabulation, ambiguity, and embodied interpretation.
        </p>
        <p>
          Ultimately, my work rehearses futures where identity is queer and
          translocal, archives speak back, cognition is distributed, and the
          Global South doesn’t ask for permission to imagine otherwise. I use
          speculative AI not to predict the future, but to liberate it, to
          emancipate it.
        </p>
        <p className="break">
          In 2007, I launched dance-tech.net, a social network for
          interdisciplinary explorers of performance and emergent practices. I
          have produced over 200 video interviews as one of the first
          international video bloggers dedicated to dance and digital
          technology. In 2011, I co-founded movimiento.org in Spanish and
          Portuguese, supported by the South American Network of Dance. These
          platforms have been supported by Motion Bank, The Forsythe Company,
          Panorama Festival, Transmediaakademie, Lake Studios Berlin, and
          others.
        </p>
        <p>
          From 2012 to 2016, I served as a research associate at the
          Inter-University of Dance/University of the Arts (UDK/HZT) in Berlin.
          I was a 2017 Hombroich Fellow, and an artist and researcher in
          residence at ICK Amsterdam (2013–2014) and the Gilles Jobin Company
          in Geneva (2009–2012). I have facilitated several interdisciplinary
          initiatives, and I mainly do this yearly as embodied creative
          facilitation: epistemic peer-to-peer contexts at the Choreographic
          Coding Lab with Motion Bank, and at Digital Bodies at Lake Studios
          Berlin. The facilitation can move from Vipassana meditation to
          choreographic practice, improvisational games, and cognitive media
          and AI. I have also facilitated Geneva Sessions in Switzerland.
        </p>
        <p>
          My essays have appeared in <em>Dance in the Head / Tanz im Kopf</em>{" "}
          and <em>Transmission in Motion: The Technologizing of Dance</em>,
          edited by Johannes Birringer and Maaike Bleeker. Some of my
          interviews have been published in <em>Contact Quarterly</em>.
        </p>
        <p className="break">
          As a dancer and improviser in New York (1994–2001), I collaborated
          with choreographers such as Lynn Shapiro, Merian Soto, Dean Moss,
          Bill Young, and Susan Marshall, and performed with musicians
          including Philip Glass, John Zorn, and Erik Friedlander. In Venezuela
          (1981–1994), I apprenticed with DanzaLuz and DanzaHoy, danced with
          Aktion Colectiva and Rajatabla Danza, and co-founded Danza
          Contemporánea de Maracaibo with Yasmin Villavicencio in 1986.
        </p>
        <p>
          I hold an MFA in Dance and Technology from The Ohio State University
          and completed the Software Engineering Immersive at General Assembly
          in 2021. I am also certified in Vipassana/Mindfulness Meditation by
          Spirit Rock Meditation Center, a 200-hour Embodyoga® teacher, and
          have completed one year of the Somatic Experiencing Certification
          Program.
        </p>
        <p className="break">
          My current focus is on creating open, transdisciplinary
          infrastructures for research, performance, and critical
          imagination—where art, code, cognition, and care are always
          entangled.
        </p>
          </div>
        </div>
      </div>
    </article>
  );
}
