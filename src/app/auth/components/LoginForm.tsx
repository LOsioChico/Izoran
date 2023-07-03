import { ImSpinner9 } from 'react-icons/im'
import { LoginInput, LoginInputPassword } from '.'
import { MainButton } from '../../components'
import { useLogin } from '../hooks'

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useLogin()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col'>
      <LoginInput
        label='Email'
        type='email'
        name='email'
        errors={errors}
        register={register}
        placeholder='your.email@address.com'
      />

      <LoginInputPassword errors={errors} register={register} />

      <MainButton variant='white' disabled={isSubmitting}>
        {isSubmitting ? <ImSpinner9 className='animate-spin' /> : 'Log In'}
      </MainButton>
    </form>
  )
}
