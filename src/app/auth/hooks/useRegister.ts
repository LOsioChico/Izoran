import { authService } from '@/auth'
import {
  RegisterValidationSchema,
  type RegisterFormValues,
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

export const useRegister = (): UseRegister => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterValidationSchema),
    mode: 'onBlur',
  })

  useEffect(() => {
    return () => {
      clearErrors()
    }
  }, [clearErrors])

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    try {
      await authService.signUp(data)
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

interface UseRegister {
  register: UseFormRegister<RegisterFormValues>
  handleSubmit: UseFormHandleSubmit<RegisterFormValues>
  onSubmit: SubmitHandler<RegisterFormValues>
  errors: FieldErrors<RegisterFormValues>
  isSubmitting: boolean
}
