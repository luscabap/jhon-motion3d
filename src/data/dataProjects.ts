import { v4 as uuidv4 } from "uuid"
import { ProjectType } from "../types/ProjectsTypes"

export const dataProjects: ProjectType[]  = [ 
  {
    id: uuidv4(),
    imgBanner: "/projects/apple/banner.gif",
    slug: "apple",
    name: "Apple Project",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    client: "Client Example",
    softwaresUseds: [
      "Cinema4D",
      "Blender"
    ],
    primary: true,
    imagesProject: [
     {
      id: uuidv4(),
      img: "/projects/apple/asset1.jpg"
    },
     {
      id: uuidv4(),
      img: "/projects/apple/asset2.jpg"
    },
     {
      id: uuidv4(),
      img: "/projects/apple/asset3.jpg"
    },
    ]
  },
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
    primary: false,
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
  {
    id: uuidv4(),
    imgBanner: "/projects/razer/banner.png",
    slug: "razer",
    name: "Razer Kraken Project",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    client: "Razer",
    softwaresUseds: [
      "Cinema4D",
      "Blender"
    ],
    primary: true,
    imagesProject: [
     {
      id: uuidv4(),
      img: "/projects/razer/asset1.png"
    },
     {
      id: uuidv4(),
      img: "/projects/razer/asset2.png"
    },
     {
      id: uuidv4(),
      img: "/projects/razer/asset3.png"
    },
    ]
  },
  {
    id: uuidv4(),
    imgBanner: "/projects/air-jordan/banner.png",
    slug: "air-jordan",
    name: "Air Jordan Project",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    client: "Nike",
    softwaresUseds: [
      "Cinema4D",
      "Blender"
    ],
    primary: false,
    imagesProject: [
     {
      id: uuidv4(),
      img: "/projects/air-jordan/asset1.png"
    },
     {
      id: uuidv4(),
      img: "/projects/air-jordan/asset2.png"
    },
    {
      id: uuidv4(),
      img: "/projects/air-jordan/asset3.png"
    },
    {
      id: uuidv4(),
      img: "/projects/air-jordan/asset4.png"
    },
    {
      id: uuidv4(),
      img: "/projects/air-jordan/asset5.png"
    },
    {
      id: uuidv4(),
      img: "/projects/air-jordan/asset6.png"
    },
    ]
  },
  {
    id: uuidv4(),
    imgBanner: "/projects/rtx/banner.jpg",
    slug: "rtx",
    name: "RTX 4090 Project",
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    client: "NVidia",
    softwaresUseds: [
      "Cinema4D",
      "Blender"
    ],
    primary: true,
    imagesProject: [
     {
      id: uuidv4(),
      img: "/projects/rtx/asset1.jpg"
    },
     {
      id: uuidv4(),
      img: "/projects/rtx/asset2.jpg"
    },
     {
      id: uuidv4(),
      img: "/projects/rtx/asset3.jpg"
    },
    ]
  },
]