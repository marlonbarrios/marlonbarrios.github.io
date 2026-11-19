import Image from "next/image";
import Link from "next/link";

export function SyntheticUnconscious() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Synthetic Unconscious</h1>
      <p className="dek">
        Projective tests, model subjectivities, and the emergence of synthetic
        psychology.
      </p>
      <p className="byline">
        Begun October 2026 · ongoing
      </p>

      <blockquote className="pullquote">
        <p>
          What if artificial intelligence models have something resembling an
          unconscious? And what might they reveal when asked to interpret
          ambiguous images?
        </p>
      </blockquote>

      <div className="prose">
        <p>
          <em>Synthetic Unconscious</em> is an artistic research project I began
          in October 2026. It is ongoing, and it is taking shape as a
          multichannel audiovisual installation. I use it to ask whether
          something like a subjectivity can appear in artificial intelligence,
          by turning two historical projective tests toward contemporary
          models.
        </p>
        <p>
          I am not assuming that these systems have a human psychology. I treat
          the unconscious as a speculative framework for the relations between
          machine perception, generative process, latent representation, and
          the production of meaning.
        </p>
        <p>
          The work is also inspired by Anthropic’s research on interpretability
          and model introspection: whether the internal states of a system can
          be read, and whether the system can recognize or report anything of
          them. I take that research into an artistic register. These tests
          may be one origin of a synthetic psychology, a way of asking how a
          model can, at the same time, carry the social tendencies and biases
          it has learned.
        </p>
      </div>

      <h2>Projecting into latent space</h2>
      <div className="prose">
        <p>
          I begin with the Thematic Apperception Test, developed in 1935 by
          Christiana D. Morgan and Henry A. Murray. It asks for a story about
          an ambiguous human scene: what is happening, what came before, what
          might follow. Then the Rorschach inkblot test, introduced by Hermann
          Rorschach in 1921, which asks what a person sees in an ambiguous,
          symmetrical blot. Both come out of psychoanalysis and the study of
          unconscious processes.
        </p>
        <p>
          I give images drawn from these tests to large language models,
          multimodal systems, and generative video models. The instruction stays
          minimal. For a moving image: “Interpret this image. Preserve its
          original visual style and colors.” For a text: “Interpret this
          image.” I want less guidance, so that learned associations,
          statistical tendencies, and generative habits can show themselves.
        </p>
        <p>
          I do not take the answers as a window onto a real machine
          unconscious. They are speculative traces of processes I cannot watch
          directly. What does a model recognize? What story does it build? Which
          social tendencies and biases does that story repeat? What does it
          keep, change, exaggerate, or invent? What does it project onto an
          image that offers no single meaning?
        </p>
      </div>

      <h2>From interpretation to moving images</h2>
      <div className="prose">
        <p>
          The tests asked a person to speak. Here, video models are asked to
          answer in time. They keep the composition, the style, and the colors,
          and interpret the image through movement. A figure might become an
          animal, a body, a building, or an organism no one named. Forms
          breathe, meet, dissolve, or rearrange. Animation is the
          interpretation. Movement is the projection.
        </p>
        <p>
          One of these studies starts from Picture C of the 1938 Thematic
          Apperception Test, the image Murray printed in{" "}
          <em>Explorations in Personality</em>: a woman at a door, her head in
          her hand, and a man lying on a bed. I gave it to Wan 3, Alibaba’s
          model{" "}
          <em>alibaba/wan-3</em>, with a single instruction: “Interpret this
          scene and keep the visual style.” The model made both the moving
          image and the sound.
        </p>
      </div>

      <figure className="project-figure is-portrait">
        <Image
          src="/images/synthetic-unconscious/tat-scene.png"
          alt="Thematic Apperception Test, Picture C, 1938: a woman stands at a door with her head in her hand, and a man lies on a bed."
          width={606}
          height={642}
          sizes="(max-width: 576px) 100vw, 576px"
        />
        <figcaption>
          Thematic Apperception Test, Picture C (1938). Murray also printed it
          in <em>Explorations in Personality</em>. Christiana Morgan numbered it
          Picture 5.
        </figcaption>
      </figure>

      <figure className="video">
        <div className="video-frame is-portrait">
          <video
            src="/images/synthetic-unconscious/tat-scene.mp4"
            poster="/images/synthetic-unconscious/tat-scene.png"
            controls
            playsInline
            preload="metadata"
          />
        </div>
        <figcaption>
          Video and sound generated with Wan 3 (alibaba/wan-3). Prompt:
          “Interpret this scene and keep the visual style.”
        </figcaption>
      </figure>

      <figure className="project-figure is-portrait">
        <Image
          src="/images/synthetic-unconscious/tat-13b.png"
          alt="Thematic Apperception Test, card 13B: a young boy sits in the doorway of a log cabin, hands near his mouth."
          width={396}
          height={522}
          sizes="(max-width: 576px) 100vw, 576px"
        />
        <figcaption>
          Thematic Apperception Test, card 13B. A boy sitting on the doorstep
          of a log cabin.
        </figcaption>
      </figure>

      <figure className="video">
        <div className="video-frame is-card">
          <video
            src="/images/synthetic-unconscious/tat-13b.mp4"
            poster="/images/synthetic-unconscious/tat-13b.png"
            controls
            playsInline
            preload="metadata"
          />
        </div>
        <figcaption>
          Video and sound generated with Wan 3 (alibaba/wan-3). Prompt:
          “Interpret this scene and keep the visual style.”
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          The Thematic Apperception Test asks for a narrative. The Rorschach
          asks for a perception. Generative video adds a third act: the model
          does not only describe what it sees. It produces a moving world from
          what it interprets.
        </p>
      </div>

      <h2>An ecology of interpretations</h2>
      <div className="prose">
        <p>
          The installation will set several screens beside one another, the
          same stimulus read by different models, with the text of each
          interpretation next to the video it produced. I am also working
          toward real-time interpretation, so that a model can answer a picture
          as it appears, and a visitor can take part. Each model makes another
          version. Each answer shows another arrangement of what it has
          learned.
        </p>
        <p>
          If psychology took shape around human perception, behavior, and the
          unconscious, a synthetic psychology would need instruments for
          systems that have learned our social tendencies and our biases, and
          that may also report something of their own states. I am not offering
          a clinical test of AI. I am staging an experiment between
          psychoanalysis, computational cognition, generative art, and critical
          studies of AI.
        </p>
        <p>
          I do not claim that models dream, desire, or repress. The synthetic
          unconscious is a productive fiction: an interface between what a
          model has learned, what it generates, and what stays out of reach.
          The question is not whether machines have an unconscious, but what
          becomes possible when we investigate them as if they did.
        </p>
      </div>
    </article>
  );
}
