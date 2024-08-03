import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TiMessageTyping } from "react-icons/ti";
import { useState } from "react";
import { ModalContact } from "../../components/ModalContact";
import { IoCloseOutline } from "react-icons/io5";

export const BasePage = () => {
  const [modalContactIsOpen, setModalContactIsOpen] = useState(false);

  const toggleModalContactIsOpen = () => {
    setModalContactIsOpen(pv => !pv)
  }

  return (
    <main 
      className="font-fontMain min-h-screen bg-gradient-background transition-all duration-500 ease-in-out text-colorTextPrimary text-2xl"
    >
      <Header />
      <div className="bg-colorContrast right-2 bottom-2 rounded-full flex items-center justify-center p-1 fixed z-50">
        { modalContactIsOpen ? <IoCloseOutline size={50} className="w-16 h-16 text-colorTextPrimary" onClick={toggleModalContactIsOpen}/> : <TiMessageTyping size={50} className="w-16 h-16 text-colorTextPrimary" onClick={toggleModalContactIsOpen} />}
        
      </div>
      {
        modalContactIsOpen && <ModalContact />
      }
      <div className="pt-36">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}