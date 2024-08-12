import { IconBaseProps } from "react-icons";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import useCopyClipboard from "../../hooks/useCopyClipboard";
import { MdAlternateEmail } from "react-icons/md";

type ButtonClipboard = {
  text: string,
  infoToClipboard: string,
  icon?: IconBaseProps
}

export const ButtonClipboard = ({ infoToClipboard, text, icon =  <FaRegCopy />}:ButtonClipboard) => {

  const { copyToClipboard, isCopied } = useCopyClipboard()

  return (
    <button 
      onClick={() => copyToClipboard(infoToClipboard)} 
      className="relative inline-flex justify-center items-center gap-1 pr-6"
    >
      <MdAlternateEmail className="w-12 h-12"/>
      <span>{text}</span>
      <button className="text-colorContrastLight absolute right-0 top-0">
        { isCopied
          ? <FaCheck />
          : <>{icon}</>
        }
      </button>
    </button>
  )
}