import { motion } from "framer-motion";
import { ContactSocialMedia } from "../ContactSocialMedia";
import { dataLinks } from "../../data/dataLinks";
import { Link } from "react-scroll"

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
        <motion.ul
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              y: -200,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0.2,
              damping: 10,
              stiffness: 200
            }}

          className="flex flex-col items-center justify-start h-full gap-16 my-20"
        >
          {
            dataLinks.map(link => (
              <li key={link.id}>
                <Link
                  to={link.toId}
                  spy={true}
                  smooth={true}
                  offset={-170}
                >
                  {link.name}
                </Link>
              </li>
            ))
          }
        </motion.ul>
        <ContactSocialMedia size="normal"/>
      </motion.nav>
    </motion.aside>
  );
};
