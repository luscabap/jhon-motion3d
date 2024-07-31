import { createContext, useEffect, useState } from "react"

type ThemeContextProps = {
  darkTheme: boolean,
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevValue => !prevValue);
  }

  const themeOperator = darkTheme ? "dark" : "light";

  useEffect(() => {
    document.body.classList.add(themeOperator)
    return () => {
      document.body.classList.remove(themeOperator)
    }
  }, [themeOperator])

  return (
    <ThemeContext.Provider value={{ darkTheme,  toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;