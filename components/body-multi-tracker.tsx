import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getProjectImages } from "@/lib/works";

const live = "https://marlonbarrios.github.io/body_multi_tracker_to_midi/";
const code =
  "https://github.com/marlonbarrios/body_multi_tracker_to_midi#body-multi-tracker";

const wiki = {
  midi: "https://en.wikipedia.org/wiki/MIDI",
  osc: "https://en.wikipedia.org/wiki/Open_Sound_Control",
  ableton: "https://en.wikipedia.org/wiki/Ableton_Live",
  synth: "https://en.wikipedia.org/wiki/Synthesizer",
  control: "https://en.wikipedia.org/wiki/MIDI#Controllers",
  pitch: "https://en.wikipedia.org/wiki/Pitch_(music)",
};

function Term({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

const figures: { alt: string; caption: ReactNode }[] = [
  {
    alt: "Notes mode: the hand and all five fingers are tracked, and the stage shows the notes of the scale from C3 to C5.",
    caption: (
      <>
        Notes mode. The right hand and its five fingertips are tracked. Moving
        a point up and down plays the notes of the{" "}
        <Term href={wiki.pitch}>pitch</Term>.
      </>
    ),
  },
  {
    alt: "Controllers mode: the nose is selected and sends X on CC 22 and Y on CC 23.",
    caption: (
      <>
        Controllers mode. The nose is selected. Its X and Y go out as{" "}
        <Term href={wiki.control}>MIDI control changes</Term>, CC 22 and CC 23.
      </>
    ),
  },
];

export async function BodyMultiTracker() {
  const images = await getProjectImages("body-multi-tracker");

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Body Multi-Tracker</h1>
      <p className="dek">
        An app to track from one to four bodies, and to send different kinds of
        data.
      </p>
      <p className="links">
        <a href={live} target="_blank" rel="noreferrer">
          Open the live app
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <Link href="/projects/proximities">Proximities</Link>
      </p>

      <div className="prose">
        <p>
          <em>Body Multi-Tracker</em> is an app to track from one to four
          bodies, and to send different kinds of data. A webcam watches the
          performers. I click the points that matter, a hand, a fingertip, the
          head, a knee, and the app streams that movement.
        </p>
        <p>
          The data can go out as <Term href={wiki.midi}>MIDI</Term> to{" "}
          <Term href={wiki.ableton}>Ableton Live</Term>, or to any{" "}
          <Term href={wiki.synth}>synthesizer</Term> that accepts MIDI. The same
          points can go out as <Term href={wiki.osc}>OSC</Term>, Open Sound
          Control, for other software. In Controllers mode, each point sends
          two <Term href={wiki.control}>control changes</Term>, X and Y. In
          Notes mode, height plays a <Term href={wiki.pitch}>pitch</Term> and
          speed sets the loudness.
        </p>
        <p>
          It tracks 46 points per person, including the head, the torso, the
          limbs, and all five fingertips. Nothing is uploaded. The tracking
          happens on the computer in front of you.
        </p>
      </div>

      {images.map((image, index) => (
        <figure className="project-figure" key={image.src}>
          <Image
            src={image.src}
            alt={figures[index]?.alt ?? image.title}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1120px) 100vw, 832px"
            priority={index === 0}
          />
          <figcaption>{figures[index]?.caption ?? image.title}</figcaption>
        </figure>
      ))}
    </article>
  );
}
