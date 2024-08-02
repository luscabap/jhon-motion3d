import { v4 as uuidv4 } from "uuid"
import { ClientTypeProps } from "../types/ClientType"

export const dataClients: ClientTypeProps[] = [
  {
    id: uuidv4(),
    name: "Motorola",
    srcImg: "/clients/motorola.png"
  },
  {
    id: uuidv4(),
    name: "Bobbi Brown",
    srcImg: "/clients/bobbi-brown.png"
  },
  {
    id: uuidv4(),
    name: "Este-Lauder",
    srcImg: "/clients/este-lauder.png"
  },
  {
    id: uuidv4(),
    name: "Fallen Store",
    srcImg: "/clients/falen.png"
  },
  {
    id: uuidv4(),
    name: "Samsung",
    srcImg: "/clients/samsung.png"
  },
  
]