import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BornInLatentSpace } from "@/components/born-in-latent-space";
import { BauhausTimeTraveler } from "@/components/bauhaus-time-traveler";
import { DigressionsInLatentSpace } from "@/components/digressions-in-latent-space";
import { HybridIntelligences } from "@/components/hybrid-intelligences";
import { UnstableLandscapes } from "@/components/unstable-landscapes";
import { UnstableLandscapes2003 } from "@/components/unstable-landscapes-2003";
import { TectonicsOfOtherness } from "@/components/tectonics-of-otherness";
import { DarkEnlightenment } from "@/components/dark-enlightenment";
import { TangerineDreams } from "@/components/tangerine-dreams";
import { EmbodiedCreativeFacilitation } from "@/components/embodied-creative-facilitation";
import { SyntheticUnconscious } from "@/components/synthetic-unconscious";
import { LaboratoryOfSyntheticMeaning } from "@/components/laboratory-of-synthetic-meaning";
import { LocalAI } from "@/components/local-ai";
import { TimeInstances } from "@/components/time-instances";
import { InPursuitOfStolenGhosts } from "@/components/in-pursuit-of-stolen-ghosts";
import { Canonical } from "@/components/canonical";
import { MyHouseIsYourHouse } from "@/components/my-house-is-your-house";
import { PseudoOuroboros } from "@/components/pseudo-ouroboros";
import { Futurama } from "@/components/futurama";
import { ExtraordinaryAlien } from "@/components/extraordinary-alien";
import { Proximities } from "@/components/proximities";
import { BodyMultiTracker } from "@/components/body-multi-tracker";
import { InterviewsPressWritings } from "@/components/interviews-press-writings";
import { InteractiveGenerativeVideos } from "@/components/interactive-generative-videos";
import { Proteans } from "@/components/proteans";
import { CoursesAtUf } from "@/components/courses-at-uf";
import { DanceTech } from "@/components/dance-tech";
import { LakeStudiosBerlin } from "@/components/lake-studios-berlin";
import { PhotoSeries } from "@/components/photo-series";
import { getProject, projects } from "@/lib/projects";
import { getProjectImages } from "@/lib/works";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary ?? project.line ?? project.title,
  };
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<p className="kicker">Projects</p>}>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  if (slug === "born-in-latent-space") {
    return <BornInLatentSpace />;
  }

  if (slug === "bauhaus-time-traveler") {
    return <BauhausTimeTraveler />;
  }

  if (slug === "digressions-in-latent-space") {
    return <DigressionsInLatentSpace />;
  }

  if (slug === "hybrid-intelligences") {
    return <HybridIntelligences />;
  }

  if (slug === "unstable-landscapes") {
    return <UnstableLandscapes />;
  }

  if (slug === "unstable-landscapes-2003") {
    return <UnstableLandscapes2003 />;
  }

  if (slug === "tectonics-of-otherness") {
    return <TectonicsOfOtherness />;
  }

  if (slug === "dark-enlightenment") {
    return <DarkEnlightenment />;
  }

  if (slug === "tangerine-dreams") {
    return <TangerineDreams />;
  }

  if (slug === "embodied-creative-facilitation") {
    return <EmbodiedCreativeFacilitation />;
  }

  if (slug === "synthetic-unconscious") {
    return <SyntheticUnconscious />;
  }

  if (slug === "laboratory-of-synthetic-meaning") {
    return <LaboratoryOfSyntheticMeaning />;
  }

  if (slug === "local-ai") {
    return <LocalAI />;
  }

  if (slug === "time-instances") {
    return <TimeInstances />;
  }

  if (slug === "in-pursuit-of-stolen-ghosts") {
    return <InPursuitOfStolenGhosts />;
  }

  if (slug === "canonical") {
    return <Canonical />;
  }

  if (slug === "my-house-is-your-house") {
    return <MyHouseIsYourHouse />;
  }

  if (slug === "pseudo-ouroboros") {
    return <PseudoOuroboros />;
  }

  if (slug === "futurama") {
    return <Futurama />;
  }

  if (slug === "extraordinary-alien") {
    return <ExtraordinaryAlien />;
  }

  if (slug === "proximities") {
    return <Proximities />;
  }

  if (slug === "body-multi-tracker") {
    return <BodyMultiTracker />;
  }

  if (slug === "interviews-press-writings") {
    return <InterviewsPressWritings />;
  }

  if (slug === "interactive-generative-videos") {
    return <InteractiveGenerativeVideos />;
  }

  if (slug === "proteans") {
    return <Proteans />;
  }

  if (slug === "courses-at-uf") {
    return <CoursesAtUf />;
  }

  if (slug === "dance-tech") {
    return <DanceTech />;
  }

  if (slug === "lake-studios-berlin") {
    return <LakeStudiosBerlin />;
  }

  const images = await getProjectImages(slug);

  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>{project.title}</h1>
      {project.summary ? <p className="summary">{project.summary}</p> : null}
      {project.href || project.aboutHref ? (
        <p className="links">
          {project.aboutHref ? (
            <Link href={project.aboutHref}>Read in About</Link>
          ) : null}
          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer">
              {project.hrefLabel ?? "Open"}
            </a>
          ) : null}
        </p>
      ) : null}
      {images.length > 0 && project.series ? (
        <PhotoSeries
          caption={project.series.caption}
          credit={project.series.credit}
          images={images.map((image, imageIndex) => ({
            src: image.src,
            width: image.width,
            height: image.height,
            alt: `${project.title}, photograph ${imageIndex + 1} of ${images.length}`,
          }))}
        />
      ) : images.length > 0 ? (
        <div className="pictures">
          {images.map((image, imageIndex) => (
            <figure className="picture" key={image.src}>
              <div className="frame">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  priority={imageIndex === 0}
                />
              </div>
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </article>
  );
}
