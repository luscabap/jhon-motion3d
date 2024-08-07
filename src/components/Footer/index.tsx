import { ContactSocialMedia } from "../ContactSocialMedia"

export const Footer = () => {
  return (
    <footer 
      className="bg-colorDark text-colorLight flex flex-col items-center justify-center py-12 gap-8"
      data-testid="footer"
    >
      <p className="text-center text-lg">All rights reserved &copy; - Jhonathan Oliveira 2024</p>
      <ContactSocialMedia size="normal"/>
      <code className="text-base text-center">WebSite developed by <a href="https://portfolio-luscabap.vercel.app/" target="_blank" className="cursor-crosshair underline">Lucas Baptista</a></code>
    </footer>
  )
}