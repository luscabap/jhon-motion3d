import { useEffect, useState } from "react"
import { IoChevronBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

type ButtonBackHomepageProps = {
  size: "small" | "normal" | "large"
}

export const ButtonBackHomepage = ({ size = "normal" }:ButtonBackHomepageProps) => {
  const navigate = useNavigate();

  const [stylesState, setStylesState] = useState({
    iconSize: 18,
    fontSize: "text-lg"
  })

  useEffect(() => {
    switch (size) {
      case "small":
        setStylesState({
          iconSize: 10,
          fontSize: "text-sm"
        })
        break;
        case "normal":
          setStylesState({
            iconSize: 18,
            fontSize: "text-lg"
          })
        break;
        case "large":
          setStylesState({
            iconSize: 30,
            fontSize: "text-2xl"
          })
        break;
    
      default:
        break;
    }
  }, [setStylesState, size])

  return (
    <div className={`inline-flex items-center justify-center gap-2 mx-auto cursor-pointer hover:text-colorTextContrast ${stylesState.fontSize}`} onClick={() => navigate("/")}>
      <IoChevronBack size={stylesState.iconSize}/>
      <button >Back to homepage</button>
    </div>
  )
}