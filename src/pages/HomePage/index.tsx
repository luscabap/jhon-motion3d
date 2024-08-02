import { Indtroduction } from "../../components/Introduction";
import { Projects } from "../../components/Projects";

export const HomePage = () => {

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Indtroduction />
      <div className="flex flex-col w-full px-5">
        <Projects />
      </div>
    </div>
  );

};
