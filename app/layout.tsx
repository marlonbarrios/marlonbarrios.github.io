import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Marlon Barrios Solano",
    template: "%s — Marlon Barrios Solano",
  },
  description:
    "Marlon Barrios Solano, a Venezuelan-American interdisciplinary artist, creative technologist, and researcher. Dance, generative AI, creative coding, and interactive performance.",
  authors: [{ name: "Marlon Barrios Solano" }],
  creator: "Marlon Barrios Solano",
  openGraph: {
    title: "Marlon Barrios Solano",
    description:
      "Venezuelan-American interdisciplinary artist, creative technologist, and researcher. Dance, generative AI, creative coding, and interactive performance.",
    siteName: "Marlon Barrios Solano",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Marlon Barrios Solano",
    description:
      "Venezuelan-American interdisciplinary artist, creative technologist, and researcher. Dance, generative AI, creative coding, and interactive performance.",
  },
};

const themeScript = `(function(){
  function apply(theme){
    if(theme!=="light"&&theme!=="dark") return;
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    var buttons = document.querySelectorAll("[data-theme-choice]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-theme-choice") === theme ? "true" : "false");
    }
  }
  try {
    var stored = localStorage.getItem("theme");
    if (stored !== "light" && stored !== "dark") {
      stored = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", stored);
  } catch (e) {}
  document.addEventListener("click", function(event){
    var target = event.target;
    var button = target && target.closest && target.closest("[data-theme-choice]");
    if (!button) return;
    apply(button.getAttribute("data-theme-choice"));
  }, true);
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={sans.className}>
        <SiteHeader />
        <main id="content">{children}</main>
        <footer className="site-footer">
          <p>Concept and programming by Marlon Barrios Solano.</p>
          <p>All artwork © Marlon Barrios Solano.</p>
          <p>
            Code on{" "}
            <a
              href="https://github.com/marlonbarrios"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            is released under the{" "}
            <a
              href="https://opensource.org/license/mit"
              target="_blank"
              rel="noreferrer"
            >
              MIT License
            </a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
