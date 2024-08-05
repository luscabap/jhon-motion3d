import { AboutMe } from "../../components/AboutMe";
import { Contact } from "../../components/Contact";
import { Indtroduction } from "../../components/Introduction";
import { Projects } from "../../components/Projects";

export const HomePage = () => {
  return (
    <div className="relative" id="home">
      <Indtroduction />
      <div className="flex flex-col items-center justify-start min-h-screen gap-12 relative bg-gradient-background">
        <div className="flex flex-col w-full px-5 2xl:px-52">
          <Projects />
          <AboutMe />
          <Contact />
        </div>
      </div>
    </div>
  );
};
