import { useCallback, useState } from "react"
import { dataProjects } from "../data/dataProjects"
import { useParams } from "react-router-dom"
import { ProjectType } from "../types/ProjectsTypes";

const useFetchProject = () => {
  const params = useParams();
  const [project, setProject] = useState<ProjectType>()

  const fetchProject = useCallback(async () => {
    const projectFinded = dataProjects.find(item => item.slug === params.slugProject);
    setProject(projectFinded);
  }, [params])

  return {
    project,
    fetchProject
  }
}

export default useFetchProject;