import { motion } from "framer-motion";
import { useEffect } from "react";
import useFetchProject from "../../hooks/useFetchProjects";
import { ButtonBackHomepage } from "../../components/ButtonBackHomepage";

export const ProjectPage = () => {
  const { project, fetchProject } = useFetchProject();

  useEffect(() => {
    fetchProject()
  }, [fetchProject])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3
      }}
      className="flex flex-col gap-8 pt-48 px-4 justify-center items-start overflow-x-hidden 2xl:px-52 mb-14"
    >
      <h2 className="text-3xl font-fontContrast text-colorTextContrast">{ project?.name }</h2>
      <p className="indent-4">{project?.about}</p>
      <p>Client: {project?.client}</p>
      <h3>Softwares used:</h3>
      <ul>
        {project?.softwaresUseds.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="flex flex-col items-center justify-center gap-8 lg:gap-16 2xl:w-full">
        { project?.imagesProject.map(img => { 
          const initialScaleX = img.primary ? -100 : 100
          return (
              <motion.img 
                src={img.img} 
                key={img.id} 
                className="max-w-full lg:w-3/4 2xl:w-1/3"
                initial={{ x: initialScaleX }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 0.3
                }}
              />
            ) 
        })}
      </div>
        <ButtonBackHomepage size="normal"/>
    </motion.div>
  )
}