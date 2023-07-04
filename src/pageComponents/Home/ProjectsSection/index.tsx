import Link from "@/components/infra/Link";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Wrap,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

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

const projectsInfo: ProjectInfo[] = [
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
      "Headless",
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
    githubUrl: "https://github.com/gabrielprrd/gabrielprrd",
    deployedUrl: "" || undefined,
    title: "This website (portfolio)",
    description:
      "My portfolio, where I showcase projects and tell more about myself. It has features such as internationalization and dark/white theme.",
    technologies: ["Next", "React", "ChakraUi", "Zod", "react-hook-form"],
  },
];

export default function ProjectsSection() {
  return (
    <Flex direction="column" gap={10}>
      <Flex justifyContent="space-between" gap={4} alignItems="center">
        <Heading size="lg">Projects</Heading>
        <Link
          borderBottomWidth="3px"
          borderBottomColor="green"
          _hover={{ textColor: "green" }}
          fontWeight="medium"
          fontSize="md"
          paddingBottom={2}
          textTransform="uppercase"
          href="#contact-section"
        >
          Contact me
        </Link>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {projectsInfo.map((project) => (
          <Flex
            width="100%"
            height="100%"
            direction="column"
            gap={4}
            key={project.githubUrl}
          >
            <Box
              backgroundImage={`url(${project.img.src})`}
              backgroundPosition={{ base: "center", md: "initial" }}
              h="30vh"
              w="100%"
              bgSize="cover"
              bgRepeat="no-repeat"
            />
            <Flex direction="column" gap={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="md">{project.title}</Heading>
                <Link href={project.githubUrl} _hover={{ color: "green" }}>
                  <Icon as={FaGithub} height="6" w="auto" />
                </Link>
              </Flex>
              <Text size="md">{project.description}</Text>
              <Wrap gap={4}>
                {project.technologies.map((tech, index) => (
                  <Text key={`projectsSectionTechnologiesKey_${tech}_${index}`}>
                    {tech}
                  </Text>
                ))}
              </Wrap>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
