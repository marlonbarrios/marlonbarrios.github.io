"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

function resolveTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    const next = resolveTheme();
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  }, []);

  function choose(next: Theme) {
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* preference stays for this visit */
    }
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  }

  return (
    <header className="site-header">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="brand-block">
        <div className="brand">
          <Link className="brand-name" href="/">
            Marlon Barrios Solano
          </Link>
          <Link className="brand-role" href="/">
            Interdisciplinary artist, researcher, and educator · Art, AI, creativity, cognition, and embodiment
          </Link>
          <a
            className="brand-post"
            href="https://arts.ufl.edu/people/profiles/marlon-barrios-solano/"
            target="_blank"
            rel="noreferrer"
          >
            Maker in Residence, Center for Arts, Migration + Entrepreneurship at the University of Florida
          </a>
        </div>
        <nav className="social" aria-label="Profiles">
          <a
            href="https://www.instagram.com/marlonbarriossolano/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
            </SocialIcon>
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/marlon-barrios-solano-98599b205/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 11v5M8 8h.01M12 16v-3.2a2 2 0 0 1 4 0V16" />
            </SocialIcon>
            LinkedIn
          </a>
          <a
            href="https://github.com/marlonbarrios"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <path
                d="M12 3.2a8.2 8.2 0 0 0-2.6 16c.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1-2.8-1-.3-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.9 3.7-3.7 3.9.3.3.6.8.6 1.6v2.3c0 .2.2.5.6.4A8.2 8.2 0 0 0 12 3.2z"
                fill="currentColor"
                stroke="none"
              />
            </SocialIcon>
            GitHub
          </a>
          <a
            href="https://www.youtube.com/@marlonbarriossolano"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <rect x="3" y="6.5" width="18" height="11" rx="3" />
              <path d="M11 10.2v3.6l3.4-1.8-3.4-1.8z" fill="currentColor" stroke="none" />
            </SocialIcon>
            YouTube
          </a>
          <a href="mailto:mbarriossolano@ufl.edu">
            <SocialIcon>
              <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
              <path d="M4.5 7.2 12 12.2l7.5-5" />
            </SocialIcon>
            Email
          </a>
        </nav>
      </div>
      <div className="nav-cluster">
        <nav className="nav" aria-label="Pages">
          <Link
            href="/about"
            aria-current={pathname.startsWith("/about") ? "page" : undefined}
          >
            About
          </Link>
          <Link
            href="/"
            aria-current={
              pathname === "/" || pathname.startsWith("/projects")
                ? "page"
                : undefined
            }
          >
            Projects
          </Link>
          <Link
            href="/ontology"
            aria-current={pathname.startsWith("/ontology") ? "page" : undefined}
          >
            Ontology
          </Link>
          <Link
            href="/network"
            aria-current={pathname.startsWith("/network") ? "page" : undefined}
          >
            Network
          </Link>
        </nav>
        <div className="theme" role="group" aria-label="Color theme">
          <button
            type="button"
            data-theme-choice="light"
            aria-pressed={theme === "light"}
            onClick={() => choose("light")}
          >
            Light
          </button>
          <button
            type="button"
            data-theme-choice="dark"
            aria-pressed={theme === "dark"}
            onClick={() => choose("dark")}
          >
            Dark
          </button>
        </div>
      </div>
    </header>
  );
}
