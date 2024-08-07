import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";

type ButtonBackHomepageProps = {
  size: "small" | "normal" | "large",
  text: string,
  icon: IconBaseProps,
  contrast?: boolean,
  directionPrimary?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonWithIcon = ({ size, icon, text, contrast = false, directionPrimary = true, 
  ... rest }:ButtonBackHomepageProps) => {
  const [stylesState, setStylesState] = useState({
    fontSize: "text-lg"
  })

  useEffect(() => {
    switch (size) {
      case "small":
        setStylesState({
          fontSize: "text-sm"
        })
        break;
        case "normal":
          setStylesState({
            fontSize: "text-lg"
          })
        break;
        case "large":
          setStylesState({
            fontSize: "text-2xl"
          })
        break;
    
      default:
        break;
    }
  }, [setStylesState, size])

  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 mx-auto cursor-pointer hover:text-colorTextContrast 
        ${stylesState.fontSize} 
        ${contrast 
          ? "bg-colorContrast hover:bg-colorContrastLight rounded-xl p-1" 
          : "bg-transparent"} 
        ${directionPrimary ? "flex-row" : "flex-row-reverse"}
      `}

      {... rest}
    >
      <>{icon}</>
      <h6>{text}</h6>
    </button>
  )
}