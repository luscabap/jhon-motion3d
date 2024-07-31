import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const useThemeContext = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  return {
    darkTheme,
    toggleTheme
  }
}

export default useThemeContext;