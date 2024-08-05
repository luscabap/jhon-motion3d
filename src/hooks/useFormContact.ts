import { SubmitHandler, useForm } from "react-hook-form"
import { FormContactTypeProps } from "../types/FormContactType"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema } from "../schemas/FormSchema"

const useFormContact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormContactTypeProps>({
    resolver: zodResolver(FormSchema)
  })

  const onSubmit: SubmitHandler<FormContactTypeProps> = (e) => {
    console.log(e);

    reset({
      about: "",
      email: "",
      message: "",
      name: ""
    })
  }

  return {
    register, errors, handleSubmit, onSubmit
  }
}

export default useFormContact;