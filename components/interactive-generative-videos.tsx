import Image from "next/image";
import Link from "next/link";

const live = "https://marlonbarrios.github.io/relentless_epistemics_acts/";
const code = "https://github.com/marlonbarrios/relentless_epistemics_acts";

export function InteractiveGenerativeVideos() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Interactive Generative Videos</h1>
      <div className="prose">
        <p>
          A collection of works that combine video made earlier with AI, each
          one drawn from the concept of its installation. The music is also
          made with AI. I designed it, and I am responsible for the concept
          and the programming. In the browser the same video
          loads into p5.js and becomes interactive. Press A to automate. Press
          Space to play. Some of the live pieces keep further instructions in
          the top-left corner.
        </p>
        <p>
          In a gallery or an exhibition they can run as single-channel
          generative video that changes by itself, or stay interactive so the
          audience can play them. I sometimes bring them
          into{" "}
          <Link href="/projects/born-in-latent-space">Born in Latent Space</Link>.
          Placed together in a room, as an assembly, they are what I call a
          stable landscape.
        </p>
      </div>

      <h2>Relentless Epistemic Acts</h2>
      <p className="dek">
        Single-channel video installation · Interactive / generative version
      </p>
      <p className="byline">
        Concept, programming, music, and performance
      </p>

      <div className="prose">
        <p>
          <em>Relentless Epistemic Acts</em> explores image, sound, automation,
          and the relentless production of knowledge. Black-and-white techno
          vectors swarm across the frame. Generative layers react to sound. A
          crosshair replaces the cursor. The video becomes a shifting field of
          signals, interruptions, intensities, and computational decisions.
        </p>
        <p>
          You can perform the system by hand, or give control over to it. In
          automate mode, the system keeps selecting and recombining visual
          states, answering partly to sound and partly to weighted randomness.
        </p>
        <p>
          The video was made with AI from one image of a performance. The music
          is also made with AI. I designed it, along with the concept and the
          programming. Built with p5.js and the Web Audio
          API.
        </p>
      </div>

      <blockquote className="pullquote">
        <p>
          An epistemic act that doesn’t settle into knowledge, but keeps
          producing conditions for knowing.
        </p>
      </blockquote>

      <div className="prose">
        <p>I am interested in the interface as a site of performance.</p>
      </div>
      <ul className="record">
        <li>Who acts?</li>
        <li>Who decides?</li>
        <li>What does the system perceive?</li>
        <li>
          What kind of knowledge emerges from the feedback loop between human,
          image, sound, code, and machine?
        </li>
      </ul>

      <h2>Keys</h2>
      <ul className="record">
        <li>G — generative effects</li>
        <li>V — vector swarm</li>
        <li>S — solarize</li>
        <li>Z / F — zoom in and out</li>
        <li>A — automate: let the system compose</li>
        <li>Space — play and pause</li>
      </ul>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/TZXmzEOhjZo"
            title="Relentless Epistemic Acts, interactive generative version"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Interactive / generative version.{" "}
          <a
            href="https://www.youtube.com/watch?v=TZXmzEOhjZo"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <p className="links">
        <a href={live} target="_blank" rel="noreferrer">
          Enter the live piece
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          Open-source code
        </a>
      </p>

      <h2>Barely There / I Am Home in Latent Space</h2>
      <p className="dek">
        An interactive video and generative installation
      </p>
      <p className="byline">
        Video, music, programming, and concept
      </p>

      <div className="prose">
        <p>
          <em>Barely There / I Am Home in Latent Space</em> unfolds as an ASMR
          song. The lyrics drift through latent space while generative visuals
          respond to sound, playback, and interaction. Every session makes a
          different visual composition.
        </p>
        <p>
          There are two ways to enter it. Press A for automated mode, and the
          system keeps generating visual scenes. Press Space to play, then use
          the controls in the top-left corner for generative effects, vectors,
          solarization, zoom, looping, and recording.
        </p>
        <p>
          A recording made while interacting with the piece can be sent back.
          The work is available to present as an installation, a performance,
          or an exhibition.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/MW3Uw1IgvdY"
            title="Barely There / I Am Home in Latent Space"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Barely There / I Am Home in Latent Space.{" "}
          <a
            href="https://www.youtube.com/watch?v=MW3Uw1IgvdY"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <p className="links">
        <a
          href="https://marlonbarrios.github.io/barely_there/"
          target="_blank"
          rel="noreferrer"
        >
          Enter the live piece
        </a>
        <a
          href="https://github.com/marlonbarrios/barely_there"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
      </p>

      <h2>Boys Will Be Proud</h2>
      <p className="dek">A satirical AI-generated anthem</p>
      <p className="byline">
        Built with p5.js, the Web Audio API, and generative AI
      </p>

      <div className="prose">
        <p>
          <em>Boys Will Be Proud</em> is an interactive audiovisual installation
          about fragile masculinity, grievance politics, and the performance of
          nationalism. Two synchronized versions of the same figure appear, the
          second mirrored, an encounter with a reflection that refuses
          self-recognition.
        </p>
        <p>
          The work begins frozen. Press Space to set it in motion. Press A for
          an audio-reactive mode: red and blue saturation pulses with the
          soundtrack, the colors of the flag, without distorting the image.
          Lyrics scroll along the bottom, turning political rhetoric into
          karaoke, and showing the choreography of nostalgia, resentment, and
          identity.
        </p>
        <p>
          Interaction, repetition, and spectacle shape a contemporary political
          imaginary.
        </p>
      </div>

      <blockquote className="pullquote">
        <p>“We’re not angry—just Boys, and Proud.”</p>
      </blockquote>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/H_8gGYBRcJE"
            title="Boys Will Be Proud"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Boys Will Be Proud.{" "}
          <a
            href="https://www.youtube.com/watch?v=H_8gGYBRcJE"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <p className="links">
        <a
          href="https://marlonbarrios.github.io/boyswillbeproud"
          target="_blank"
          rel="noreferrer"
        >
          Enter the live piece
        </a>
      </p>

      <h2>All Watched Over by Machines of Loving Grace</h2>
      <p className="dek">
        Single-channel video installation · December 2024
      </p>
      <p className="byline">
        Concept and design · Powered by fal.ai
      </p>

      <div className="prose">
        <p>
          <em>All Watched Over by Machines of Loving Grace</em> is AI-generated
          video art inspired by Richard Brautigan’s 1967 cyber-utopian poem,
          seen again through algorithmic surveillance. It stays with the
          tension between techno-optimism and the surveillance encoded in
          machine learning.
        </p>
        <p>
          The voice of Richard Brautigan is sampled from Adam Curtis’s series
          of the same name. These are the first prototypes for “In the Eye of
          the Beholder.”
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/m4SP_lNGcHk"
            title="All Watched Over by Machines of Loving Grace"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          All Watched Over by Machines of Loving Grace.{" "}
          <a
            href="https://www.youtube.com/watch?v=m4SP_lNGcHk&list=PLC2ijZ2U-avhHakuTKBrDOVX8BTPdqwTn"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <p className="links">
        <a
          href="https://marlonbarrios.github.io/alwatchedoverbymachinesoflovinggrace/"
          target="_blank"
          rel="noreferrer"
        >
          Enter the live piece
        </a>
      </p>

      <h2>We Came to Rule</h2>
      <p className="dek">A dark anthem of conquest</p>
      <p className="byline">
        With María Luisa Angulo · Decolonizing the Digital
        Residency · Pangea Inteligencia Artificial
      </p>

      <div className="prose">
        <p>
          <em>We Came to Rule</em> reimagines the Valladolid Debate as a
          techno-oratorio of domination and denial. Gregorian chant dissolves
          into thunder, and the voice of empire names itself eternal: a crown,
          a sword, a divine flame that claims the world. The lyrics follow the
          logic of Sepúlveda’s argument, in which Indigenous peoples are framed
          as children, beasts, bodies without souls, a theology of conquest that
          sanctified extraction, servitude, and death in the name of God and
          empire.
        </p>
        <p>
          Proclamations of “natural dominion” sit against relentless beats and
          fractured chants. Marching rhythms carry colonial violence. Sampled
          Latin phrases expose the juridical and theological scaffolding that
          legitimized genocide: <em>Imperium sine fine</em>, empire without
          end; <em>Dominium naturale</em>, natural dominion; <em>Ex cathedra</em>,
          from the throne itself. “This world is ours” is chanted as a
          weaponized mantra. The piece is a critique, a sonic archive of
          arrogance.
        </p>
        <p>
          The images were generated with AI from 15th-century German
          cartography. Early imperial maps become fractured, pulsating
          landscapes. Maps become scars, chants become errors, and empire shows
          itself as an unstable signal.
        </p>
        <p>
          The track is part of{" "}
          <a
            href="https://marlonbarrios.github.io/pangea_in_latent_space-_tectonics_of-_otherness/"
            target="_blank"
            rel="noreferrer"
          >
            Pangea in Latent Space
          </a>{" "}
          and{" "}
          <Link href="/projects/tectonics-of-otherness">
            The Tectonics of Otherness
          </Link>, and it belongs to{" "}
          <Link href="/projects/dark-enlightenment">Dark Enlightenment</Link> and
          the Techno-republic playlist. It was made as synthetic media for the
          Decolonizing the Digital Residency of Pangea IA, which I led with
          María Luisa Angulo.
        </p>
      </div>

      <blockquote className="pullquote">
        <p>We came not to ask, but to rule.</p>
      </blockquote>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/vroFIxN7qcI"
            title="We Came to Rule"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          We Came to Rule.{" "}
          <a
            href="https://www.youtube.com/watch?v=vroFIxN7qcI"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <p className="links">
        <a
          href="https://marlonbarrios.github.io/we_came_to_rule/"
          target="_blank"
          rel="noreferrer"
        >
          Enter the live piece
        </a>
      </p>

      <h2>Glitch Sanctum</h2>
      <p className="dek">
        An interactive audiovisual installation and performance system
      </p>
      <p className="byline">
        Concept and development
      </p>

      <div className="prose">
        <p>
          <em>Glitch Sanctum</em> stages a corrupted liturgy where ritual, code,
          sound, and moving image collide. A dual mirrored video becomes a site
          of continuous transformation. Fragments split into RGB channels,
          pulse with the music, pixelate, rotate, fracture, and reassemble in
          response to an autonomous audiovisual system.
        </p>
        <p>
          The scrolling text unfolds as a broken hymn, a meditation on
          authoritarianism, technological power, white supremacy, propaganda,
          and the fragility of belief in an age of algorithmic mediation. The
          glitch is a space for critical reflection and aesthetic resistance.
        </p>
        <p>
          The film records one iteration. Every performance is different,
          shaped by real-time audio analysis and generative visual processes
          that keep rewriting the image and the sound. Press Space to play.
          Press A and the system continues on its own. Further instructions sit
          in the top-left corner of the live piece.
        </p>
      </div>

      <blockquote className="pullquote">
        <p>Sanctus… System corrupted. Input: faith. Output: war.</p>
      </blockquote>

      <figure className="project-figure">
        <Image
          src="/images/interactive-generative-videos/07-glitch-sanctum.jpg"
          alt="A mirrored close-up of a face with blue eyes, split down the center, above a line of broken hymn text."
          width={1508}
          height={760}
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
        <figcaption>One iteration of Glitch Sanctum.</figcaption>
      </figure>

      <p className="links">
        <a
          href="https://marlonbarrios.github.io/glitch_sanctum/"
          target="_blank"
          rel="noreferrer"
        >
          Enter the live piece
        </a>
        <a
          href="https://github.com/marlonbarrios/glitch_sanctum"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
      </p>
    </article>
  );
}
