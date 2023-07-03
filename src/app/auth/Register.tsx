import { RegisterForm } from './components/RegisterForm'

export const Register: React.FC = () => {
  return (
    <div className='w-80 rounded-lg border-2 border-dark bg-neutral-900 p-8'>
      <div className='flex h-full flex-col items-center justify-center font-bold'>
        <h1 className='mb-6 text-xl text-neutral-100'>Create An Account</h1>

        <RegisterForm />

        <div className='mb-1 mt-4 flex w-40 flex-col items-center justify-center text-xs font-normal text-neutral-100 text-opacity-75'>
          By signing up you agree to
          <span className='cursor-pointer text-green-500 text-opacity-80 duration-300 hover:text-opacity-100'>
            Terms & Privacy
          </span>
        </div>
      </div>
    </div>
  )
}
