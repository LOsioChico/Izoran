import { type RegisterFormValues } from '@/domain/validations'
import { useState } from 'react'
import { type FieldErrors, type UseFormRegister } from 'react-hook-form'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { RegisterInput } from '.'

interface RegisterInputPasswordProps {
  errors: FieldErrors
  register: UseFormRegister<RegisterFormValues>
}

export const RegisterInputPassword: React.FC<RegisterInputPasswordProps> = ({
  errors,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='relative'>
      <RegisterInput
        label='Password'
        name='password'
        type={showPassword ? 'text' : 'password'}
        errors={errors}
        register={register}
        placeholder='Enter your password'
      />
      <button
        type='button'
        onClick={() => {
          setShowPassword(!showPassword)
        }}
        className={`absolute right-4 top-1/2 -translate-y-1/2 transform text-xl text-neutral-100 text-opacity-75 duration-300 hover:text-opacity-100
        ${errors.password != null ? '-translate-y-3/4' : ''}
        `}
      >
        {showPassword ? <BsEyeSlash /> : <BsEye />}
      </button>
    </div>
  )
}
