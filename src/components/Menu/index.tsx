import { motion } from "framer-motion";
import { ContactSocialMedia } from "../ContactSocialMedia";

export const Menu = () => {
  const menuVariants = {
    initial: {
      scaleY: 0,
      opacity: 0.5
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itensVariants = {
    initial: {
      y: "5vh",
      transition: {
        duration: 0.4
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.aside
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute right-0 top-36 bg-colorPrimary w-full origin-top-right py-8 z-40"
    >
      <motion.nav
        variants={itensVariants}
        initial="initial"
        animate="open"
        className="z-40"
      >
        <ul className="flex flex-col items-center justify-start h-full gap-16 my-20">
          <li className="text-4xl">Home</li>
          <li className="text-4xl">About Me</li>
          <li className="text-4xl">Knowledge</li>
          <li className="text-4xl">Projects</li>
          <li className="text-4xl">Contact</li>
        </ul>
        <ContactSocialMedia size="normal"/>
      </motion.nav>
    </motion.aside>
  );
};
