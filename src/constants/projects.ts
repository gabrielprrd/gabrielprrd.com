interface ProjectInfo {
  img: {
    alt: string;
    src: string;
  };
  githubUrl: string;
  deployedUrl?: string;
  title: string;
  description: string;
  technologies: string[];
}

export const projectsInfo: ProjectInfo[] = [
  {
    img: {
      src: "/assets/images/home/projects/designo.png",
      alt: "Designo homepage screenshot",
    },
    githubUrl: "https://github.com/gabrielprrd/designo",
    deployedUrl: "" || undefined,
    title: "Designo",
    description:
      "A 7 pages long responsive institutional website with form validation.",
    technologies: [
      "Next.js",
      "React",
      "HeadlessUi",
      "TailwindCSS",
      "react-hook-form",
      "Zod",
    ],
  },
  {
    img: {
      src: "/assets/images/home/projects/kanban.png",
      alt: "Kanban screenshot",
    },
    githubUrl: "https://github.com/gabrielprrd/kanban-task-management",
    deployedUrl: "" || undefined,
    title: "Kanban Task Management",
    description:
      "Fullstack app which users can authenticate and manage kanban boards, including columns, tasks and subtasks.",
    technologies: [
      "TRPC",
      "Prisma",
      "MySQL",
      "Zustand",
      "Zod",
      "Next.js",
      "React",
      "ChakraUi",
      "Formik",
      "react-query",
    ],
  },
  {
    img: {
      src: "/assets/images/home/projects/password-generator.png",
      alt: "Password generator's page screenshot",
    },
    githubUrl: "https://github.com/gabrielprrd/password-generator",
    deployedUrl: "" || undefined,
    title: "Password Generator",
    description:
      "Simple web app to generate custom password based on user's input.",
    technologies: ["Next.js", "React", "ChakraUi"],
  },
  {
    img: {
      src: "/assets/images/home/projects/personal-portfolio.png",
      alt: "Password generator's page screenshot",
    },
    githubUrl: "https://github.com/gabrielprrd/gabrielprrd.com",
    deployedUrl: "" || undefined,
    title: "This website (portfolio)",
    description:
      "My portfolio, where I showcase projects and tell more about myself. It has features such as internationalization and dark/white theme.",
    technologies: [
      "Next",
      "React",
      "ChakraUi",
      "Framer Motion",
      "Zod",
      "react-hook-form",
    ],
  },
];
