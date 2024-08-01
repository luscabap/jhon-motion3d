import { useState } from "react";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { CiMenuFries } from "react-icons/ci";
import useThemeContext from "../../hooks/useThemeContext";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => {
    setMenuIsOpen(prevValue => !prevValue)
  }

  const { toggleTheme } = useThemeContext()

  return (
    <header className="fixed w-full bg-zinc-800 rounded-lg flex items-center justify-between px-2 h-36">
      <button onClick={toggleTheme} className="bg-colorContrast">TEMA</button>
      <Logo />
      <CiMenuFries size={45} onClick={toggleMenuIsOpen}/>
      {
        menuIsOpen && <Menu />
      }
    </header>
  )
}