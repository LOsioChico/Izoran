import { ImSpinner9 } from 'react-icons/im'
import { RegisterInput, RegisterInputPassword } from '.'
import { MainButton } from '../../components'
import { useRegister } from '../hooks'

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useRegister()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col'>
      <RegisterInput
        label='Email'
        type='email'
        name='email'
        errors={errors}
        register={register}
        placeholder='your.email@address.com'
      />
      <RegisterInput
        label='Username'
        name='username'
        type='text'
        errors={errors}
        register={register}
        placeholder='Maeruwu'
      />
      <RegisterInputPassword errors={errors} register={register} />
      <MainButton variant='white' disabled={isSubmitting}>
        {isSubmitting ? <ImSpinner9 className='animate-spin' /> : 'Sign Up'}
      </MainButton>
    </form>
  )
}
