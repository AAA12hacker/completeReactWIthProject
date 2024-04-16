import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

// another way to write the context api it's not optimized
// import React, { createContext, useContext, useState } from "react";

// // Create context
// const ThemeContext = createContext();

// // Theme provider component
// const ThemeProvider = ({ children }) => {
//   const [themeMode, setThemeMode] = useState("light");

//   // Function to set light theme
//   const lightTheme = () => {
//     setThemeMode("light");
//   };

//   // Function to set dark theme
//   const darkTheme = () => {
//     setThemeMode("dark");
//   };

//   return (
//     <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook to use theme context
// const useTheme = () => useContext(ThemeContext);

// export { ThemeProvider, useTheme };
