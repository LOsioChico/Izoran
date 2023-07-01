import { PopularBanner, TrendingNow } from '@/app/containers/Carousels'

export const HomePage: React.FC = () => {
  return (
    <>
      <div className='pt-20' />
      <div className='relative'>
        <PopularBanner />
        <TrendingNow />
      </div>
    </>
  )
}
