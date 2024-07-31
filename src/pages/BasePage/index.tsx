import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header";

export const BasePage = () => {
  return (
    <main>
      <Header />
      <div className="pt-10">
        <Outlet />
      </div>
    </main>
  )
}