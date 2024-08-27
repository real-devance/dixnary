import DictionaryIcon from '../../icons/DictionaryIcon';

function Logo() {
  return (
    <div className="flex items-center gap-1">
      {/* Icon with responsive width and theme-based fill color */}
      <div className="w-8 md:w-10 lg:w-12 fill-black dark:fill-white">
        <DictionaryIcon />
      </div>

      {/* Logo text with responsive size and theme-based color */}
      <div className="font-inconsolata text-base/none md:text-lg/none lg:text-xl/none font-bold text-black dark:text-white">
        <p>Dix</p>
        <p>Nary</p>
      </div>
    </div>
  );
}

export default Logo;
