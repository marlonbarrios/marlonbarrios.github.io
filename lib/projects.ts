export type Project = {
  slug: string;
  title: string;
  line?: string;
  lineHref?: string;
  summary?: string;
  href?: string;
  hrefLabel?: string;
  aboutHref?: string;
  series?: {
    caption: string;
    credit: string;
    cover: string;
  };
  imageDir?: string;
  imageDirs?: string[];
};

export const projects: Project[] = [
  {
    slug: "hybrid-intelligences",
    title: "Hybrid Intelligences",
    line: "Research project",
    summary:
      "A three-year research project I lead, and a hybrid tool for dynamic knowledge. I launched it in summer 2026 at the University of Florida.",
    href: "https://marlonbarrios.github.io/hybrid_intelligences_viz/index.html",
    hrefLabel: "Open the project site",
  },
  {
    slug: "born-in-latent-space",
    title: "Born in Latent Space",
    line: "Lecture-performance",
    summary:
      "A live, embodied encounter with generative AI through voice, movement, storytelling, singing, and real-time audiovisual composition. Human and machine processes co-compose thinking in real time.",
    aboutHref: "/about#born-in-latent-space",
    series: {
      caption:
        "Lecture-performance during a residency at the School of Theatre and Dance, University of Florida, March 2026.",
      credit:
        "Photographs © Center for Arts, Migration, and Entrepreneurship (CAME).",
      cover:
        "/images/born-in-latent-space/uf/03-10-26_marlon-sotd-masterclass-performance-2.jpg",
    },
  },
  {
    slug: "bauhaus-time-traveler",
    title: "Bauhaus Time Traveler",
    line: "Part of Born in Latent Space",
    lineHref: "/projects/born-in-latent-space",
    summary:
      "One of the first apps I developed, in 2024, and part of Born in Latent Space. The webcam is transformed in real time, from turbo models through a fal.ai grant, to Stream Diffusion and Daydream, and then to a version that runs as local AI.",
    imageDir: "born-in-latent-space/uf",
  },
  {
    slug: "unstable-landscapes",
    title: "UnstableLandscapes",
    line: "Distributed environment",
    summary:
      "A procedural ecology I have been developing since 1997. Performances, installations, and lecture-experiments in which cognition is distributed across bodies, codes, and environments.",
    aboutHref: "/about#unstable-landscapes",
  },
  {
    slug: "tectonics-of-otherness",
    title: "The Tectonics of Otherness",
    line: "Residency and installation",
    summary:
      "I initiated this with María Luisa Angulo during Beyond Gravity at DIPOD / Theater im Depot, Dortmund, October 2025. A Synthetic Media Space, ongoing.",
    href: "https://marlonbarrios.github.io/tectonics_of-_otherness/",
    hrefLabel: "Open the project site",
  },
  {
    slug: "dark-enlightenment",
    title: "Dark Enlightenment",
    line: "A rave within synthetic media",
    summary:
      "Techno-republics and Other Vectors. Songs composed with AI in Suno became the music of the rave, dancing within the storm at Theater im Depot, Dortmund, October 2025.",
  },
  {
    slug: "tangerine-dreams",
    title: "Tangerine Dreams",
    line: "Installation",
    summary:
      "I premiered the prototype in January 2026 at Afrofuturism Week. A version with an open-source large language model, focused on human-centered AI and developed through focus groups, premieres in April 2027 at the Cade Museum in Gainesville.",
  },
  {
    slug: "interactive-generative-videos",
    title: "Interactive Generative Videos",
    summary:
      "Relentless Epistemic Acts, a single-channel video installation. Image, sound, and automation, performed by hand or given over to the system.",
  },
  {
    slug: "proteans",
    title: "Proteans",
    line: "“There is always someone for you… in the future”",
    summary:
      "A single-channel video installation I made. Ten time travelers from the future, each seeking to date someone from our present or their past. Imagery and text made in the app Proteus.",
  },
  {
    slug: "embodied-creative-facilitation",
    title: "Embodied Creative Facilitation",
    line: "Choreographic Coding Lab and Digital Bodies",
    summary:
      "Contexts for collaboration, mainly yearly. What is presented here are the contexts I have been invited to facilitate: the Choreographic Coding Lab, and Digital Bodies at Lake Studios Berlin.",
    imageDirs: ["choreographic-coding-lab", "lake-studios-berlin"],
  },
  {
    slug: "laboratory-of-synthetic-meaning",
    title: "Laboratory of Synthetic Meaning",
    line: "Starting October 2025",
    summary:
      "A series of minimal apps I have been making since October 2025. Gesture, face, real-time voice, and text, with large language models used as material and drawn as form in the browser.",
  },
  {
    slug: "local-ai",
    title: "Local AI",
    line: "Within Laboratory of Synthetic Meaning",
    lineHref: "/projects/laboratory-of-synthetic-meaning",
    summary:
      "Research into running language models on the machine in front of you. So far: My LatentWelt, Semantic Tensegrities, I Am Not Saying, Machine Forgetting, and El Inmigrante, which live within Laboratory of Synthetic Meaning, and Bauhaus Time Traveler, part of Born in Latent Space. The ontology is part of this research.",
  },
  {
    slug: "synthetic-unconscious",
    title: "Synthetic Unconscious",
    line: "Ongoing, from October 2026",
    summary:
      "I began this in October 2026. Thematic Apperception and Rorschach images given to language and video models, in dialogue with research on model introspection and the social tendencies those models have learned.",
  },
  {
    slug: "time-instances",
    title: "Time Instances",
    line: "Small Gestures of Becoming",
    summary:
      "A computational installation of twenty live generative systems, each on its own screen. Minimal geometry, sound, and procedures that perform time.",
  },
  {
    slug: "in-pursuit-of-stolen-ghosts",
    title: "In Pursuit of Stolen Ghosts",
    line: "Duet in Latent Space",
    summary:
      "I developed this during a residency at Lake Studios Berlin, February 2024. Latent space as a metaphor for what is remembered, distorted, and re-generated.",
  },
  {
    slug: "canonical",
    title: "Canonical",
    line: "Part of Born in Latent Space",
    lineHref: "/projects/born-in-latent-space",
    summary:
      "A metalogical structure for performance of presence. An interactive grid of webcam snapshots, part of Born in Latent Space. It has become a practice of presence and coupling with a computational device, and a metaphor of memory.",
    href: "https://marlonbarrios.github.io/canonical01/",
    hrefLabel: "Open the live app",
  },
  {
    slug: "my-house-is-your-house",
    title: "My House Is Your House",
    line: "A generative cityscape for Detroit techno",
    summary:
      "An immersive audiovisual piece. A generative cityscape answers the music in real time, in homage to techno’s origins in Detroit. The prototype was made for Afrofuturism Week 2026.",
    href: "https://marlonbarrios.github.io/detroit/",
    hrefLabel: "Open the live app",
  },
  {
    slug: "pseudo-ouroboros",
    title: "Pseudo Ouroboros",
    line: "The genesis of self-interest in gradient descent",
    summary:
      "A snake-like organism that renews itself as it moves. The path comes from noise and simple rules, and the sound changes with the creature and with the time of day.",
    href: "https://marlonbarrios.github.io/pseudo_ouroboros/",
    hrefLabel: "Open the live app",
  },
  {
    slug: "futurama",
    title: "Futurama",
    line: "1956, upscaled",
    summary:
      "A video-dance I made in 2003 at 320 × 240, from Design for Dreaming (1956), and later upscaled with AI. The first piece in Dancing for Technology, in homage to Tad Tadlock.",
  },
  {
    slug: "extraordinary-alien",
    title: "Extraordinary Alien",
    line: "Part of Born in Latent Space",
    lineHref: "/projects/born-in-latent-space",
    summary:
      "Extraordinary Alien was the name for my green card application. It became an allegory of extraordinariness, and of being taken or not taken by the United States as a valuable artist. A soft-body creature answers the hand. Part of Born in Latent Space.",
    href: "https://marlonbarrios.github.io/extraordinary_alien2/",
    hrefLabel: "Open the live app",
  },
  {
    slug: "proximities",
    title: "Proximities",
    line: "Interactive image and sound",
    summary:
      "Two apps for interactive image and sound. Instrumental Proximities tracks the face and the hands. Body Proximities tracks the hands, the center of the body, and the extremities of the legs. I use them sometimes in Born in Latent Space, to generate a sense of intimacy through the face, the lips, and the nearness of the hands.",
  },
  {
    slug: "body-multi-tracker",
    title: "Body Multi-Tracker",
    line: "An app to track from one to four bodies, and to send different kinds of data",
    summary:
      "An app to track from one to four bodies, and to send different kinds of data. Chosen points can go out as MIDI or as OSC. It runs in the browser, on the machine in front of you.",
    href: "https://marlonbarrios.github.io/body_multi_tracker_to_midi/",
    hrefLabel: "Open the live app",
  },
  {
    slug: "digressions-in-latent-space",
    title: "Digressions in Latent Space",
    line: "Album",
    summary:
      "An electronic experimental album I made with recording tools and generative AI, alongside the lecture-performance Duets in Latent Space.",
    href: "https://marlonbarriossolano.bandcamp.com/album/digressions-in-latent-space",
    hrefLabel: "Listen on Bandcamp",
  },
  {
    slug: "interviews-press-writings",
    title: "Diffusion",
    line: "Writings, press, media, and publications",
    summary:
      "Essays from Hybrid Intelligences, book chapters, interviews, and press, including the BBWCXR catalog.",
  },
  {
    slug: "lake-studios-berlin",
    title: "Lake Studios Berlin",
    line: "Dance research and residency center",
    summary:
      "Second-generation founding member of LAKE Studios Berlin, the Lakies. I contributed to the residency model and the vision of the space for artistic research and exchange, especially where dance meets technology. I continue as a researcher in residence, and facilitate Digital Bodies there as part of Embodied Creative Facilitation.",
  },
  {
    slug: "courses-at-uf",
    title: "Courses at UF",
    line: "AI and the Arts Certificate",
    summary:
      "I teach Algorithmic Creativity and AI, Art, and Society, asynchronous courses in the AI and the Arts Certificate, offered by the College of the Arts.",
  },
  {
    slug: "dance-tech",
    title: "Dance-tech Project",
    line: "dance-tech.net",
    summary:
      "I started the first social network for practitioners of dance and movement working with digital technologies, in 2007. The interviews, movimiento.org, and an archive now in progress.",
  },
  {
    slug: "unstable-landscapes-2003",
    title: "UnstableLandscapes",
    line: "2003–2008",
    summary:
      "Interactive performances I programmed mostly in Max/MSP/Jitter. Improvisational dance, interactivity, and real-time processing. Low-resolution video documentation.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
