import { SubmitHandler, useForm } from "react-hook-form";
import { FormContactTypeProps } from "../../types/FormContactType";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../../schemas/FormSchema";
import { ErrorMessage } from "../ErrorMessage";

export const FormContact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormContactTypeProps>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormContactTypeProps> = (e) => {
    console.log(e);
      reset({
        about: "",
        email: "",
        message: "",
        name: ""
      })
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center my-8 gap-6"
    >
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-4">
          <label htmlFor="nameField">Enter your name</label>
          <input
            className="border-none bg-colorSecondary rounded-md py-2 px-3"
            id="nameFiel"
            {...register("name")}
            placeholder="Name"
          />
          {errors.name?.message && (
            <ErrorMessage text={errors?.name?.message} />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="emailField">Enter your email</label>
          <input
            className="border-none bg-colorSecondary rounded-md py-2 px-3"
            id="emailFiel"
            {...register("email")}
            placeholder="E-mail"
          />
          {errors.email?.message && (
            <ErrorMessage text={errors?.email?.message} />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="aboutField">Enter about message</label>
          <input
            className="border-none bg-colorSecondary rounded-md py-2 px-3"
            id="aboutFiel"
            {...register("about")}
            placeholder="About"
          />
          {errors.about?.message && (
            <ErrorMessage text={errors?.about?.message} />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="messageField">Enter your message</label>
          <input
            className="border-none bg-colorSecondary rounded-md py-2 px-3"
            id="messageFiel"
            {...register("message")}
            placeholder="Message"
          />
          {errors.message?.message && (
            <ErrorMessage text={errors?.message?.message} />
          )}
        </div>
      </div>

      <button type="submit" className="bg-colorContrast px-2 py-4 rounded-2xl">
        Send E-mail
      </button>
    </form>
  );
};
