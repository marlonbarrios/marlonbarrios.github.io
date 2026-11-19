"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { OntologyKind } from "@/lib/ontology";
import { mountNetwork } from "@/components/network-sketch";

function selectedKind(): OntologyKind | "All" {
  const checked = document.querySelector<HTMLInputElement>('input[name="stage-kind"]:checked');
  const value = checked?.value;
  if (value === "Project" || value === "Concept" || value === "Context") return value;
  return "All";
}

export function NetworkCloud() {
  const router = useRouter();
  const hostRef = useRef<HTMLDivElement>(null);
  const routerRef = useRef(router);
  routerRef.current = router;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const place = () => {
      const frame = host.parentElement;
      const bar = document.querySelector(".network-stage-bar");
      const top = bar instanceof HTMLElement ? Math.ceil(bar.getBoundingClientRect().bottom) : 0;
      if (frame instanceof HTMLElement && top > 0) frame.style.top = `${top}px`;
      const height = Math.max(2, window.innerHeight - (top || frame?.getBoundingClientRect().top || 0));
      host.style.height = `${height}px`;
      host.style.width = "100%";
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    let remove = () => {};
    let gone = false;
    let redraw = () => {};
    mountNetwork(host, {
      getKind: () => selectedKind(),
      onHover: () => {},
      onOpen: (href) => routerRef.current.push(href),
      onReady: (draw) => {
        redraw = draw;
      },
    })
      .then((cleanup) => {
        if (gone) {
          cleanup();
          return;
        }
        remove = cleanup;
        redraw();
      })
      .catch((reason: unknown) => {
        if (gone) return;
        setError(reason instanceof Error ? reason.message : "The network could not be drawn.");
      });
    const onChange = () => redraw();
    document.addEventListener("change", onChange);
    return () => {
      gone = true;
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
      document.removeEventListener("change", onChange);
      remove();
    };
  }, []);

  return (
    <div ref={hostRef} className="network-p5">
      {error ? <p className="ontology-net-error">{error}</p> : null}
    </div>
  );
}
