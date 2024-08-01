export const Menu = () => {
  return (
    <aside className="absolute right-0 top-36 bg-colorPrimary w-full">
      <nav className="h-full">
        <ul className="flex flex-col items-center justify-start h-full gap-16 my-20">
          <li className="text-4xl">Home</li>
          <li className="text-4xl">About Me</li>
          <li className="text-4xl">Knowledge</li>
          <li className="text-4xl">Projects</li>
          <li className="text-4xl">Contact</li>
        </ul>
      </nav>
    </aside>
  )
}