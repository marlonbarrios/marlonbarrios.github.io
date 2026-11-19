import Link from "next/link";
import type { ReactNode } from "react";
import { pickSix, stillSlots } from "@/components/image-cluster";
import { PhotoOrder } from "@/components/random-figures";
import { getProjectImages } from "@/lib/works";

const caption =
  "First prototype, Afrofuturism Week, Cade Museum, January 2026.";

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

export async function TangerineDreams() {
  const photographs = await getProjectImages("tangerine-dreams");
  const images = stillSlots(
    Math.min(6, photographs.length),
    "Tangerine Dreams, first prototype at the Cade Museum",
    caption,
  );

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Tangerine Dreams</h1>
      <p className="dek">
        Cultivating collective futures at the Cade Museum.
      </p>
      <p className="byline">
        I premiered the prototype in January 2026. A version with an open-source
        large language model premieres in April 2027.
      </p>

      <PhotoOrder pool={photographs} initial={pickSix(photographs)}>
      {weave(
        [
          <p key="open-1">
            I presented the first prototype on the closing day of Afrofuturism
            Week, produced by CAME at the Cade, in January 2026. The photographs
            on this page are from that showing.
          </p>,
          <p key="open-2">
            Tangerine Dreams is a generative audiovisual installation combining
            MIDI input, procedural visuals, synthesized sound, and
            text-to-speech. Sixteen MIDI notes (60–75) each trigger a distinct
            dream vision: fruit dreams, present tangerines, future tangerines
            reflecting on speculative futures.
          </p>,
          <p key="open-3">
            The work runs on custom p5.js software connected to a Playtronica
            interface. Real tangerines sit directly on the surface and become
            conductive without modification. The visitor touches the central pile
            of tangerines and one of sixteen surrounding tangerines to activate a
            dream, forming a playful circuit where electricity, body, and fruit
            interpenetrate.
          </p>,
          <p key="open-4">
            Materials: a computer running p5.js, a Playtronica device, alligator
            cables, fresh tangerines, LCD screens, and speakers.
          </p>,
        ],
        images.slice(0, 4),
        "prototype",
      )}

      <h2>April 2027</h2>
      {weave(
        [
          <p key="later-1">
            A version with AI premieres in April 2027 at the Cade Museum in
            Gainesville. It layers an open-source large language model, with a
            focus on open source and human-centered AI, developed through focus
            groups. Gainesville residents are invited to imagine the city’s
            future. Their stories and dreams fine-tune the model, which powers
            the installation and a companion website. Visitors touch real
            tangerines to complete electrical circuits that activate stories
            shaped by local voices.
          </p>,
          <p key="later-2">
            Two public workshops bring together residents, students, families,
            and neighbors to create sixteen speculative dreams. The stories are
            used to fine-tune a model trained on community-authored writing, so
            the installation answers from Gainesville’s imagination. The
            installation is shown during Cade Community Days. A website will keep
            the invitation open, and selected dreams will be printed as postcards.
          </p>,
          <p key="later-3">
            The project asks how a community imagines its future, how storytelling
            shapes civic identity, and how generative AI changes storytelling. I
            am developing it as Maker-in-Residence at the Center for Arts,
            Migration, and Entrepreneurship, with the Cade Museum for Creativity
            and Invention.
          </p>,
        ],
        images.slice(4),
        "premiere",
      )}
      </PhotoOrder>
    </article>
  );
}
