type ErrorMessageProps = {
  text: string
}

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <p className="font-bold text-red-600">{text}</p>
  )
}