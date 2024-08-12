import { useState } from "react"

const useCopyClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (contentToCopy: string) => {
    try {
      await navigator.clipboard.writeText(contentToCopy);
      setIsCopied(true);
    } catch (error) {
      setIsCopied(false);
      console.log(error);
    }
  }

  return {
    isCopied,
    copyToClipboard
  }
}

export default useCopyClipboard;