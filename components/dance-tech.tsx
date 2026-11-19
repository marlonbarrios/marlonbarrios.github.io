import Link from "next/link";

const playlist = "PLC2ijZ2U-avjaMdcbRdwy1SB11f1qEvOg";

export function DanceTech() {
  return (
    <article className="project">
      <p className="kicker">
        <Link href="/">Projects</Link>
      </p>
      <h1>Dance-tech Project</h1>
      <p className="dek">dance-tech.net</p>
      <p className="byline">
        Begun 2007 · Archive in progress
      </p>

      <div className="prose">
        <p>
          This page is still in progress. It will be updated with news of the
          relaunch, and of the archiving of sections of the project.
        </p>
        <p>
          In 2007 I started{" "}
          <a href="https://www.dance-tech.net/" target="_blank" rel="noreferrer">
            dance-tech.net
          </a>, the first social network for practitioners of dance and movement
          who were working with digital technologies. The approach was broad.
          From that network I also made{" "}
          <a href="https://movimiento.org/" target="_blank" rel="noreferrer">
            movimiento.org
          </a>, in Spanish and Portuguese, with the Red Suramericana de Danza,
          idanca.net, and Associação Cultural Panorama. dance-tech.net is in
          the process of being archived. The project is an important part of
          the history of dance and technology. I wrote that story in{" "}
          <a
            href="https://docs.google.com/document/d/1zHljU1ltgcoGIxQlTvS9Qey4JVN3wy3CtwHWY5xRQ_c/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            The Dance-tech Project: How like a Network
          </a>, an essay in{" "}
          <em>Transmission in Motion: The Technologizing of Dance</em>, edited
          by Maaike Bleeker.
        </p>
        <p>
          A central part of my work was making the dance-tech
          interviews, more than 200 of them, which I published from the network. A
          selection is in the playlist below.
        </p>
        <p>
          Important hubs of the network were the collaboration with{" "}
          <a href="https://www.panoramafestival.com/" target="_blank" rel="noreferrer">
            Festival Panorama
          </a>{" "}
          in Rio de Janeiro, the{" "}
          <a href="https://www.gillesjobin.com/" target="_blank" rel="noreferrer">
            Gilles Jobin Company
          </a>{" "}
          in Switzerland, and the Forsythe Company at{" "}
          <a href="https://www.hellerau.org/" target="_blank" rel="noreferrer">
            Hellerau
          </a>{" "}
          in Dresden. At the same time,{" "}
          <a href="https://www.hzt-berlin.de/" target="_blank" rel="noreferrer">
            HZT Berlin
          </a>{" "}
          supported the work. There I taught network
          environments for performance and dance pedagogy.
        </p>
        <p>
          I made{" "}
          <a
            href="https://www.panoramafestival.com/equipe-6/"
            target="_blank"
            rel="noreferrer"
          >
            Panorama Aumentado
          </a>{" "}
          for Festival Panorama de Dança in Rio de Janeiro in 2012, with my
          concept and direction. It was the first augmented-reality app
          deployed in a dance festival.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/ICnJq47PzsY"
            title="Instalação Panorama Aumentado at Centro do Festival, Largo das Artes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Instalação Panorama Aumentado at Centro do Festival, Largo das Artes.{" "}
          <a
            href="https://www.youtube.com/watch?v=ICnJq47PzsY"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <div className="prose">
        <p>
          <a
            href="https://www.batesdancefestival.org/the-first-pilot-for-meta-academy-brings-the-jam-online/"
            target="_blank"
            rel="noreferrer"
          >
            Meta Academy
          </a>{" "}
          asked what network environments, and the internet, can do for the
          transmission of embodied knowledge. The 2013 pilot, Minded Motion
          Lab, was held with Bates Dance Festival. Nancy Stark Smith was the
          guest, and the lab worked from her Underscore, a practice of
          improvisation. I facilitated it with Rachel
          Boggia and Josephine Dorado.
        </p>
      </div>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/BFWRF0WXkAs"
            title="Nancy Stark Smith teaches Mini Solo Underscore, Meta Academy at Bates, 2013"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Nancy Stark Smith teaches “Mini Solo Underscore,” Embodied Activity
          #2, Meta Academy at Bates, 2013.{" "}
          <a
            href="https://www.youtube.com/watch?v=BFWRF0WXkAs"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </figure>

      <figure className="video">
        <div className="video-frame">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${playlist}`}
            title="Dance-tech.net Interviews selection"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption>
          Dance-tech.net Interviews selection.{" "}
          <a
            href={`https://www.youtube.com/playlist?list=${playlist}`}
            target="_blank"
            rel="noreferrer"
          >
            Open the playlist
          </a>
        </figcaption>
      </figure>

      <p className="links">
        <a href="https://www.dance-tech.net/" target="_blank" rel="noreferrer">
          dance-tech.net
        </a>
        <a href="https://movimiento.org/" target="_blank" rel="noreferrer">
          movimiento.org
        </a>
      </p>
    </article>
  );
}
