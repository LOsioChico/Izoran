import { Link } from 'react-router-dom'

interface FooterSocialProps {
  Icon: React.FC
  link: string
}

export const FooterSocial: React.FC<FooterSocialProps> = ({ Icon, link }) => {
  return (
    <Link
      to={link}
      className='group rounded-lg bg-white p-2 text-xl text-black text-opacity-80 duration-500'
    >
      <div className='duration-300 group-hover:scale-110'>
        <Icon />
      </div>
    </Link>
  )
}
