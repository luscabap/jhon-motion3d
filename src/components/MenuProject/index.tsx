import { useNavigate } from "react-router-dom"
import { ButtonBackHomepage } from "../ButtonBackHomepage"

type MenuProjectProps = {
  nameProject: string | undefined,
}

export const MenuProject = ({ nameProject }: MenuProjectProps) => {
  const navigate = useNavigate()

  return (
    <>
      <li className="text-colorTextContrast text-2xl">{nameProject}</li>
      <li onClick={() => navigate("/")} className="text-xs cursor-pointer">
        <ButtonBackHomepage size="small"/>
      </li>
    </>
  )
}