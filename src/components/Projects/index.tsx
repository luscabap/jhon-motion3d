import { dataProjects } from "../../data/dataProjects"
import { ProjectBanner } from "../ProjectBanner"
import { TitleSection } from "../TitleSection"

export const Projects = () => {
  return (
    <section className="">
      <TitleSection text="Projects"/>
      <div>
        { dataProjects.map(project => (
          <ProjectBanner 
            nameProject={project.name}
            slugProject={project.slug}
            srcImg={project.imgBanner}
            key={project.id}
          />
        )) }
      </div>
    </section>
  )
}