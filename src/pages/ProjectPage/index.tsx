import { motion } from "framer-motion";
import { useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import useFetchProject from "../../hooks/useFetchProjects";
import { useNavigate } from "react-router-dom";

export const ProjectPage = () => {
  const { project, fetchProject } = useFetchProject();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProject()
  }, [fetchProject])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5
      }}
      className="flex flex-col gap-8 mt-12 px-4 justify-center items-start"
    >
      <h2 className="text-3xl font-fontContrast text-colorTextContrast">{ project?.name }</h2>
      <p className="indent-4">{project?.about}</p>
      <p>Client: {project?.client}</p>
      <h3>Softwares used:</h3>
      <ul>
        {project?.softwaresUseds.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="flex flex-col items-center justify-center gap-8">
        { project?.imagesProject.map(img => (
          <img src={img.img} key={img.id} className="max-w-full"/>
        )) }
      </div>
      <div className="inline-flex items-center justify-center gap-2 mx-auto cursor-pointer" onClick={() => navigate("/")}>
        <IoChevronBack />
        <button>Back to homepage</button>
      </div>

    </motion.div>
  )
}