import { ImCheckmark2, ImSpinner9 } from 'react-icons/im'
import { MainButton } from '../components'
import { useForgotPassword } from './hooks'

export const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isSubmitSuccessful,
  } = useForgotPassword()
  return (
    <div className='w-80 rounded-lg border-2 border-dark bg-neutral-900 p-8'>
      <div className='flex h-full flex-col items-center justify-center font-bold'>
        <h1 className='mb-6 text-xl text-neutral-100'>Forgot Password</h1>
        <form
          className='flex w-full flex-col'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='mb-4 flex flex-col font-normal text-neutral-200'>
            <label className='text-xs text-neutral-100'>Email</label>
            <input
              className='my-1 h-11 rounded-lg bg-neutral-900 px-4 text-sm outline-none ring-2 ring-neutral-50 ring-opacity-10
                duration-300 hover:ring-opacity-30 focus:ring-opacity-80'
              type='email'
              {...register('email')}
              placeholder='your.email@address.com'
            />
            {errors.email != null && (
              <span className='text-xs font-bold text-red-500 text-opacity-80'>
                {errors.email?.message}
              </span>
            )}
          </div>
          <MainButton
            variant='white'
            disabled={isSubmitting || isSubmitSuccessful}
          >
            {isSubmitting && <ImSpinner9 className='animate-spin' />}
            {isSubmitSuccessful && (
              <ImCheckmark2 className='text-green-500 text-opacity-80' />
            )}
            {!isSubmitting && !isSubmitSuccessful && 'Send Email'}
          </MainButton>
        </form>
      </div>
    </div>
  )
}
