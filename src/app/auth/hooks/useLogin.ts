import { authService } from '@/auth'
import {
  LoginValidationSchema,
  type LoginFormValues,
} from '@/domain/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import {
  useForm,
  type FieldErrors,
  type SubmitHandler,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from 'react-hook-form'

export const useLogin = (): UseLogin => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginValidationSchema),
    mode: 'onBlur',
  })

  useEffect(() => {
    return () => {
      clearErrors()
    }
  }, [clearErrors])

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      await authService.signIn(data)
    } catch (error) {
      if (error instanceof Error)
        setError('email', {
          type: 'manual',
          message: error.message,
        })
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  }
}

interface UseLogin {
  register: UseFormRegister<LoginFormValues>
  handleSubmit: UseFormHandleSubmit<LoginFormValues>
  onSubmit: SubmitHandler<LoginFormValues>
  errors: FieldErrors<LoginFormValues>
  isSubmitting: boolean
}
