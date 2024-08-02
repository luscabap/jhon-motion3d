import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const BasePage = () => {
  return (
    <main 
      className="font-fontMain min-h-screen bg-gradient-background transition-all duration-500 ease-in-out text-colorTextPrimary text-2xl"
    >
      <Header />
      <div className="pt-36">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}