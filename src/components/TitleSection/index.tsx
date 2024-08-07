type TitleSectionProps = {
  text: string
}

export const TitleSection = ({ text }: TitleSectionProps) => {
  return (
    <h2 className="text-4xl font-fontContrast text-center my-8 2xl:text-3xl">{text}</h2>
  )
}