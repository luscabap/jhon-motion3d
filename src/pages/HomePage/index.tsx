import { AboutMe } from "../../components/AboutMe";
import { Contact } from "../../components/Contact";
import { Projects } from "../../components/Projects";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-12">
      <div className="flex flex-col w-full px-5">
        <Projects />
      </div>
      <AboutMe />
      <div className="flex flex-col w-full px-5">
        <Contact />
      </div>
    </div>
  );
};
