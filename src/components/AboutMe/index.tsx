import jhonathan from "/jhonathan.png";
import { TitleSection } from "../TitleSection";
import { CarouselClients } from "../CarouselClients";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <motion.section
      className="w-full flex flex-col gap-8"
      id="about-me"
    >
      <TitleSection text="About Me"/>
      <motion.img 
        src={jhonathan} alt="Jhonathan photo" className="w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3
        }}
      />
      <motion.div 
        className="flex flex-col w-full px-5 gap-8"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5
        }}
      >
        <h4 className="text-3xl text-colorTextContrast font-fontContrast">Hi, I'm Jhonathan Oliveira</h4>
        <p className="indent-5">A brazilian 3D designer who embarked on this journey in 2019, exploring the CGI universe. Over the year, i've honed my skills in <span className="text-colorTextContrast">Cinema 4D, Redshift and Octane Render</span>. Currently, I'm immersed in Houdini, but loving the challenges and the laughs that come with learning.</p>
        <p className="indent-5">I started as a Generalist in studios in Brazil and, in 2021, I became a full-time freelancer, fosusing on 3D animation and Lookdev. <span className="text-colorTextContrast">I'm open to messages at any time, looking forward to new ideas, challenges and, of course, good laughs!</span> Thank you for appreciating my work, done with dedication and creativity.
        </p>
      </motion.div>
      <CarouselClients />
    </motion.section>
  )
}