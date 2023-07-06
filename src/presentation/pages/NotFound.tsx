import { MainButton } from '@/app/components'
import { ImArrowLeft2 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

export const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex h-screen items-center justify-center overflow-hidden'>
      <div>
        <img
          src='https://nfoqlwumxmmxqfisosgv.supabase.co/storage/v1/object/public/default_avatars/No-digas-eso-papu.webp'
          alt='404'
          className='rounded-lg'
        />
        <div className='absolute inset-0 rounded-lg bg-black opacity-50'></div>
      </div>
      <div className='absolute flex flex-col items-center justify-center gap-2'>
        <h1 className='text-4xl font-bold text-white'>404 Error</h1>
        <p className='mb-6 text-white'>Oops! We can&apos;t find this page</p>
        <MainButton
          variant='white'
          onClick={() => {
            navigate('/')
          }}
        >
          <ImArrowLeft2 />
          Go to HomePage
        </MainButton>
      </div>
    </div>
  )
}
