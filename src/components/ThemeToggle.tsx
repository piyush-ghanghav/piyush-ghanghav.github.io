import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      {theme === 'light' ? (
        <Moon className="w-7 h-7 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="w-7 h-7 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}