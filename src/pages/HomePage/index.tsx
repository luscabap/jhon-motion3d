import { useState } from "react";
import useThemeContext from "../../hooks/useThemeContext";

export const HomePage = () => {
  const [teste, setTeste] = useState(false);

  const { darkTheme, toggleTheme } = useThemeContext()

  return (
    <div className="bg-zinc-500">
      <h1>Home Page - TESTEEEE</h1>
      <div className="bg-green-400">{ darkTheme ? "TRUE" : "FALSE" }</div>
      <button onClick={toggleTheme} className="bg-colorPrimary">Trocar tema</button>
      <div>
        <h1 className={`${teste ? "bg-red-500" : "bg-blue-500"}`}>
          Hello World!
        </h1>
        <h2>My name is Jhonathan, i'm 3D Designer</h2>
        <h4 className={`${teste ? "bg-green-400" : "bg-yellow-400"}`}>
          Teste to CI File
        </h4>
        <button onClick={() => setTeste((prevValue) => !prevValue)}>
          Trocar cor
        </button>
      </div>
    </div>
  );
};
