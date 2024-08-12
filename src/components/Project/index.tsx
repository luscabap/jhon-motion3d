import { useState } from "react";
import { ProjectBanner } from "../ProjectBanner";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type ProjectProps = {
  name: string;
  slug: string;
  imgBanner: string;
  primary: boolean;
};

export const Project = ({ imgBanner, name, primary, slug }: ProjectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative flex items-center justify-center"
      onClick={() => navigate(`/project/${slug}`)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.1 }}
            className={`bg-colorBackgroundModal absolute top-0 right-0 bottom-0 left-0 items-center justify-center rounded-lg cursor-pointer
                ${isVisible ? "flex" : "hidden"}`}
          >
            <h4 className="text-colorLight">{name}</h4>
          </motion.div>
        )}
      </AnimatePresence>
      <ProjectBanner
        nameProject={name}
        slugProject={slug}
        srcImg={imgBanner}
        primary={primary}
      />
    </motion.div>
  );
};
