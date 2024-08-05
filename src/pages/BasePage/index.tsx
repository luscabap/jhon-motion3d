import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { ModalContact } from "../../components/ModalContact";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"

export const BasePage = () => {
  const [modalContactIsOpen, setModalContactIsOpen] = useState(false);

  const toggleModalContactIsOpen = () => {
    setModalContactIsOpen((pv) => !pv);
  };

  return (
    <main className="font-fontMain min-h-screen bg-gradient-background transition-all duration-500 ease-in-out text-colorTextPrimary text-xl  ">
      <Header />
      <div className="relative bg-gradient-background">
        <div className="bg-colorContrast right-2 bottom-2 rounded-full flex items-center justify-center p-1 fixed z-50 hover:bg-colorContrastLight">
          <AnimatePresence>
            <motion.div>
              {modalContactIsOpen ? (
                <IoCloseOutline
                  className="w-16 h-16 text-colorTextPrimary cursor-pointer hover:text-colorDark"
                  onClick={toggleModalContactIsOpen}
                />
              ) : (
                <button
                  className="w-16 h-16 text-colorTextPrimary font-bold text-3xl flex justify-center items-center cursor-pointer hover:text-colorDark"
                  onClick={toggleModalContactIsOpen}
                >. . .</button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {modalContactIsOpen && <ModalContact />}
        </AnimatePresence>
        <div className="pt-36">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};
