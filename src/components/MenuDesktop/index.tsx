import { Link } from "react-scroll";
import { dataLinks } from "../../data/dataLinks";
import { motion } from "framer-motion"
import useFetchProject from "../../hooks/useFetchProjects";
import { useEffect } from "react";
import { MenuProject } from "../MenuProject";

type MenuDesktopProps = {
  ternaryOperator: boolean;
}

export const MenuDesktop = ({ ternaryOperator }: MenuDesktopProps) => {
  const { project, fetchProject } = useFetchProject();

  useEffect(() => {
    if(ternaryOperator){
      fetchProject()
    }
  }, [fetchProject, ternaryOperator])

  return (
    <div className="hidden 2xl:flex w-full items-center justify-center">
      <nav className="flex items-center justify-center">
        <ul className={`flex items-center justify-center ${ternaryOperator ? "flex-col gap-4 " : "flex-row gap-12"}`}>
        {ternaryOperator 
        ? <MenuProject nameProject={project?.name} />
        : dataLinks.map(link => (
              <motion.li key={link.id}
                className="cursor-pointer bg-transparent hover:bg-colorPrimary hover:rounded-lg transition-all px-1 py-2 hover:text-colorTextContrast 2xl:text-base"
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