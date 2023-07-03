import { z } from 'zod'

export const EmailValidationSchema = z.object({
  email: z.string().email(),
})

export type EmailFormValues = z.infer<typeof EmailValidationSchema>
