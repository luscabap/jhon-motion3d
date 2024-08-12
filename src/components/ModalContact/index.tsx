import { motion, Variants } from "framer-motion";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-scroll";


type ModalContactProps = {
  pathname: string
}

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

export const ModalContact = ({ pathname }:ModalContactProps) => {

  const handleRedirectEmail = () => {
    const email = "lucasbaptistasilva.dev@gmail.com";
    const subject = "Teste";
    const body = "Essa é uma mensagem de teste"
    const linkMailTo = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(linkMailTo, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      variants={itensVariants}
      animate={"open"}
      exit={"closed"}
      className="bg-colorContrast fixed right-2 bottom-24 w-3/4 flex flex-col gap-8 px-2 py-8 rounded-lg z-50 2xl:w-1/4"
    >
      { pathname === "/"
        ? (
          <Link 
            className="flex items-center justify-start gap-2 hover:text-colorDark"
            to="emailContact"
            smooth={true}
          >
            <MdAlternateEmail className="w-12 h-12"/>
            <h5 className="text-xl cursor-pointer">Contact me in E-mail</h5>
          </Link>
        )
        : (
          <button onClick={handleRedirectEmail}>
            Send me an e-mail
          </button>
        )
      }
    </motion.div>
  )
}