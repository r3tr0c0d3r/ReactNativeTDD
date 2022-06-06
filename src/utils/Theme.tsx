import React from 'react';

interface ITheme {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ITheme | null>(null);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
    const context = React.useContext(ThemeContext)
    if (!context) {
      throw new Error('useTheme should be used within a ThemeProvider')
    }
    return context
  }

export {useTheme, ThemeProvider}