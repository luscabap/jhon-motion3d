import { useState } from "react";
import { ProjectBanner } from "../ProjectBanner";
import { useNavigate } from "react-router-dom";

type ProjectProps = {
  name: string,
  slug: string,
  imgBanner: string,
  primary: boolean
}

export const Project = ({ imgBanner, name, primary, slug }:ProjectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative flex items-center justify-center"
      onClick={() => navigate(`/project/${slug}`)}
    >
      <div className={`bg-colorBackgroundModal absolute top-0 right-0 bottom-0 left-0 items-center justify-center rounded-lg cursor-pointer
        ${isVisible ? "flex" : "hidden"}`}
      >
        <h4>{name}</h4>
      </div>
      <ProjectBanner
        nameProject={name}
        slugProject={slug}
        srcImg={imgBanner}
        primary={primary}
      />
    </div>
  );
};
