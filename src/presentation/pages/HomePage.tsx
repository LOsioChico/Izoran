import { TrendingNow } from '@/app/containers/Carousels'

export const HomePage: React.FC = () => {
  return (
    <div className='h-[91vh] px-8'>
      <div className='h-20' />
      <TrendingNow />
    </div>
  )
}
