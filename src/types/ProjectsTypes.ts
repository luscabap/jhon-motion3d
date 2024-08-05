type imagesProjectProps = {
  id: string,
  img: string
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