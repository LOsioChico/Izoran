import { AiOutlineSearch } from 'react-icons/ai'

export const NavbarSearch: React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <input
        type='text'
        className='h-11 select-none rounded-l-lg border-2 border-neutral-200 border-opacity-10 bg-darkLight pl-3 pr-48 text-sm text-white outline-none ring-white duration-300 focus:border-white focus:border-opacity-50'
        placeholder='Search'
      />
      <div className='flex h-11 cursor-pointer items-center justify-center rounded-r-lg border-2 border-black border-opacity-10 bg-neutral-900 text-sm text-white duration-300 hover:border-white hover:border-opacity-50'>
        <AiOutlineSearch className='text-neutro-50 h-8 w-8 cursor-pointer px-1' />
      </div>
    </div>
  )
}
