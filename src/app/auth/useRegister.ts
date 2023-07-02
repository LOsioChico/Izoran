import { authService, type SignUp } from '@/auth'
import {
  RegisterValidationSchema,
  type RegisterFormValues,
} from '@/domain/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useForm,
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form'

export const useRegister = (): UseRegister => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterValidationSchema),
  })

  const onSubmit = async (data: SignUp): Promise<void> => {
    try {
      await authService.signUp(data)
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  }
}

interface UseRegister {
  register: UseFormRegister<RegisterFormValues>
  handleSubmit: UseFormHandleSubmit<RegisterFormValues>
  onSubmit: (data: SignUp) => Promise<void>
  errors: FieldErrors<RegisterFormValues>
}
