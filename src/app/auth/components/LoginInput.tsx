import { type LoginFormValues } from '@/domain/validations'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'

interface LoginInputProps {
  label: string
  type: HTMLInputElement['type']
  register: UseFormRegister<LoginFormValues>
  name: keyof LoginFormValues
  errors: FieldErrors<LoginFormValues>
  placeholder: string
}

export const LoginInput: React.FC<LoginInputProps> = ({
  label,
  type,
  register,
  name,
  errors,
  placeholder,
}) => {
  return (
    <div className='mb-4 flex flex-col font-normal text-neutral-200'>
      <label className='text-xs text-neutral-100'>{label}</label>
      <input
        {...register(name)}
        className='my-1 h-11 rounded-lg bg-neutral-900 px-4 text-sm outline-none ring-2 ring-neutral-50 ring-opacity-10
        duration-300 hover:ring-opacity-30 focus:ring-opacity-80'
        type={type}
        placeholder={placeholder}
      />
      {errors[name] != null && (
        <span className='text-xs font-bold text-red-500 text-opacity-80'>
          {errors[name]?.message}
        </span>
      )}
    </div>
  )
}
