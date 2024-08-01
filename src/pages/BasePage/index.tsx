import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header";

export const BasePage = () => {
  return (
    <main className="font-fontMain min-h-screen bg-gradient-background transition-all duration-500 ease-in-out">
      <Header />
      <div className="pt-10">
        <Outlet />
      </div>
    </main>
  )
}