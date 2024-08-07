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
        setIconProps({ size: 10 })
        break;
      case "normal":
        setIconProps({ size: 30 })
        break;
      case "large":
        setIconProps({ size: 50 })
        break;
      default:
        break;
    }
  }, [setIconProps, size])

  return (
    <div className="flex items-center justify-center gap-6 text-colorContrast">
      <a href="https://www.linkedin.com/in/jhonathanoliveira3d/" target="_blank"
        className="hover:text-colorContrastLight"
      >
        <FaLinkedinIn {...iconProps}/>
      </a>
      <a href="https://www.behance.net/jhonathanoliveira" target="_blank"
        className="hover:text-colorContrastLight"
      >
        <FaBehance {...iconProps}/>
      </a>
      <a href="https://wa.me/556798891617" target="_blank"
        className="hover:text-colorContrastLight"
      >
        <FaWhatsapp {...iconProps}/>
      </a>
      <a href="https://www.instagram.com/jhonmotion3d_/" target="_blank"
        className="hover:text-colorContrastLight"
      >
        <FaInstagram {...iconProps}/>
      </a>
    </div>
  );
};
