import { useEffect, useState } from "react";
import {
  FaLinkedinIn,
  FaBehance,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

type ContactSocialMediaProps = {
  size: "small" | "normal" | "large"
}

export const ContactSocialMedia = ({ size }:ContactSocialMediaProps) => {

  const [iconProps, setIconProps] = useState({
    size: 40
  })

  useEffect(() => {
    switch (size) {
      case "small":
        setIconProps({ size: 20 })
        break;
      case "normal":
        setIconProps({ size: 40 })
        break;
      case "large":
        setIconProps({ size: 60 })
        break;
      default:
        break;
    }
  }, [setIconProps, size])

  return (
    <div className="flex items-center justify-center gap-6 text-colorContrast">
      <a href="https://www.linkedin.com/in/jhonathanoliveira3d/" target="_blank"
        className="hover:text-colorPrimary"
      >
        <FaLinkedinIn {...iconProps}/>
      </a>
      <a href="https://www.behance.net/jhonathanoliveira" target="_blank"
        className="hover:text-colorPrimary"
      >
        <FaBehance {...iconProps}/>
      </a>
      <a href="https://wa.me/556798891617" target="_blank"
        className="hover:text-colorPrimary"
      >
        <FaWhatsapp {...iconProps}/>
      </a>
      <a href="https://www.instagram.com/jhonmotion3d_/" target="_blank"
        className="hover:text-colorPrimary"
      >
        <FaInstagram {...iconProps}/>
      </a>
    </div>
  );
};
