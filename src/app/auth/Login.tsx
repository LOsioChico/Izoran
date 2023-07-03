import { AuthType, useAuthStore } from '@/infrastructure/state'
import { BsDiscord, BsGoogle } from 'react-icons/bs'
import { MainButton } from '../components'
import { LoginForm } from './components/LoginForm'

export const Login: React.FC = () => {
  const { setAuthType } = useAuthStore()
  return (
    <div className='w-80 rounded-lg border-2 border-dark bg-neutral-900 p-8'>
      <div className='flex h-full flex-col items-center justify-center font-bold'>
        <h1 className='mb-6 text-xl text-neutral-100'>Log In</h1>

        <div className='mb-6 flex w-full flex-col gap-4'>
          <MainButton variant='white' Icon={BsDiscord}>
            Log In with Discord
          </MainButton>
          <MainButton variant='white' Icon={BsGoogle}>
            Log In with Google
          </MainButton>
        </div>

        <LoginForm />
      </div>

      <div className='mb-1 mt-4 flex w-full items-center justify-center gap-1 text-xs font-normal text-neutral-100 text-opacity-75'>
        <p>Forgot password? </p>
        <span
          className='cursor-pointer text-green-500 text-opacity-80 duration-300 hover:text-opacity-100'
          onClick={() => {
            setAuthType(AuthType.FORGOT_PASSWORD)
          }}
        >
          Reset
        </span>
      </div>

      <div className='mb-1 mt-1 flex w-full items-center justify-center gap-1 text-xs font-normal text-neutral-100 text-opacity-75'>
        <p>Don&apos;t have an account? </p>
        <span
          className='cursor-pointer text-green-500 text-opacity-80 duration-300 hover:text-opacity-100'
          onClick={() => {
            setAuthType(AuthType.REGISTER)
          }}
        >
          Sign Up
        </span>
      </div>
    </div>
  )
}
