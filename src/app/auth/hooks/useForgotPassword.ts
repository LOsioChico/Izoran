import { authService } from '@/auth'
import {
  EmailValidationSchema,
  type EmailFormValues,
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

export const useForgotPassword = (): UseForgotPassword => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(EmailValidationSchema),
    mode: 'onBlur',
  })

  useEffect(() => {
    return () => {
      clearErrors()
    }
  }, [clearErrors])

  const onSubmit: SubmitHandler<EmailFormValues> = async (data) => {
    try {
      await authService.forgotPassword(data)
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
    isSubmitSuccessful,
  }
}

interface UseForgotPassword {
  register: UseFormRegister<EmailFormValues>
  handleSubmit: UseFormHandleSubmit<EmailFormValues>
  onSubmit: SubmitHandler<EmailFormValues>
  errors: FieldErrors<EmailFormValues>
  isSubmitting: boolean
  isSubmitSuccessful: boolean
}
