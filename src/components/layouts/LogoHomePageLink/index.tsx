import Link from "@/components/infra/Link";
import { Text } from "@chakra-ui/react";

export default function LogoHomePageLink() {
  return (
    <Link
      aria-label="Go to home page"
      href="/"
      borderBottomColor="green"
      _hover={{ borderBottomWidth: 2 }}
      style={{ textDecoration: "none" }}
    >
      <Text fontSize="2xl" fontWeight="bold" textDecoration="none">
        gabrielprrd
      </Text>
    </Link>
  );
}
