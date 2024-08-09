import { useState } from "react";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

type MenuLanguageProps = {
  closeMenuLanguage: () => void
}

export const MenuLanguage = ({ closeMenuLanguage }: MenuLanguageProps) => {
  const [language, setLanguage] = useState("")

  const clickLanguage = (languageSelected: string) => {
    setLanguage(languageSelected)
    console.log(languageSelected)
    console.log(language)
    closeMenuLanguage()
  }
  return (
    <div className="bg-colorSecondary absolute top-36 left-0 w-1/3 flex flex-col items-center justify-center h-40 rounded-br-lg">
      <LiaFlagUsaSolid className="w-20 h-20" onClick={() => clickLanguage("english")}/>
      <GiBrazilFlag className="w-20 h-20" onClick={() => clickLanguage("portuguese")}/>
    </div>
  )
}