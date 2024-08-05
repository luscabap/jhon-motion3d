import { useNavigate } from "react-router-dom"
import logo from "/logo.png"

export const Logo = () => {
  const navigate = useNavigate()
  return (
    <img src={logo} alt="Jhonmotion 3D logo" className="w-1/2 cursor-pointer lg:w-1/3 2xl:w-1/3 " onClick={() => navigate("/")}/>
  )
}