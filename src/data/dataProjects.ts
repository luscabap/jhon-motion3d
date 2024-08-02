import { v4 as uuidv4 } from "uuid"
import { ProjectType } from "../types/ProjectsTypes"

export const dataProjects: ProjectType[]  = [
  {
    id: uuidv4(),
    imgBanner: "/projects/creme/banner.png",
    slug: "creme-empresa",
    name: "Creme Project",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    client: "Client Example",
    softwaresUseds: [
      "Cinema4D",
      "Blender"
    ],
    imagesProject: [
     {
      id: uuidv4(),
      img: "/projects/creme/asset1.png"
    },
     {
      id: uuidv4(),
      img: "/projects/creme/asset2.png"
    },
     {
      id: uuidv4(),
      img: "/projects/creme/asset3.png"
    },
    ]
  },
]