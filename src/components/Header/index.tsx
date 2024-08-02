import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import useThemeContext from "../../hooks/useThemeContext";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { FaMoon, FaSun } from "react-icons/fa";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => {
    setMenuIsOpen(prevValue => !prevValue)
  }

  const { toggleTheme, darkTheme } = useThemeContext()

  return (
    <header className={`fixed w-full ${menuIsOpen ? "bg-colorPrimary" : "bg-colorSecondary"} flex items-center justify-between px-2 h-36`}>
      {
        darkTheme ? <FaSun onClick={toggleTheme} size={45} className="cursor-pointer"/> : <FaMoon onClick={toggleTheme} size={45} className="cursor-pointer"/>
      }



      <Logo />
 
        {
          menuIsOpen 
          ? <IoCloseOutline size={45} onClick={toggleMenuIsOpen} className="cursor-pointer"/>
          : <CiMenuFries size={45} onClick={toggleMenuIsOpen} className="cursor-pointer"/>
        }
        
      <AnimatePresence>
        {
          menuIsOpen && <Menu />
        }
      </AnimatePresence>
    </header>
  )
}