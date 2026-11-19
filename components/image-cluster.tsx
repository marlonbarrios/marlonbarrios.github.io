import Image from "next/image";
import { ShuffledFigure } from "@/components/random-figures";
import type { WorkImage } from "@/lib/works";

function stableIndex(seed: string, length: number) {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return length === 0 ? 0 : (hash >>> 0) % length;
}

export function pickSix(images: WorkImage[]) {
  const pool = [...images];
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swap = stableIndex(`${pool[index]?.src ?? ""}:${index}`, index + 1);
    const current = pool[index];
    pool[index] = pool[swap];
    pool[swap] = current;
  }
  return pool.slice(0, 6);
}

export function stillSlots(count: number, alt: string, caption: string) {
  return Array.from({ length: count }, (_, index) => (
    <ShuffledFigure key={`${caption}-${index}`} index={index} alt={alt} caption={caption} />
  ));
}

export function stillFigures(
  images: WorkImage[],
  alt: string,
  caption: string,
  priority = false,
) {
  return images.map((image, index) => {
    const portrait = image.height > image.width;
    return (
      <figure
        key={image.src}
        className={portrait ? "project-figure is-portrait" : "project-figure"}
      >
        <Image
          src={image.src}
          alt={`${alt}, photograph ${index + 1} of ${images.length}`}
          width={image.width}
          height={image.height}
          sizes={
            portrait
              ? "(max-width: 1120px) 70vw, 576px"
              : "(max-width: 1120px) 100vw, 1120px"
          }
          priority={priority && index === 0}
        />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  });
}
