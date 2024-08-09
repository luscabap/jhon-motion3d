import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoCloseOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalContact } from "../../components/ModalContact";

export const BasePage = () => {
  const { i18n: { changeLanguage } } = useTranslation()

  const [modalContactIsOpen, setModalContactIsOpen] = useState(false);

  const toggleModalContactIsOpen = () => {
    setModalContactIsOpen((pv) => !pv);
  };

  const handleToggleLanguage = (lang: "en" | "pt") => {
    changeLanguage(lang)
  }

  return (
    <main className="font-fontMain min-h-screen bg-gradient-background transition-all duration-500 ease-in-out text-colorTextPrimary text-xl 2xl:text-lg">
      <Header handleToggleLanguage={handleToggleLanguage}/>
      <div className="relative bg-gradient-background">
        <div className="bg-colorContrast right-3 bottom-3 rounded-full flex items-center justify-center p-1 fixed z-50 hover:bg-colorContrastLight">
          <AnimatePresence>
            <motion.div>
              {modalContactIsOpen ? (
                <IoCloseOutline
                  className="w-14 h-14 text-colorTextPrimary cursor-pointer hover:text-colorDark"
                  onClick={toggleModalContactIsOpen}
                />
              ) : (
                <button
                  className="w-14 h-14 text-colorTextPrimary font-bold text-3xl flex justify-center items-center cursor-pointer hover:text-colorDark"
                  onClick={toggleModalContactIsOpen}
                >. . .</button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {modalContactIsOpen && <ModalContact />}
        </AnimatePresence>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};
