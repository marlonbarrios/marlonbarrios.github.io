"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function AboutPortrait({ srcs }: { srcs: string[] }) {
  const [src, setSrc] = useState(srcs[0]);

  useEffect(() => {
    if (srcs.length === 0) return;
    setSrc(srcs[Math.floor(Math.random() * srcs.length)]);
  }, [srcs]);

  return (
    <figure className="about-portrait">
      <div className="about-frame">
        {src ? (
          <Image
            src={src}
            alt="Marlon Barrios Solano"
            fill
            priority
            sizes="280px"
          />
        ) : null}
      </div>
      <figcaption>Photo by A+E Lab, CCL 2025</figcaption>
    </figure>
  );
}
