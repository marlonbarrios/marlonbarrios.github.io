import { ProjectCardList } from "@/components/project-card-list";
import { projects } from "@/lib/projects";
import { listProjectImageSrcs } from "@/lib/works";

export function ProjectCardsFallback() {
  return (
    <ProjectCardList
      cards={projects.map((project) => ({
        slug: project.slug,
        title: project.title,
        line: project.line,
        lineHref: project.lineHref,
        images: [],
      }))}
    />
  );
}

export async function ProjectCards() {
  const cards = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    line: project.line,
    lineHref: project.lineHref,
        images: (project.imageDirs ?? [
          project.imageDir ?? project.slug,
        ]).flatMap((dir) => listProjectImageSrcs(dir)),
  }));
  return <ProjectCardList cards={cards} />;
}
