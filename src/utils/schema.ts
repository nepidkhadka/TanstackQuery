import { z } from "zod";

export const userSignUpFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(10, { message: "Password must be at least 10 characters long" }),
    confirmPassword: z
      .string()
      .min(10, { message: "Password must be at least 10 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], //can be connected to any field
  });

export type userSignUpFormType = z.infer<typeof userSignUpFormSchema>;

// we can also export default values
// export const defaultValue: UserForm = {
//   email: "",
//   name: "",
// };
