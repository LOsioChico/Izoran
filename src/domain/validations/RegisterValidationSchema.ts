import { z } from 'zod'

export const RegisterValidationSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  username: z
    .string()
    .min(3, {
      message: 'Username must be at least 3 characters long',
    })
    .max(20, {
      message: 'Username must be at most 20 characters long',
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

export type RegisterFormValues = z.infer<typeof RegisterValidationSchema>
