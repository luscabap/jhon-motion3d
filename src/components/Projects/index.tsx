import { useTranslation } from "react-i18next";
import { dataProjects } from "../../data/dataProjects";
import { ProjectBanner } from "../ProjectBanner";
import { TitleSection } from "../TitleSection";

export const Projects = () => {

  const { t } = useTranslation()

  return (
    <section className="overflow-x-hidden" id="projects">
      <TitleSection text={t("projectsTitle")} />
      <div className="flex flex-col items-center justify-center gap-12 lg:gap-12 2xl:flex-row flex-wrap">
        {dataProjects.map((project) => (
          <ProjectBanner
            nameProject={project.name}
            slugProject={project.slug}
            srcImg={project.imgBanner}
            key={project.id}
            primary={project.primary}
          />
        ))}
      </div>
    </section>
  );
};
