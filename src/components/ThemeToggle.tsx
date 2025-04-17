import * as React from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Set initial state based on localStorage or system preference
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkMode);

    // Ensure the class is applied to document
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  // Update the theme when toggling
  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = html.classList.toggle("dark");
    localStorage.theme = newIsDark ? "dark" : "light";
    setIsDark(newIsDark);
  };
  return (
    <button
      className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-200 text-8xl hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <i className="fa-solid fa-moon" />
      ) : (
        <i className="fa-solid fa-sun-bright" />
      )}
    </button>
  );
}
