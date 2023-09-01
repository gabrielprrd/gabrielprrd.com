import { Switch, type SwitchProps, useColorMode } from "@chakra-ui/react";

export default function ThemeSwitcher(props: SwitchProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "light";

  return (
    <Switch
      onChange={toggleColorMode}
      isChecked={isDark}
      aria-label="Toggle theme"
      {...props}
    />
  );
}
