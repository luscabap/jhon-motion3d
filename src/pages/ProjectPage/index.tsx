import { useParams } from "react-router-dom"
import { dataProjects } from "../../data/dataProjects"
import { useCallback, useEffect, useState } from "react"
import { ProjectType } from "../../types/ProjectsTypes"

export const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams();
  const [project, setProject] = useState<ProjectType>()

  const fetchProject = useCallback(async () => {
    console.log("TESTE", params.slugProject)
    const projectFinded = await dataProjects.find(item => item.slug === params.slugProject);
    setProject(projectFinded);
  }, [params])

  useEffect(() => {
    fetchProject()
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [params, fetchProject])

  { isLoading && <div>CARREGANDO...</div> }

  return (
    <div className="flex flex-col gap-6 mt-12 px-4">
      <h2 className="text-3xl font-fontContrast text-colorTextContrast">{ project?.name }</h2>
      <p className="indent-4">{project?.about}</p>
      <p>Client: {project?.client}</p>
      <h3>Softwares used:</h3>
      <ul>
        {project?.softwaresUseds.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="flex flex-col items-center justify-center gap-8">
        { project?.imagesProject.map(img => (
          <img src={img.img} key={img.id} />
        )) }
      </div>
    </div>
  )
}