// schemas/formSchema.ts
import * as z from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(5, "ایمیل باید حداقل ۵ حرف داشته باشد")
    .email("ایمیل نامعتبر است"),
  firstName: z
    .string()
    .min(2, "نام باید حداقل ۲ حرف باشد")
    .max(20, "نام نباید بیشتر از ۲۰ حرف باشد"),
  age: z
    .number({ invalid_type_error: "سن باید عدد باشد" })
    .min(18, "حداقل سن ۱۸ سال است"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
