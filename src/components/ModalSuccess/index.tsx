import { motion } from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import logoesktop from "/logo_desktop.png";

type ModalSuccessProps = {
  closeModalSuccess: () => void;
};

export const ModalSuccess = ({ closeModalSuccess }: ModalSuccessProps) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: 0.1,
      }}
      exit={{ opacity: 0 }}
      className="absolute bg-colorBackgroundModal right-0 left-0 top-0 bottom-0 flex items-center justify-center
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{ opacity: 0 }}
        className="bg-colorLight text-colorDark relative flex flex-col items-center justify-end rounded-lg h-3/4
        2xl:justify-center 2xl:w-1/2
        "
      >
        <IoMdCloseCircle
          className="absolute right-1 top-1 w-10 h-10 cursor-pointer"
          onClick={closeModalSuccess}
        />
        <div className="flex items-center justify-center flex-col">
          <h3>Successful Sending the Email</h3>
          <h4>We will be in touch</h4>
          <MdMarkEmailRead className="w-10 h-10 text-colorContrast" />
        </div>
        <img
          src={logoesktop}
          alt="Jhonathan Oliveira's Logo"
          className="self-end 2xl:w-1/3 2xl:mx-auto"
        />
      </motion.div>
    </motion.div>
  );
};
