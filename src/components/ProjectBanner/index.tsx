import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

type ProjectBannerProps = {
  srcImg: string,
  slugProject: string,
  nameProject: string,
  primary: boolean
}

export const ProjectBanner = ({ slugProject, srcImg, nameProject, primary }:ProjectBannerProps) => {
  const navigate = useNavigate();
  const animationX = primary ? 100 : -100
  return (
      <motion.img
        src={srcImg} 
        alt={`${nameProject} banner`} 
        onClick={() => navigate(`/project/${slugProject}`)}
        className="cursor-pointer w-full lg:w-3/4 2xl:w-1/4"
        initial={{ opacity: 0, x: animationX }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: animationX }}
        transition={{ duration: 0.5 }}
      />
  )
}