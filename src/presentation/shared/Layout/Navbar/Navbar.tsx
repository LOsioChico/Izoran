import { NavbarLinks } from '.'
import { IzoranLogo, MainButton } from '../..'
import { NavbarSearch } from './NavbarSearch'

export const Navbar: React.FC = () => {
  return (
    <div className='fixed z-10 flex h-20 w-full items-center justify-around border-b-2 border-b-neutral-50 border-opacity-10 bg-darkLight bg-opacity-90 text-white'>
      <div className='relative -left-16 w-40 scale-[25%] cursor-pointer'>
        <IzoranLogo />
      </div>

      <div className='grid grid-cols-4 text-lg text-neutral-200'>
        <NavbarLinks link='/' title='Home' />
        <NavbarLinks link='/catalog' title='Catalog' />
        <NavbarLinks link='/news' title='News' />
        <NavbarLinks link='/collections' title='Collections' />
      </div>

      <NavbarSearch />

      <div className='flex items-center gap-4 text-sm font-semibold'>
        <MainButton text='Log In' variant='primary' />
        <MainButton text='Get Started' variant='secondary' />
      </div>
    </div>
  )
}