import Image from "next/image";
import Link from "next/link";

export function CoursesAtUf() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Courses at UF</h1>
      <p className="dek">AI and the Arts Certificate</p>
      <p className="byline">
        College of the Arts · University of Florida
      </p>

      <div className="prose">
        <p>
          I teach in the{" "}
          <a
            href="https://catalog.ufl.edu/UGRD/colleges-schools/UGART/ART_UCT10/"
            target="_blank"
            rel="noreferrer"
          >
            AI and the Arts Certificate
          </a>, offered by the{" "}
          <a href="https://arts.ufl.edu/" target="_blank" rel="noreferrer">
            College of the Arts
          </a>. The courses are asynchronous. I teach the two required
          courses.
        </p>
      </div>

      <h2>Algorithmic Creativity</h2>
      <figure className="project-figure">
        <Image
          src="/images/courses-at-uf/01-algorithmic-creativity.jpg"
          alt="A ring of black and gray spheres and radiating lines around the words Computational Creativity."
          width={1024}
          height={1024}
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
        <figcaption>Algorithmic Creativity.</figcaption>
      </figure>

      <h2>AI, Art, and Society</h2>
      <figure className="project-figure">
        <Image
          src="/images/courses-at-uf/02-ai-art-society.jpg"
          alt="Course graphic for HUM 2833, AI, Art and Society: a collage with a classical bust in a pixel visor, a person in headphones, and a raised fist."
          width={1496}
          height={1210}
          sizes="(max-width: 1120px) 100vw, 1120px"
        />
        <figcaption>AI, Art, and Society. HUM 2833.</figcaption>
      </figure>

      <p className="links">
        <a
          href="https://catalog.ufl.edu/UGRD/colleges-schools/UGART/ART_UCT10/"
          target="_blank"
          rel="noreferrer"
        >
          AI and the Arts Certificate
        </a>
      </p>
    </article>
  );
}
