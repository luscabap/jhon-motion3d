import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import useThemeContext from "../../hooks/useThemeContext";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { FaMoon, FaSun } from "react-icons/fa";
import { MenuDesktop } from "../MenuDesktop";
import { useParams } from "react-router-dom";
import { MdOutlineTranslate } from "react-icons/md";
import { MenuLanguage } from "../MenuLanguage";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => {
    setMenuIsOpen(pv => !pv)
  }

  const params = useParams()
  const ternaryOperator = params.slugProject ? true : false;

  const { toggleTheme, darkTheme } = useThemeContext()

  const [modalLanguageIsOpen, setModalLanguageIsOpen] = useState(false);

  const closeMenuLanguage = () => {
    setModalLanguageIsOpen(false)
  }

  const toggleModalLanguageIsOpen = () => {
    setModalLanguageIsOpen(pv => !pv)
  }

  return (
    <header className={`fixed w-full ${menuIsOpen ? "bg-colorPrimary" : "bg-colorSecondary"} flex items-center justify-between px-2 h-36 z-50 2xl:px-8`}>
      <div className="2xl:w-1/3 flex items-center justify-center gap-4 w-1/5">
        {
          darkTheme ? <FaSun onClick={toggleTheme} className="cursor-pointer w-12 h-12 2xl:w-6 2xl:h-6"/> : <FaMoon onClick={toggleTheme} className="cursor-pointer w-12 h-12 2xl:w-6 2xl:h-6"/>
        }
        <MdOutlineTranslate className="cursor-pointer w-12 h-12 2xl:w-6 2xl:h-6" onClick={toggleModalLanguageIsOpen}/>
        {
          modalLanguageIsOpen && <MenuLanguage closeMenuLanguage={closeMenuLanguage}/>
        }
      </div>

      <MenuDesktop ternaryOperator={ternaryOperator}/>
      <div className="flex justify-center items-center 2xl:w-1/3 2xl:justify-end w-full">
        <Logo />
      </div>
      <div className="2xl:hidden w-1/5 flex items-center justify-end">
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
      </div>
    </header>
  )
}