import { RecentEpisodes } from '@/app/containers'
import { PopularBanner, TrendingNow } from '@/app/containers/Carousels'

export const HomePage: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <PopularBanner />
        <TrendingNow />
        <RecentEpisodes />
      </div>
    </>
  )
}
