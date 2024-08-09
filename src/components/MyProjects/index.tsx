import { useTranslation } from "react-i18next";
import { dataProjects } from "../../data/dataProjects";
import { Project } from "../Project";
import { TitleSection } from "../TitleSection";

export const MyProjects = () => {

  const { t } = useTranslation()

  return (
    <section className="overflow-x-hidden" id="projects">
      <TitleSection text={t("projectsTitle")} />
      <div className="flex flex-col items-center justify-center gap-12 lg:gap-12 2xl:flex-row flex-wrap">
        {dataProjects.map((project) => (
          <Project 
            imgBanner={project.imgBanner}
            name={project.name}
            primary={project.primary}
            slug={project.slug}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};
