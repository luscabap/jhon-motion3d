import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export const ModalContact = () => {
  return (
    <div className="bg-colorContrast fixed right-2 bottom-24 w-3/4 flex flex-col gap-8 px-2 py-8 rounded-lg">
      <a href="https://wa.me/556798891617" target="_blank" className="flex items-center justify-start gap-2">
        <FaWhatsapp className="w-12 h-12"/>
        <h5 className="text-xl">Contact me in WhatsApp</h5>
      </a>
      <a className="flex items-center justify-start gap-2">
        <MdAlternateEmail className="w-12 h-12"/>
        <h5 className="text-xl">Contact me in E-mail</h5>
      </a>
    </div>
  )
}