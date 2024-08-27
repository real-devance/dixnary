import { useThemeContext } from '../../../context/ThemeContext';

function ToggleThemeBtn() {
  const { theme, toggleTheme } = useThemeContext(); // Get the current theme and toggle function

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        name="toggle theme"
        type="checkbox"
        checked={theme === 'light' ? false : true} // Determine if checkbox is checked
        onChange={() => toggleTheme()} // Toggle theme on change
        className="sr-only peer" 
        aria-label="Toggle theme" 
      />
      <div
        className="relative 
        w-10 h-5  bg-gray-400 
        rounded-full
        peer-checked:after:translate-x-5 
        peer-checked:after:border-white
        after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white
        after:border-gray-300 after:border 
        after:rounded-full 
        after:h-4 after:w-4 
        after:transition-all
        dark:border-gray-800 peer-checked:bg-primary-color"
      ></div>
    </label>
  );
}

export default ToggleThemeBtn;
