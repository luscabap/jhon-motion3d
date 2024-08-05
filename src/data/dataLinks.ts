import { v4 as uuidv4 } from "uuid"
import { LinkProps } from "../types/Link"

export const dataLinks: LinkProps[] = [
  {
    id: uuidv4(),
    name: "Home",
    toId: "home"
  },
  {
    id: uuidv4(),
    name: "Projects",
    toId: "projects"
  },
  {
    id: uuidv4(),
    name: "AboutMe",
    toId: "about-me"
  },
  {
    id: uuidv4(),
    name: "Contact Me",
    toId: "contact-me"
  },
]