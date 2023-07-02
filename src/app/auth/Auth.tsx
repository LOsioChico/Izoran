import { useAuthStore } from '@/infrastructure/state'
import { RegisterForm } from '.'

export const Auth: React.FC = () => {
  const { setIsModalOpen, isModalOpen } = useAuthStore()
  return (
    <>
      <div
        className='fixed z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-70 duration-300 ease-in-out'
        onClick={() => {
          setIsModalOpen(false)
        }}
        style={{
          opacity: isModalOpen ? 1 : 0,
          visibility: isModalOpen ? 'visible' : 'hidden',
        }}
      >
        <RegisterForm />
      </div>
    </>
  )
}
