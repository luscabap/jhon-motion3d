import { useNavigate } from "react-router-dom"

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="pt-36">
      <div className="min-h-svh flex flex-col items-center justify-center gap-4 text-2xl">
        <p className="text-red-400">OOOPS! :C</p>
        <h3 className="text-4xl">Error 404</h3>
        <h4>Not Found Page </h4>
        <h6 className="text-center">Please, click in the button and back to the HomePage.</h6>
        <button onClick={() => navigate("/")} className="bg-colorDark rounded-lg text-zinc-200 p-4">Back to homepage</button>
      </div>
    </div>
  )
}