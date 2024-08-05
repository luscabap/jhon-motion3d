import { AnimatePresence } from "framer-motion";
import useFormContact from "../../hooks/useFormContact";
import { ErrorMessage } from "../ErrorMessage";
import { ModalSuccess } from "../ModalSuccess";

export const FormContact = () => {
  const { errors, handleSubmit, onSubmit, register, isSuccessMessage, closeModalSuccess } = useFormContact();

  return (
    <div className="relative">
    <AnimatePresence>
      { isSuccessMessage && <ModalSuccess closeModalSuccess={closeModalSuccess}/> }
    </AnimatePresence>
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
    </div>
  );
};
