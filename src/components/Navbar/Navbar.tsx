import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeToggler } from "../Theme/ToggleTheme";

function Navbar() {
  return (
    <div className="w-full px-3 py-1 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/icon.png" alt="Logo" className="w-[20px]" />
        <p className="text-lg font-bold">Streamify</p>
      </div>
      <div className="flex items-center gap-2">
        <a href="https://github.com/karanjas39/Streamify" target="_blank">
          <GitHubLogoIcon className="w-5 h-5" />
        </a>
        <ThemeToggler />
      </div>
    </div>
  );
}

export default Navbar;
