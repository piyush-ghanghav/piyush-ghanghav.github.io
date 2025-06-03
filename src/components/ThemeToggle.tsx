import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg  transition-colors"
    >
      {theme === 'light' ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </button>
  );
}