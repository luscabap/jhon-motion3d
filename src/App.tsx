import { useState } from "react"

function App() {
  const [teste, setTeste] = useState(false)
  return (
    <div>
      <h1 className={`${teste ? "bg-red-500" : "bg-blue-500"}`}>Hello World!</h1>
      <h2>My name is Jhonathan, i'm 3D Designer</h2>
      <h4 className={`${teste ? "bg-green-400" : "bg-yellow-400"}`}>Teste to CI File</h4>
      <button onClick={() => setTeste(prevValue => !prevValue)}>Trocar cor</button>
    </div>
  )
}

export default App
