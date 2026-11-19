"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { WorkImage } from "@/lib/works";

const OrderContext = createContext<WorkImage[]>([]);

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    const current = next[index];
    next[index] = next[swap];
    next[swap] = current;
  }
  return next;
}

export function PhotoOrder({
  pool,
  initial,
  children,
}: {
  pool: WorkImage[];
  initial: WorkImage[];
  children: ReactNode;
}) {
  const [shown, setShown] = useState(initial);
  const key = pool.map((image) => image.src).join("|");

  useEffect(() => {
    setShown(shuffle(pool).slice(0, initial.length));
  }, [key, pool, initial.length]);

  return <OrderContext.Provider value={shown}>{children}</OrderContext.Provider>;
}

export function ShuffledFigure({
  index,
  alt,
  caption,
}: {
  index: number;
  alt: string;
  caption: string;
}) {
  const shown = useContext(OrderContext);
  const image = shown[index];
  if (!image) return null;
  const portrait = image.height > image.width;
  return (
    <figure className={portrait ? "project-figure is-portrait" : "project-figure"}>
      <Image
        src={image.src}
        alt={`${alt}, photograph ${index + 1} of ${shown.length}`}
        width={image.width}
        height={image.height}
        sizes={
          portrait
            ? "(max-width: 1120px) 40vw, 288px"
            : "(max-width: 1120px) 50vw, 560px"
        }
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

