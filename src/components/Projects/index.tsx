import { dataProjects } from "../../data/dataProjects"
import { ProjectBanner } from "../ProjectBanner"
import { TitleSection } from "../TitleSection"

export const Projects = () => {
  return (
    <section className="overflow-x-hidden">
      <TitleSection text="Projects"/>
      <div className="flex flex-col items-cneter justify-center gap-12">
        { dataProjects.map(project => (
          <ProjectBanner 
            nameProject={project.name}
            slugProject={project.slug}
            srcImg={project.imgBanner}
            key={project.id}
            primary={project.primary}
          />
        )) }
      </div>
    </section>
  )
}