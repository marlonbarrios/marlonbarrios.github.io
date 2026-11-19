import Image from "next/image";
import Link from "next/link";
import { getProjectImages, type WorkImage } from "@/lib/works";

const pangea =
  "https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/";
const festival =
  "The Tectonics of Otherness at Beyond Gravity Festival, October 1–5, 2025.";

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

export async function UnstableLandscapes() {
  const images = await getProjectImages("unstable-landscapes");
  const shot = (name: string) =>
    images.find((image) => image.src.endsWith(`/${name}`));

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>UnstableLandscapes</h1>
      <p className="dek">Embedded within cognitive assemblages.</p>
      <p className="byline">Developing since 1997</p>
      <p className="links">
        <Link href="/about#unstable-landscapes">Read in About</Link>
      </p>

      <Figure
        image={shot("01-beyond-gravity.jpg")}
        alt="People dancing in haze before a projection of a planet, at The Tectonics of Otherness, Beyond Gravity Festival, Dortmund, 2025."
        caption={festival}
      />

      <div className="prose">
        <p>
          I began developing <em>UnstableLandscapes</em> in 1997 as a living and
          evolving system—a procedural ecology that merges performance,
          technology, and philosophy. It is not a fixed work but a hybrid field
          of emergence, composed of performances, installations, and
          lecture-experiments that generate polyphonic, polymorphic, and
          multisensorial spaces. Each iteration becomes an epistemic landscape,
          a site where cognition and embodiment unfold as collective and
          distributed processes.
        </p>
        <p>
          From its origin, <em>UnstableLandscapes</em> has been inspired by
          bottom-up architectures—systems that evolve through local
          interactions rather than centralized control. These include
          biological ecologies, insect colonies, neural networks, and
          algorithmic swarms. I think of them as metaphors for cognition
          itself: adaptive, relational, and self-organizing. They have guided
          my inquiry into living and computational systems, where perception
          and intelligence are not properties of individual minds but are
          distributed across networks of agents, bodies, codes, and
          environments. In these architectures, cognition becomes a
          choreography of relations, continuously sensing, modulating, and
          transforming itself.
        </p>
      </div>

      <Figure
        image={shot("02-beyond-gravity.jpg")}
        alt="Two people rest on cushions wearing headphones and eye masks, in a studio lined with notes, at Beyond Gravity Festival, 2025."
        caption={festival}
      />

      <div className="prose">
        <p>
          My work has been shaped by the writings of Francisco Varela and
          Humberto Maturana (as lineage of Gregory Bateson); N. Katherine
          Hayles, whose ideas on embodiment and posthuman subjectivity helped
          articulate cognition as an emergent hybrid field; and Rodney Brooks,
          whose bottom-up robotics and emphasis on situated intelligence
          influenced my understanding of choreography as a procedural and
          adaptive architecture. These thinkers—and others from systems theory,
          cognitive philosophy, and improvisational dance practices—form the
          conceptual backbone of <em>UnstableLandscapes</em> as both artistic
          practice and cognitive research.
        </p>
      </div>

      <h2>Cognitive assemblages</h2>
      <div className="prose">
        <p>
          My current understanding of <em>UnstableLandscapes</em> is deeply
          informed by N. Katherine Hayles’s notion of cognitive assemblages,
          developed in her book <em>Unthought: The Power of the Cognitive
          Nonconscious</em> (2017). Hayles proposes that cognition is not
          limited to conscious human thought but is instead distributed across
          complex networks of interacting agents—biological, technical, and
          material.
        </p>
        <p>
          A cognitive assemblage is a web of interdependent cognitive systems,
          each capable of interpreting information in context and acting upon
          it meaningfully. Within such an assemblage, cognition emerges as a
          relational, ecological, and processual phenomenon—a property that
          arises from dynamic exchanges rather than being contained within
          individual subjects or machines.
        </p>
        <p>
          Hayles argues that cognition should not be equated with computation
          alone, nor with consciousness, but with the capacity to respond
          meaningfully within a specific milieu. This framing expands the field
          of cognition to include AI systems, sensors, bodies, data streams,
          and environments—each contributing to an ongoing choreography of
          attention and adaptation.
        </p>
        <p>
          I interpret cognitive assemblages as zones of coupling and
          resonance—where human and nonhuman agencies, algorithmic systems, and
          somatic awareness meet. In <em>UnstableLandscapes</em>, these
          assemblages become performative ecologies where bodies, machines, and
          environments think together. They are heterogeneous fields of
          cognition—composed of multiple speeds, scales, and logics—that
          challenge conventional notions of authorship, autonomy, and presence.
        </p>
      </div>

      <blockquote className="pullquote">
        <p>
          “Cognitive assemblages reveal that cognition is not a private domain
          of the human but a planetary process, shared among technical,
          biological, and symbolic systems.”
        </p>
        <footer>
          N. Katherine Hayles, <em>Unthought: The Power of the Cognitive
          Nonconscious</em> (2017)
        </footer>
      </blockquote>

      <div className="prose">
        <p>
          For me, this concept provides a powerful lens for understanding the
          performance space as a living system of interrelations, where
          choreography, computation, and consciousness converge into one
          recursive field.
        </p>
      </div>

      <Figure
        image={shot("03-beyond-gravity.jpg")}
        alt="The Tectonics of Otherness at Beyond Gravity Festival, Dortmund, October 2025."
        caption={festival}
      />

      <div className="prose">
        <p>
          Each deployment of <em>UnstableLandscapes</em> becomes a hybrid
          cognitive assembly: a living system composed of conscious
          participants, algorithmic processes, and responsive environments.
          Within these assemblies, I cultivate zones of contemplative attention
          and collective ecstasy—from the quiet intensity of meditation to the
          immersive pulse of German techno raves. These contrasting modalities
          expose cognition as both stillness and swarm, both resonance and
          multiplicity.
        </p>
        <p>
          Over time, <em>UnstableLandscapes</em> has evolved into a procedural
          and postdramatic practice. I design algorithmic systems,
          improvisational frameworks, and choreographic scores that behave like
          autonomous organisms, generating emergent patterns rather than
          reproducing predetermined ones. This approach allows me to think of
          choreography as an epistemic technology—a way of researching
          distributed intelligence through embodied and computational
          experimentation.
        </p>
      </div>

      <Figure
        image={shot("04-beyond-gravity.jpg")}
        alt="Participants gathered around a projected score, with notes covering the studio wall, at Beyond Gravity Festival, 2025."
        caption={festival}
      />

      <div className="prose">
        <p>
          In recent years, artificial intelligence has become a key co-creator
          within <em>UnstableLandscapes</em>. I approach AI not as a tool but
          as a cognitive and performative partner, an alien system of
          perception that expands the ecology of awareness. These
          collaborations with machine systems reconfigure the boundaries of
          authorship and agency, opening possibilities for interspecies
          cognition—between human, insect, and algorithmic forms of life.
        </p>
        <p>
          <em>UnstableLandscapes</em> has been deployed in universities, art
          centers, and festivals in the United States, Germany, Venezuela, and
          Spain, adapting to each context as performance, installation, or
          inquiry-based environment. Many of its components also exist online
          as open-source applications and living systems that continue to
          evolve beyond the physical site.
        </p>
      </div>

      <Figure
        image={shot("05-beyond-gravity.jpg")}
        alt="The Tectonics of Otherness at Beyond Gravity Festival, Dortmund, October 2025."
        caption={festival}
      />

      <div className="prose">
        <p>
          This methodology later became the foundation for collaborative
          projects such as{" "}
          <a href={pangea} target="_blank" rel="noreferrer">
            Pangea in Latent Space and The Tectonics of Otherness
          </a>
          , created with María Luisa Angulo through Pangea Inteligencia
          Artificial (Pangea AI)—a decolonial and planetary extension of the{" "}
          <em>UnstableLandscapes</em> framework, most recently presented at the
          Beyond Gravity Festival in Dortmund, Germany (2025).
        </p>
      </div>

      <Figure
        image={shot("06-beyond-gravity.jpg")}
        alt="An empty studio in magenta light, with cushions, screens of text, and a wall of notes, at Beyond Gravity Festival, 2025."
        caption={festival}
      />

      <div className="prose">
        <p>
          I first articulated the conceptual foundations of this work in{" "}
          <a
            href="https://marlonbarrios.github.io/hybrid_intelligences_viz/essay-4.html"
            target="_blank"
            rel="noreferrer"
          >
            Designing Unstable Landscapes: Improvisational Dance within
            Cognitive Systems
          </a>, published in <em>Tanz im Kopf / Dance and Cognition</em>, edited by
          Johannes Birringer and Josephine Fenger, 2005. The project continues
          to evolve, informed by
          Birringer, Hayles, Brooks, Francisco Varela, Donna Haraway, and the
          ethos of somatic improvisation—each contributing to a vision of
          cognition as a living choreography across human and non-human scales.
        </p>
        <p>
          <em>UnstableLandscapes</em> remains a recursive and open organism—a
          choreography of thought, sensation, and relation that performs
          within, and as, cognitive assemblages.
        </p>
      </div>

      <Figure
        image={shot("07-beyond-gravity.jpg")}
        alt="The Tectonics of Otherness at Beyond Gravity Festival, Dortmund, October 2025."
        caption={festival}
      />

      <Figure
        image={shot("08-connecticut-college.jpg")}
        alt="Four views of UnstableLandscapes at Connecticut College in 2020: a projected stage, a seated conversation, notes across the floor, and a group at the mirror."
        caption="UnstableLandscapes at Connecticut College, 2020."
      />
    </article>
  );
}
