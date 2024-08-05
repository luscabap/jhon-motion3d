type imagesProjectProps = {
  id: string,
  img: string,
  primary: boolean
}

export type ProjectType = {
  id: string,
  imgBanner: string,
  slug: string,
  name: string,
  about: string,
  client: string,
  primary: boolean,
  softwaresUseds: string[],
  imagesProject: imagesProjectProps[]
}