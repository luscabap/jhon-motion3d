import { IoChevronBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { ButtonWithIcon } from "../ButtonWithIcon"


type MenuProjectProps = {
  nameProject: string | undefined,
}

export const MenuProject = ({ nameProject }: MenuProjectProps) => {
  const navigate = useNavigate()

  return (
    <>
      <li className="text-colorTextContrast text-2xl">{nameProject}</li>
      <li onClick={() => navigate("/")} className="text-xs cursor-pointer">
        <ButtonWithIcon 
          size="small"
          text="Back to homepage"
          icon={<IoChevronBack />}
          onClick={() => navigate("/")}
        />
      </li>
    </>
  )
}