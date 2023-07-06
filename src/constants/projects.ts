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
    description: "home.projects.designo.description",
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
    description: "home.projects.kanban.description",
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
    description: "home.projects.passwordGenerator.description",
    technologies: ["Next.js", "React", "ChakraUi"],
  },
  {
    img: {
      src: "/assets/images/home/projects/personal-portfolio.png",
      alt: "Password generator's page screenshot",
    },
    githubUrl: "https://github.com/gabrielprrd/gabrielprrd.com",
    deployedUrl: "" || undefined,
    title: "home.projects.portfolio.title",
    description: "home.projects.portfolio.description",
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
