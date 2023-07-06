import { MainButton } from '@/app/components'
import { AuthType, useAuthStore } from '@/infrastructure/state'
import { NavbarLinks } from '.'
import { IzoranLogo } from '../..'
import { NavbarSearch } from './NavbarSearch'
import { authService } from '@/auth'
import { FaChevronDown } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

export const Navbar: React.FC = () => {
  const { setAuthType, user } = useAuthStore()

  return (
    <>
      <div className='fixed z-40 flex h-20 w-full items-center justify-around border-b-2 border-b-neutral-50 border-opacity-10 bg-darkLight bg-opacity-90 text-white'>
        <HiMenu className='hidden cursor-pointer text-3xl xl:block' />
        <div className='relative -left-16 w-40 scale-[25%] cursor-pointer'>
          <IzoranLogo />
        </div>

        <div className='grid grid-cols-4 text-lg text-neutral-200 xl:hidden'>
          <NavbarLinks link='/' title='Home' />
          <NavbarLinks link='/catalog' title='Catalog' />
          <NavbarLinks link='/news' title='News' />
          <NavbarLinks link='/collections' title='Collections' />
        </div>

        <NavbarSearch />

        {user != null ? (
          <div className='flex gap-8 text-sm font-semibold text-neutral-200'>
            <div className='flex cursor-pointer select-none items-center gap-2 md:hidden'>
              <p>My Library</p>
              <FaChevronDown />
            </div>
            <img
              src={user.avatar_url}
              alt='avatar'
              className='h-10 w-10 cursor-pointer select-none rounded-full'
              draggable={false}
              onClick={() => {
                void authService.signOut()
              }}
            />
          </div>
        ) : (
          <div className='flex items-center gap-4 text-sm font-semibold'>
            <MainButton
              variant='black'
              onClick={() => {
                setAuthType(AuthType.LOGIN)
              }}
            >
              Log In
            </MainButton>
            <MainButton
              variant='white'
              onClick={() => {
                setAuthType(AuthType.JOIN)
              }}
            >
              Get Started
            </MainButton>
          </div>
        )}
      </div>
      <div className='h-20 w-full' />
    </>
  )
}
