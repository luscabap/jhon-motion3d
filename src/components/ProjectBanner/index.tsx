import { motion } from "framer-motion";

type ProjectBannerProps = {
  srcImg: string,
  slugProject: string,
  nameProject: string,
  primary: boolean
}

export const ProjectBanner = ({ srcImg, nameProject, primary }:ProjectBannerProps) => {
  const animationX = primary ? 100 : -100;

  return (
      <div>
        <motion.img
          src={srcImg} 
          alt={`${nameProject} banner`}
          className="cursor-pointer w-full lg:w-3/4 2xl:w-full 2xl:max-h-80 shadow-2xl rounded-lg mx-auto"
          initial={{ opacity: 0, x: animationX }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: animationX }}
          transition={{ duration: 0.5 }}
        />
      </div>
  )
}