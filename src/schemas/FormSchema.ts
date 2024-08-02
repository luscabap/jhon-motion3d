import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, { message: "The name field is required" }),
  email: z.string().min(1, { message: "The e-mail field is required" }).email("Plese, enter a valid e-mail"),
  about: z.string().min(3, { message: "The about field is required" }),
  message: z.string().min(1, { message: "The message field is required" }),
})