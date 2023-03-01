import * as React from 'react';

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({children}) => {
  const [themeId, setThemeId] = React.useState(1);

  const toggleTheme = (id) => {
    setThemeId(id);
  };

  return (
    <ThemeContext.Provider value={{themeId, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

