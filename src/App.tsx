import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { BasePage } from "./pages/BasePage"
import { NotFound } from "./pages/NotFound"
import ThemeProvider from "./components/ThemeProvider"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<HomePage />}/>
            <Route path="/teste" element={<div><h2>ESSE É UM TESTE</h2></div>}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
