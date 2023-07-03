import { AuthType, useAuthStore } from '@/infrastructure/state'
import { useEffect } from 'react'
import { ForgotPassword, Join, Login, Register } from '.'

export const Auth: React.FC = () => {
  const { isModalOpen, authType, setAuthType } = useAuthStore()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setAuthType(AuthType.CLOSE)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [setAuthType])

  return (
    <>
      <div
        className='fixed z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-70 duration-500 ease-in-out'
        onClick={() => {
          setAuthType(AuthType.CLOSE)
        }}
        style={{
          opacity: isModalOpen ? 1 : 0,
          visibility: isModalOpen ? 'visible' : 'hidden',
        }}
      >
        <div
          className='z-50'
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {authType === AuthType.REGISTER && <Register />}
          {authType === AuthType.LOGIN && <Login />}
          {authType === AuthType.FORGOT_PASSWORD && <ForgotPassword />}
          {authType === AuthType.JOIN && <Join />}
        </div>
      </div>
    </>
  )
}
