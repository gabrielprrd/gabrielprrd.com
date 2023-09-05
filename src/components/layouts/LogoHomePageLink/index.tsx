import Link from "@/components/infra/Link";

export default function LogoHomePageLink() {
  return (
    <Link
      aria-label="Go to home page"
      href="/"
      fontSize="2xl"
      fontWeight="bold"
      textDecorationLine={"2px"}
      _hover={{ textDecoration: "underline", textDecorationColor: "green" }}
    >
      gabrielprrd
    </Link>
  );
}
