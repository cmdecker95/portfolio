import * as React from "react";

export default function ThemeToggle() {
  const [text, setText] = React.useState(
    document.documentElement.classList.contains("dark") ? "Dark" : "Light",
  );

  React.useEffect(() => {
    // Set initial text based on localStorage or system preference
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setText(isDark ? "Dark" : "Light");
  }, []);

  // Update the button text when toggling
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
    setText(isDark ? "Dark" : "Light");
  };

  return (
    <button
      className="cursor-pointer rounded-full bg-zinc-200 px-4 py-2 text-sm hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      onClick={toggleTheme}
    >
      {text}
    </button>
  );
}
