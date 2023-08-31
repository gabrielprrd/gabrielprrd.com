import { chakra, Icon, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { CONTACT_INFO } from "@/constants/contactInfo";
import Link from "@/components/infra/Link";
import { useTranslation } from "next-i18next";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <chakra.nav>
      {/* // TODO: change icons for others svgs in order to fix accessibility */}
      <chakra.ul
        display="flex"
        alignItems="center"
        gap={3}
        listStyleType="none"
      >
        <chakra.li>
          <Tooltip label="Github" hasArrow>
            <chakra.span>
              <Link
                aria-label="Go to github profile page"
                href="https://github.com/gabrielprrd"
                _hover={{ color: "green" }}
              >
                <Icon as={FaGithub} height="7" w="auto" />
              </Link>
            </chakra.span>
          </Tooltip>
        </chakra.li>

        <chakra.li>
          <Tooltip label="Linkedin" hasArrow>
            <chakra.span>
              <Link
                aria-label="Go to linkedin profile page"
                href="https://www.linkedin.com/in/gabrielprrd/"
                _hover={{ color: "green" }}
              >
                <Icon as={FaLinkedin} height="7" w="auto" />
              </Link>
            </chakra.span>
          </Tooltip>
        </chakra.li>

        <chakra.li>
          <Tooltip label="Email" hasArrow shouldWrapChildren>
            <Link
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Send email to Gabriel"
            >
              <Icon
                _hover={{ color: "green" }}
                as={AiFillMail}
                boxSize="2.1em"
              />
            </Link>
          </Tooltip>
        </chakra.li>

        <chakra.li>
          <Tooltip label={t("common.links.phone")} hasArrow shouldWrapChildren>
            <Link
              href={`tel:${CONTACT_INFO.phone}`}
              aria-label="Call Gabriel's phone number"
            >
              <Icon
                _hover={{ color: "green" }}
                as={FaPhoneAlt}
                boxSize="1.4em"
              />
            </Link>
          </Tooltip>
        </chakra.li>
      </chakra.ul>
    </chakra.nav>
  );
}
