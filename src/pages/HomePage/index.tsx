import { TitleSection } from "../../components/TitleSection";

export const HomePage = () => {

  return (
    <div className="text-2xl">
      <h1>Hello, i'm Jhonathan Motion3D</h1>
      <h2 className="text-colorTextPrimary">Color Text Primary</h2>
      <h2 className="text-colorTextSecondary">Color Text Secondary</h2>
      <h2 className="text-colorTextContrast">Color Text Contrast</h2>
      <h2 className="bg-colorPrimary">Color Primary</h2>
      <h2 className="bg-colorSecondary">Color Secondary</h2>
      <h2 className="bg-colorTerciary">Color Terciary</h2>
      <TitleSection text="About me"/>
    </div>
  );

};
