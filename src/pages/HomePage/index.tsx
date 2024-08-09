import { AboutMe } from "../../components/AboutMe";
import { CarouselClients } from "../../components/CarouselClients";
import { Contact } from "../../components/Contact";
import { Indtroduction } from "../../components/Introduction";
import { MyProjects } from "../../components/MyProjects";

export const HomePage = () => {
  return (
    <div className="relative" id="home">
      <Indtroduction />
      <div className="flex flex-col items-center justify-start min-h-screen gap-12 relative bg-gradient-background mt-36">
        <div className="flex flex-col w-full px-5 2xl:px-52">
          <MyProjects />
          <AboutMe />
        </div>
        <div className="w-full">
          <CarouselClients />
        </div>
        <div className="flex flex-col w-full px-5 2xl:px-52">
          <Contact />
        </div >
      </div>
    </div>
  );
};
