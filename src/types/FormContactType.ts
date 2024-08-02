import { z } from "zod";
import { FormSchema } from "../schemas/FormSchema";

export type FormContactTypeProps = z.infer<typeof FormSchema>
