import { AuthType, useAuthStore } from '@/infrastructure/state'
import { BsDiscord, BsGoogle } from 'react-icons/bs'
import { MdMailOutline } from 'react-icons/md'
import { MainButton } from '../components'

export const Join: React.FC = () => {
  const { setAuthType } = useAuthStore()
  return (
    <div className='w-80 rounded-lg border-2 border-dark bg-neutral-900 p-8'>
      <div className='flex w-full flex-col items-center justify-center gap-4 font-bold'>
        <h1 className='mb-2 text-xl text-neutral-100'>Join Izoran</h1>
        <MainButton variant='white' Icon={BsDiscord}>
          Continue with Discord
        </MainButton>
        <MainButton variant='white' Icon={BsGoogle}>
          Continue with Google
        </MainButton>
        <MainButton
          variant='white'
          Icon={MdMailOutline}
          onClick={() => {
            setAuthType(AuthType.REGISTER)
          }}
        >
          Sign Up with Email
        </MainButton>
        <div className='mb-1 mt-4 flex gap-1 text-xs font-normal text-neutral-100 text-opacity-75'>
          Already have an account?
          <span
            className='cursor-pointer text-green-500 text-opacity-80 duration-300 hover:text-opacity-100'
            onClick={() => {
              setAuthType(AuthType.LOGIN)
            }}
          >
            Log In
          </span>
        </div>
      </div>
    </div>
  )
}
