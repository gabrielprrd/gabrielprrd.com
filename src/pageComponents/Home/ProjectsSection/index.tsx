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
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <Flex direction="column" gap={10}>
      <Flex justifyContent="space-between" gap={4} alignItems="center">
        <Heading size="lg">Projects</Heading>
        <BorderBottomLink href="#contact-section" as={motion.a}>
          <Box>Contact me</Box>
        </BorderBottomLink>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }}>
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
