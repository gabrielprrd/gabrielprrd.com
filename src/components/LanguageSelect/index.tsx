import { Select, type SelectProps } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LANGUAGES = ["en", "pt"];

export default function LanguageSelect(props: SelectProps) {
  const router = useRouter();
  const { pathname, query } = router;

  return (
    <Select
      {...props}
      variant="unstyled"
      textTransform="uppercase"
      size="xs"
      fontWeight="bold"
      defaultValue={router.locale}
      onChange={(e) =>
        router.push(
          {
            pathname,
            query,
          },
          undefined,
          { locale: e.target.value }
        )
      }
    >
      {LANGUAGES.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
