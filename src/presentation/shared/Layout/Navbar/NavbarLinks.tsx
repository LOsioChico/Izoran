import { Link } from 'react-router-dom'

interface NavbarLinksProps {
  link: string
  title: string
}

export const NavbarLinks: React.FC<NavbarLinksProps> = ({ link, title }) => {
  return (
    <Link to={link} className='select-none duration-500 hover:text-white'>
      {title}
    </Link>
  )
}
