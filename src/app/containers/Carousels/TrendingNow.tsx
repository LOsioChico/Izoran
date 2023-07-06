import { AnimeCardCarousel } from '@/app/components'
import { useAnimeTrending } from '@/domain/usecases'

export const TrendingNow: React.FC = () => {
  const { trending } = useAnimeTrending()
  if (trending === undefined) return null

  return (
    <div className='relative bottom-20 z-10 flex w-full items-center justify-center px-8 pb-6 xs:px-0'>
      <AnimeCardCarousel animes={trending} title='Trending Now' />
    </div>
  )
}
