import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'white' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('trilok_theme') as ThemeMode;
      if (saved === 'white' || saved === 'dark') {
        return saved;
      }
    }
    // Default to 'white' upon user's request to change background to white/dark
    return 'white';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'white') {
      root.classList.add('theme-white', 'light');
      root.classList.remove('theme-dark', 'dark');
      root.setAttribute('data-theme', 'white');
      document.body.style.backgroundColor = '#FAF8F5';
      document.body.style.color = '#1C1917';
    } else {
      root.classList.add('theme-dark', 'dark');
      root.classList.remove('theme-white', 'light');
      root.setAttribute('data-theme', 'dark');
      document.body.style.backgroundColor = '#0C0A09';
      document.body.style.color = '#EBE5DA';
    }
    localStorage.setItem('trilok_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'white' ? 'dark' : 'white'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
