import { authService, type SignIn } from '@/auth'
import {
  LoginValidationSchema,
  type LoginFormValues,
} from '@/domain/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useForm,
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form'

export const useLogin = (): UseLogin => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginValidationSchema),
  })

  const onSubmit = async (data: SignIn): Promise<void> => {
    try {
      await authService.signIn(data)
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

interface UseLogin {
  register: UseFormRegister<LoginFormValues>
  handleSubmit: UseFormHandleSubmit<LoginFormValues>
  onSubmit: (data: SignIn) => Promise<void>
  errors: FieldErrors<LoginFormValues>
}
