import { SubmitHandler, useForm } from "react-hook-form"
import { FormContactTypeProps } from "../types/FormContactType"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema } from "../schemas/FormSchema"
import { useState } from "react"

const useFormContact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormContactTypeProps>({
    resolver: zodResolver(FormSchema)
  })

  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const closeModalSuccess = () => {
    setIsSuccessMessage(false)
  }

  const onSubmit: SubmitHandler<FormContactTypeProps> = (data) => {
    console.log(data);

    // const teamplateForm = {
    //   from_name: data.name,
    //   from_about: data.about,
    //   from_message: data.message,
    //   from_email: data.email
    // }

    // emailjs.send(
    //   "id_serviço",
    //   "id_teamplate",
    //   teamplateForm,
    //   "id_publicoperfil"
    // )

    reset({
      about: "",
      email: "",
      message: "",
      name: ""
    })

    setIsSuccessMessage(true)
    setTimeout(() => {
      setIsSuccessMessage(false)
    }, 5000)
  }

  return {
    register, errors, handleSubmit, onSubmit, isSuccessMessage, closeModalSuccess
  }
}

export default useFormContact;