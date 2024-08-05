import { Link } from "react-scroll";
import { dataLinks } from "../../data/dataLinks";
import { motion } from "framer-motion"

export const MenuDesktop = () => {
  return (
    <div className="hidden 2xl:flex w-full items-center justify-center">
      <nav className="flex items-center justify-center">
        <ul className="flex gap-12 items-center justify-center">
        {dataLinks.map(link => (
              <motion.li key={link.id}
                className="cursor-pointer bg-transparent hover:bg-colorPrimary hover:rounded-lg transition-all px-1 py-2 hover:text-colorTextContrast"
                whileTap={{
                  scale: 1.5
                }}
              >
                <Link
                  to={link.toId}
                  spy={true}
                  smooth={true}
                  offset={-170}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
        </ul>
      </nav>
    </div>
  )
}