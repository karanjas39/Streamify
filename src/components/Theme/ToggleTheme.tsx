"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/components/Theme/ThemeProvider";

import { Button } from "@/components/ui/button";

export function ThemeToggler({ button = true }: { button?: boolean }) {
  const { setTheme, theme } = useTheme();

  if (!button) {
    return (
      <>
        {theme === "light" ? (
          <SunIcon onClick={() => setTheme("dark")} className="w-5 h-5" />
        ) : (
          <MoonIcon onClick={() => setTheme("light")} className="w-5 h-5" />
        )}
      </>
    );
  }

  return (
    <>
      {theme === "light" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem]" />
        </Button>
      )}
    </>
  );
}
