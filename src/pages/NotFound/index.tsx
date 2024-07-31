import { useNavigate } from "react-router-dom"

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <p className="text-red-400">OOOOOOOOPS! 404 :C</p>
      <h4>Page Not Found</h4>
      <button onClick={() => navigate("/")} className="bg-zinc-800 text-zinc-200">Back to homepage</button>
    </div>
  )
}