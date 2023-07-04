import { FORM_ERROR_MESSAGES } from "@/constants/formErrorMessages";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.required)
    .max(40, { message: FORM_ERROR_MESSAGES.tooLong })
    .trim(),
  email: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.required)
    .max(40, { message: FORM_ERROR_MESSAGES.tooLong })
    .email({ message: "Sorry. Wrong email format." })
    .trim(),
  message: z
    .string()
    .nonempty(FORM_ERROR_MESSAGES.required)
    .max(10000, { message: FORM_ERROR_MESSAGES.tooLong })
    .trim(),
});

interface ObjectKeys {
  [key: string]: string;
}

export interface ContactData extends ObjectKeys {
  name: string;
  email: string;
  message: string;
}
