import BorderBottomLink from "@/components/BorderBottomLink";
import Link from "@/components/infra/Link";
import { projectsInfo } from "@/constants/projects";
import {
  BOTTOM_TOP_VARIANTS,
  NO_JS_BOTTOM_TOP_VARIANTS,
} from "@/constants/animations/bottomToTopVariants";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Wrap,
  Icon,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getAnimationVariants } from "@/utils/getAnimationVariants";
import Image from "@/components/infra/Image";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const variants = getAnimationVariants(
    BOTTOM_TOP_VARIANTS,
    NO_JS_BOTTOM_TOP_VARIANTS
  );

  return (
    <chakra.section
      id="projects-section"
      display="flex"
      flexDirection="column"
      gap={10}
    >
      <Flex justifyContent="space-between" gap={4} alignItems="center">
        <Heading size="lg">{t("home.projects.title")}</Heading>
        <BorderBottomLink
          href="#contact-section"
          as={motion.a}
          aria-label="Navigate to contact form section"
        >
          <Box>{t("common.links.contactMe")}</Box>
        </BorderBottomLink>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 16, md: 20 }}>
        {projectsInfo.map((project) => (
          <Flex
            width="100%"
            height="100%"
            direction="column"
            gap={4}
            key={project.githubUrl}
            as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            variants={variants}
            viewport={{ once: true }}
          >
            <Box h="30vh" w="full" bgSize="cover" position="relative">
              <Image
                src={project.img.src}
                alt={`${project.title}'s screenshot`}
                fill="true"
                objectFit="cover"
                marginLeft="auto"
                marginRight="auto"
                objectPosition="top"
              />
            </Box>
            <Flex direction="column" gap={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="md">{t(project.title) ?? project.title}</Heading>
                <HStack gap={5}>
                  {!!project.deployedUrl && (
                    <Link
                      href={project.deployedUrl}
                      _hover={{ color: "green" }}
                      aria-label="Navigate to project's github page"
                    >
                      <Icon as={FaExternalLinkAlt} height="5" w="auto" />
                    </Link>
                  )}

                  <Link
                    href={project.githubUrl}
                    _hover={{ color: "green" }}
                    aria-label="Navigate to project's github page"
                  >
                    <Icon as={FaGithub} height="6" w="auto" />
                  </Link>
                </HStack>
              </Flex>
              <Text size="md">{t(project.description)}</Text>
              <Wrap gap={4}>
                {project.technologies.map((tech, index) => (
                  <li key={`projectsSectionTechnologiesKey_${tech}_${index}`}>
                    <Text>{tech}</Text>
                  </li>
                ))}
              </Wrap>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </chakra.section>
  );
}
