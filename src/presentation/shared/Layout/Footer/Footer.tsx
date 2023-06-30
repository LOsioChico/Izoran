import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FooterSocial } from '.'

export const Footer: React.FC = () => {
  return (
    <div
      className='flex h-20 items-center justify-between border-t-2 border-t-neutral-50 border-opacity-10 bg-darkLight bg-opacity-50 px-20 text-white'
      data-testid='footer'
    >
      <div className='flex gap-6'>
        <Link
          to='/'
          className='font-bold text-neutral-100 duration-500 hover:text-white'
        >
          Izoran.vercel.app
        </Link>
        <Link to='/' className='text-neutral-300 duration-500 hover:text-white'>
          Terms & Privacy
        </Link>
        <Link to='/' className='text-neutral-300 duration-500 hover:text-white'>
          Contacts
        </Link>
      </div>
      <div className='flex gap-4'>
        <FooterSocial
          Icon={FaGithub}
          link='https://www.linkedin.com/in/losiochico/'
        />
        <FooterSocial Icon={FaTwitter} link='/' />
        <FooterSocial
          Icon={FaLinkedinIn}
          link='https://github.com/LOsioChico'
        />
      </div>
    </div>
  )
}
