import Image from "next/image";
import { Suspense } from "react";
import {
  ProjectCards,
  ProjectCardsFallback,
} from "@/components/project-cards";
import { getWorkImages } from "@/lib/works";

async function PictureGrid() {
  const images = await getWorkImages();
  if (images.length === 0) return null;

  return (
    <div className="pictures">
      {images.map((image, index) => (
        <figure className="picture" key={image.src}>
          <div className="frame">
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              priority={index < 2}
            />
          </div>
          <figcaption>{image.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="home">
      <p className="kicker">Projects</p>
      <p className="lede">
        A living archive of pieces, applications, performances, and conceptual
        nodes and more.
      </p>
      <Suspense fallback={null}>
        <PictureGrid />
      </Suspense>
      <section id="projects">
        <Suspense fallback={<ProjectCardsFallback />}>
          <ProjectCards />
        </Suspense>
      </section>
    </div>
  );
}
