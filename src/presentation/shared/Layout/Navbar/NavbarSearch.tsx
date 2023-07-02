import { AiOutlineSearch } from 'react-icons/ai'

export const NavbarSearch: React.FC = () => {
  return (
    <div className='relative'>
      <input
        type='text'
        className='h-11 select-none rounded-md border-2 border-neutral-200 border-opacity-10 bg-darkLight pl-3 pr-48 text-sm text-white outline-none duration-300 focus:border-white focus:border-opacity-50'
        placeholder='Search'
      />
      <AiOutlineSearch className='text-neutro-50 absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer' />
    </div>
  )
}
