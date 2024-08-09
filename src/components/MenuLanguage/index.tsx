import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { motion } from "framer-motion"

type MenuLanguageProps = {
  closeMenuLanguage: () => void,
  handleToggleLanguage: (lang: "en" | "pt") => void
}


export const MenuLanguage = ({ closeMenuLanguage, handleToggleLanguage }: MenuLanguageProps) => {

  const handleClickFlag = (lang: "en" | "pt") => {
    handleToggleLanguage(lang),
    closeMenuLanguage()
  }

  return (
    <motion.div 
      className="bg-colorSecondary absolute top-36 left-0 w-1/3 flex flex-col items-center justify-center h-40 rounded-br-lg origin-top-left"
      initial={{
        scale: 0.1,
        opacity: 0.1
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      exit={{
        scale: 0.1,
        opacity: 0.1
      }}
      transition={{
        duration: 0.2
      }}
    >
      <LiaFlagUsaSolid className="w-20 h-20" onClick={() => handleClickFlag("en")}/>
      <GiBrazilFlag className="w-20 h-20" onClick={() => handleClickFlag("pt")}/>
    </motion.div>
  )
}