"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type ProjectCard = {
  slug: string;
  title: string;
  line?: string;
  lineHref?: string;
  images: string[];
};

function firstCover(images: string[]) {
  return images[0] ?? null;
}

function randomCover(images: string[]) {
  if (images.length === 0) return null;
  return images[Math.floor(Math.random() * images.length)] ?? null;
}

export function ProjectCardList({ cards }: { cards: ProjectCard[] }) {
  const [covers, setCovers] = useState<(string | null)[]>(() =>
    cards.map((card) => firstCover(card.images)),
  );

  useEffect(() => {
    setCovers(cards.map((card) => randomCover(card.images)));
  }, [cards]);

  return (
    <ul className="project-grid">
      {cards.map((card, index) => {
        const cover = covers[index];
        return (
          <li key={card.slug}>
            <div className={cover ? "project-card has-cover" : "project-card"}>
              <Link className="card-main" href={`/projects/${card.slug}`}>
                {cover ? (
                  <span className="card-cover">
                    <Image
                      src={cover}
                      alt=""
                      fill
                      sizes="(max-width: 720px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </span>
                ) : null}
                <span className="card-copy">
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="project-title">{card.title}</span>
                    {card.line && !card.lineHref ? (
                      <span className="project-line">{card.line}</span>
                    ) : null}
                  </span>
                </span>
              </Link>
              {card.line && card.lineHref ? (
                <Link className="project-line" href={card.lineHref}>
                  {card.line}
                </Link>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
