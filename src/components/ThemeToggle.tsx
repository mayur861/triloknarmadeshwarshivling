import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'pill' | 'compact';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', variant = 'pill' }) => {
  const { theme, setTheme, toggleTheme } = useTheme();

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`p-2 rounded-full border transition-all duration-200 flex items-center justify-center cursor-pointer ${
          theme === 'white'
            ? 'bg-[#F0EBE1] text-[#B8860B] border-[#D8CFBF] hover:bg-[#E8E1D3]'
            : 'bg-[#1A1713] text-[#D4AF37] border-[#2E261D] hover:bg-[#261F19]'
        } ${className}`}
        title={`${theme === 'white' ? 'डार्क' : 'लाइट'} थीम पर बदलें`}
        aria-label={`${theme === 'white' ? 'डार्क' : 'लाइट'} थीम पर बदलें`}
      >
        {theme === 'white' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full border transition-all select-none ${
        theme === 'white'
          ? 'bg-[#F2ECE1] border-[#DDD5C7] shadow-inner'
          : 'bg-[#14110E] border-[#2E261D] shadow-inner'
      } ${className}`}
      role="group"
      aria-label="पृष्ठभूमि थीम चुनें"
    >
      {/* Light / White Button */}
      <button
        type="button"
        onClick={() => setTheme('white')}
        className={`flex items-center space-x-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
          theme === 'white'
            ? 'bg-white text-[#1C1917] shadow-sm border border-[#D4AF37]/50 font-extrabold'
            : 'text-[#8A8175] hover:text-[#C7BFB4]'
        }`}
        aria-pressed={theme === 'white'}
      >
        <Sun className={`w-3.5 h-3.5 ${theme === 'white' ? 'text-[#B8860B]' : 'text-current'}`} />
        <span>लाइट</span>
      </button>

      {/* Dark Button */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`flex items-center space-x-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
          theme === 'dark'
            ? 'bg-[#241F1A] text-[#D4AF37] shadow-sm border border-[#D4AF37]/50 font-extrabold'
            : 'text-[#8A8175] hover:text-[#1C1917]'
        }`}
        aria-pressed={theme === 'dark'}
      >
        <Moon className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-current'}`} />
        <span>डार्क</span>
      </button>
    </div>
  );
};
