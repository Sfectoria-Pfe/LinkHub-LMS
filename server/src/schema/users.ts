import { z } from "zod";

export const SignUpSchema = z.object({
  fname: z.string().nonempty(),
  lname: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(6),
});
