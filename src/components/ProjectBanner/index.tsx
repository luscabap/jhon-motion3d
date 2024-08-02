import { useNavigate } from "react-router-dom"

type ProjectBannerProps = {
  srcImg: string,
  slugProject: string,
  nameProject: string
}

export const ProjectBanner = ({ slugProject, srcImg, nameProject }:ProjectBannerProps) => {
  const navigate = useNavigate();

  return (
      <img
        src={srcImg} 
        alt={`${nameProject} banner`} 
        onClick={() => navigate(`/project/${slugProject}`)}
        className="cursor-pointer w-full"
      />
  )
}