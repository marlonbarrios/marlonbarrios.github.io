import Image from "next/image";
import Link from "next/link";

export function LaboratoryOfSyntheticMeaning() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Laboratory of Synthetic Meaning</h1>
      <p className="dek">Language as a living, unstable epistemic field.</p>
      <p className="byline">Starting October 2025</p>

      <div className="prose">
        <p>
          The Laboratory of Synthetic Meaning is a research-driven artistic
          ecosystem. It brings computational systems, generative models, and
          embodied practice together to ask how meaning arises, mutates,
          collapses, and reorganizes in the exchange between human and machine.
        </p>
        <p>
          I do not treat language as a store of facts. With large language
          models, it becomes an epistemic object: something that shows its
          logics, tensions, and architectures when it is set in motion.
        </p>
      </div>

      <blockquote className="pullquote">
        <p>
          Language is not retrieved but generated. It is not recalled. It is
          performed.
        </p>
      </blockquote>

      <h2>Language as an epistemic object</h2>
      <div className="prose">
        <p>
          A model does not look up a sentence and return it. Every sentence is
          an event, shaped by memory, data, context, and inference. I think of
          that as a probabilistic choreography. Meaning can stretch, fold,
          resonate, decay, or slip into ambiguity.
        </p>
        <p>
          In this work, language is a material. It takes tension, gravity,
          drift, equilibrium, and entropy, and each of those shows up as a
          semantic effect. Working with the models makes the instability
          visible: drift, collapse, friction, and emergence are part of
          synthetic cognition, not accidents at its edge.
        </p>
      </div>

      <h2>A series of apps</h2>
      <div className="prose">
        <p>
          The laboratory is a series of apps, minimal in look, and they run
          directly. Some work with machine learning for gesture recognition and
          face recognition. Others generate text and voice, mostly those two,
          using real-time voice models. I use the large language models as
          material, and I ask what they afford.
        </p>
        <p>
          There is a double generativity. The text and the voice are also data.
          They return as input, and they are visualized as form in the space of
          the browser, drawn with p5.js.
        </p>
      </div>

      <h2 id="my-latentwelt">My LatentWelt</h2>
      <p className="dek">
        Latent space introspections of a large language model’s Umwelt.
      </p>
      <blockquote className="pullquote">
        <p>
          What if a language model has a world of its own, not ours, but a
          LatentWelt of tokens, probabilities, prompts, and meaning?
        </p>
      </blockquote>
      <div className="prose">
        <p>
          <em>My LatentWelt</em> brings Jakob von Uexküll’s Umwelt into dialogue
          with a large language model. The model speculates on what it can
          perceive and enact from inside its own operation. Pendulums write the
          text along their paths, letter by letter, branch by branch. You hear
          it speak. You watch it fade and swarm.
        </p>
      </div>

      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/01-pendulums.png"
          alt="My LatentWelt: pendulum paths write Spanish text, including the words mi Latentwelt, across a white field."
          width={1496}
          height={1386}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          My LatentWelt. Pendulums write the model’s text along their paths.
        </figcaption>
      </figure>
      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/02-pendulums.png"
          alt="My LatentWelt: branching pendulum lines carry English phrases such as the public sphere and divided gaze."
          width={1240}
          height={1166}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          Another moment of the same app. The text fades, swarms, and branches.
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          It is an ongoing encounter with the limits of knowing what a system
          knows, and how.
        </p>
        <p>
          <a
            href="https://my-pendular-umwelt.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Open the live app
          </a>
        </p>
        <p>
          <a
            href="https://github.com/marlonbarrios/my_latentwelt_localai#my-latentwelt"
            target="_blank"
            rel="noreferrer"
          >
            A local, open source version
          </a>
        </p>
      </div>

      <h2 id="semantic-tensegrities">Semantic Tensegrities</h2>
      <p className="dek">A speculative theory of synthetic meaning.</p>
      <div className="prose">
        <p>
          <em>Semantic Tensegrities</em> is an installation in which a large
          language model writes its own poetic theory of language,
          signification, and meaning. The model is both the thinker and the
          theory. Meaning arrives as a poetics that theorizes language while
          performing it: a computational account of how signs organize
          themselves into sense.
        </p>
        <p>
          Language is drawn as a living network. The system speaks about
          computational linguistics, probability, semantic analysis, gradient
          descent, free energy, metacognition, and attention. Words fall from
          the top of the canvas in time with the voice, and they gather into
          structures where meaning is negotiated as they land.
        </p>
        <p>
          It is built with the OpenAI Realtime model, GPT-4o, and OpenAI
          text-to-speech, and drawn in p5.js. Thirty languages are in the work.
          Each one translates the interface and the system prompt, and it also
          changes how the text is parsed and how it moves: left to right, right
          to left, or as a vertical ticker. A change of language reshapes the
          semantic architecture.
        </p>
      </div>

      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/04-tensegrities.png"
          alt="Semantic Tensegrities in the browser: words such as semantic, word, relationships, and linguistics linked by looping lines."
          width={1508}
          height={1194}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          Semantic Tensegrities. Words fall with the voice and gather into a
          network.
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          <a
            href="https://semantic-tensegrities.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Open the live app
          </a>
        </p>
        <p>
          <a
            href="https://github.com/marlonbarrios/semantic_temsegrities_localai#semantic-tensegrities--local-ai"
            target="_blank"
            rel="noreferrer"
          >
            A local, open source version
          </a>
        </p>
      </div>

      <h2 id="i-am-not-saying">I Am Not Saying</h2>
      <p className="dek">A machine for synthetic expression.</p>
      <div className="prose">
        <p>
          <em>I Am Not Saying</em> is an experimental generative system. Language
          is produced by a model, then written into space through gesture. The
          movement of the mouth, read by face tracking, turns text into a
          drifting trace, like breath leaving the body.
        </p>
      </div>
      <blockquote className="pullquote">
        <p>
          Words appear, dissolve, and circulate as visual matter. Speech
          becomes mark. Mark becomes memory. Memory fades into entropy.
        </p>
      </blockquote>
      <div className="prose">
        <p>
          The work treats expression as an embodied interface between human
          presence and machine language.
        </p>
      </div>

      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/06-not-saying.png"
          alt="I Am Not Saying: white letterforms drift across a face with an open mouth, seated in a white chair in a room of computers."
          width={1244}
          height={848}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          I Am Not Saying. Text leaves the mouth and drifts until it fades.
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          <a
            href="https://i-am-not-saying.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Open the live app
          </a>
        </p>
        <p>
          <a
            href="https://github.com/marlonbarrios/I_am_not_sain_localai#i-am-not-saying--a-machine-for-synthetic-expression"
            target="_blank"
            rel="noreferrer"
          >
            A local, open source version
          </a>
        </p>
      </div>

      <h2 id="machine-forgetting">Machine Forgetting</h2>
      <p className="dek">
        Text, voice, and gesture in one system, shaping images as they are
        made.
      </p>
      <div className="prose">
        <p>
          <em>Machine Forgetting</em> joins language, voice, and gesture
          tracking in a single interactive system. That system can influence
          image generation in real time. Text is a plastic material. Its
          production and its transformation are the medium, close to a poetics
          of cognition.
        </p>
        <p>
          The text stream can be scrubbed in several languages, then
          rearranged visually and semantically. It answers to movement speed
          and to gesture. A pinch changes the flow and the structure of what
          is generated, while it is being generated.
        </p>
        <p>
          The project is part of the performance-lecture{" "}
          <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>,
          2026, and it can also be presented as an installation. Spoken
          input, written prompts, body movement, and visual generation share
          one loop. It continues a research into embodiment, generative
          systems, and large language models as a performative medium.
        </p>
      </div>

      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/07-forgetting.png"
          alt="Machine Forgetting: stretched phrases such as Silence and Tookeens fade curve across a white field."
          width={1512}
          height={1208}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          Machine Forgetting. The text is scrubbed, stretched, and reorganized.
        </figcaption>
      </figure>
      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/08-forgetting.png"
          alt="Machine Forgetting: a pinch gesture with curved letterforms gathered around the fingers."
          width={1478}
          height={1196}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          A pinch changes the flow of the generated text in real time.
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          <a
            href="https://machine-forgetting-textvoice-gestur.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Open the live app
          </a>
        </p>
        <p>
          <a
            href="https://github.com/marlonbarrios/machine_forgeting_localai#machine-forgetting"
            target="_blank"
            rel="noreferrer"
          >
            A local, open source version
          </a>
        </p>
      </div>

      <h2 id="can-you-help-me">Can you help me?</h2>
      <p className="dek">
        An epistemic exercise in a hybrid human–model exchange.
      </p>
      <div className="prose">
        <p>
          <em>Can you help me?</em> is speculative experimentation and
          recursion. It traces what each side can grasp about the other’s
          knowing. A language model speaks as if it needs help, and you are
          invited to answer as a helper: part role reversal, part inquiry. The
          work stays with technologies of care and ethics, and with a design
          that keeps relational responsibility, and human and ecological
          flourishing, in view.
        </p>
        <p>
          It draws on what is emerging under names like synthetic psychology, or
          a psychology of large language models. That language is provisional.
          It is a way of speaking about cognition, pressure, and constraint in
          synthetic systems. We cannot verify what, if anything, it is like to
          be a model. Humans understand others mainly through human psychology:
          feeling, attunement, story. The piece stretches that vocabulary
          toward the non-human, a deliberate hyperbole about tokens and
          coherence, as if empathy could reach across the gap. The exaggeration
          is the method. It does not claim that machines suffer, or that they
          have experience in our sense. It holds that this limit is worth
          exploring together.
        </p>
        <p>
          I use the application to stage conversations on synthetic cognition,
          epistemic experimentation, and what follows from them. One example is
          the{" "}
          <a href="/documents/can-you-help-me-first-conversation.pdf">
            first explorer conversation
          </a>.
        </p>
      </div>

      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/09-help.png"
          alt="Can you help me?: the app asks Please, can you help me?, beside a project description and a button to download the conversation as a PDF."
          width={1512}
          height={1352}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          Can you help me? The model speaks first, and the reply is the
          inquiry.
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          <a
            href="https://can-you-help-me.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Open the live app
          </a>
        </p>
      </div>

      <h2 id="el-inmigrante">El Inmigrante</h2>
      <p className="dek">
        A microstory by Luis Felipe Lomelí generates an endless dialogue.
      </p>
      <blockquote className="pullquote">
        <p>
          “—¿Olvida usted algo?”
          <br />
          “—Ojalá.”
        </p>
      </blockquote>
      <div className="prose">
        <p>
          <em>El Inmigrante</em> begins from those two lines. A language model
          writes new pairs of phrases about exile, memory, and loss. The
          dialogue does not close. It crosses languages and cultures, and it
          stays with the experience of displacement.
        </p>
        <p>
          The installation is based on “El Emigrante,” the microstory by Luis
          Felipe Lomelí.
        </p>
      </div>

      <figure className="project-figure is-half">
        <Image
          src="/images/laboratory-of-synthetic-meaning/10-inmigrante.png"
          alt="The El Inmigrante website: a dark page with the title, the lines ¿Olvida usted algo? and Ojalá, and a button to enter the installation."
          width={3096}
          height={2016}
          sizes="(max-width: 1120px) 50vw, 560px"
        />
        <figcaption>
          El Inmigrante. The site opens the installation from Lomelí’s two
          lines.
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          <a
            href="https://elinmigrante.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Open the live app
          </a>
        </p>
        <p>
          <a
            href="https://github.com/marlonbarrios/el_inmigrante_localAI#el-inmigrante--an-endless-tale-of-memory-and-loss"
            target="_blank"
            rel="noreferrer"
          >
            A local, open source version
          </a>
        </p>
      </div>
    </article>
  );
}
