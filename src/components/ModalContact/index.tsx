import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { motion, Variants } from "framer-motion"


const itensVariants: Variants = {
  open: {
    opacity: 1,
    y: -20,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.2
    }
  }
}

export const ModalContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      variants={itensVariants}
      animate={"open"}
      exit={"closed"}
      className="bg-colorContrast fixed right-2 bottom-24 w-3/4 flex flex-col gap-8 px-2 py-8 rounded-lg z-50"
    >
      <a href="https://wa.me/556798891617" target="_blank" className="flex items-center justify-start gap-2">
        <FaWhatsapp className="w-12 h-12"/>
        <h5 className="text-xl">Contact me in WhatsApp</h5>
      </a>
      <a className="flex items-center justify-start gap-2">
        <MdAlternateEmail className="w-12 h-12"/>
        <h5 className="text-xl">Contact me in E-mail</h5>
      </a>
    </motion.div>
  )
}