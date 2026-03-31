// import { createContext, useContext, useEffect, useState } from "react";

// // create context
// const ThemeContext = createContext();

// // custom hook (easy access)
// export const useTheme = () => useContext(ThemeContext);

// // provider component
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   // load saved theme
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   }, []);

//   // update theme
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // toggle function
//   const toggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { createContext, useContext, useEffect, useState } from "react";

// create context
const ThemeContext = createContext();

// custom hook (easy access)
export const useTheme = () => useContext(ThemeContext);

// provider component
export const ThemeProvider = ({ children }) => {
  // default theme is 'dark' now
  const [theme, setTheme] = useState("dark");

  // load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // set default 'dark' on first load
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // update theme on change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};