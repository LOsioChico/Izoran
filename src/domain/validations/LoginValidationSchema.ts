import { z } from 'zod'

export const LoginValidationSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters long',
    })
    .max(20, {
      message: 'Password must be at most 20 characters long',
    }),
})

export type LoginFormValues = z.infer<typeof LoginValidationSchema>
