"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type SeriesImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

const ADVANCE_MS = 4500;

function wrap(index: number, count: number) {
  if (count === 0) return 0;
  return ((index % count) + count) % count;
}

export function PhotoSeries({
  images,
  caption,
  credit,
  initialIndex = 0,
}: {
  images: SeriesImage[];
  caption?: string;
  credit?: string;
  initialIndex?: number;
}) {
  const count = images.length;
  const [index, setIndex] = useState(initialIndex);
  const [shown, setShown] = useState(initialIndex);
  const [held, setHeld] = useState(false);

  const shownIndex = wrap(shown, count);
  const targetIndex = wrap(index, count);
  const current = images[shownIndex];
  const incoming =
    count > 1 && targetIndex !== shownIndex ? images[targetIndex] : null;
  const waiting = incoming !== null;

  useEffect(() => {
    if (held || count < 2 || waiting) return;
    const id = window.setTimeout(() => {
      setIndex((value) => value + 1);
    }, ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [held, count, waiting, shownIndex]);

  function go(delta: number) {
    if (count < 2) return;
    setIndex((value) => value + delta);
  }

  function revealIncoming(node?: HTMLImageElement | null) {
    if (node && node.naturalWidth === 0) return;
    setShown(targetIndex);
  }

  function onKey(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  if (!current) return null;

  const slides = incoming ? [current, incoming] : [current];

  return (
    <section
      className={
        held || count < 2 || waiting
          ? "series slideshow is-paused"
          : "series slideshow"
      }
      aria-roledescription="carousel"
      aria-label={caption || "Photographs"}
      tabIndex={0}
      onKeyDown={onKey}
    >
      {caption ? <p className="series-caption">{caption}</p> : null}
      <div
        className="slideshow-stage"
        style={{ aspectRatio: `${current.width} / ${current.height}` }}
      >
        {slides.map((image) => {
          const active = image.src === current.src;
          return (
            <Image
              key={image.src}
              src={image.src}
              alt={active ? image.alt : ""}
              aria-hidden={active ? undefined : true}
              fill
              sizes="(max-width: 1120px) 100vw, 1120px"
              className={
                active ? "slideshow-photo" : "slideshow-photo is-buffer"
              }
              priority={active && shownIndex === wrap(initialIndex, count)}
              loading={active ? undefined : "eager"}
              ref={
                active
                  ? undefined
                  : (node) => {
                      if (node?.complete && node.naturalWidth > 0) {
                        revealIncoming(node);
                      }
                    }
              }
              onLoad={active ? undefined : () => revealIncoming()}
              onError={active ? undefined : () => revealIncoming()}
            />
          );
        })}
      </div>
      {current.caption ? (
        <p className="series-caption slideshow-label">{current.caption}</p>
      ) : null}
      {count > 1 ? (
        <div className="slideshow-bar">
          <button type="button" onClick={() => go(-1)}>
            Previous
          </button>
          <p className="slideshow-count">
            {shownIndex + 1} / {count}
          </p>
          <button type="button" onClick={() => go(1)}>
            Next
          </button>
          <button
            type="button"
            aria-pressed={held}
            onClick={() => setHeld((value) => !value)}
          >
            {held ? "Play" : "Pause"}
          </button>
        </div>
      ) : null}
      {held || count < 2 || waiting ? null : (
        <div className="slideshow-progress">
          <span
            key={shownIndex}
            style={{ animationDuration: `${ADVANCE_MS}ms` }}
          />
        </div>
      )}
      {credit ? <p className="series-credit">{credit}</p> : null}
    </section>
  );
}
