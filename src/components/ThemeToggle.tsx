export default function ThemeToggle() {
  return (
    <button
      className="absolute top-0 right-0 m-4 cursor-pointer rounded bg-gray-200 p-2 dark:bg-gray-800"
      onClick={() => {
        const html = document.documentElement;
        const isDark = html.classList.toggle("dark");
        localStorage.theme = isDark ? "dark" : "light";
      }}
    >
      Theme
    </button>
  );
}
