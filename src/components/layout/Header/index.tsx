import Logo from "../../ui/Logo";
import ToggleThemeBtn from "../../ui/ToggleThemeBtn";
import DarkModeIcon from "../../icons/DarkModeIcon";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between">
      {/* Logo with a link to the home page */}
      <Link to={'/'}>
        <Logo />
      </Link>

      <div className="flex gap-4 items-center">
        {/* Button to toggle between light and dark themes */}
        <ToggleThemeBtn />

        {/* Icon representing dark mode with responsive color */}
        <div className="w-8 fill-black dark:fill-white">
          <DarkModeIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
