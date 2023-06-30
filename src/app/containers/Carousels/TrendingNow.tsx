import { useAnimeTrending } from '@/hooks'

import { Carousel } from '@/app/components'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const TrendingNow: React.FC = () => {
  const { trending } = useAnimeTrending()
  if (trending == null) return null

  return (
    <div className='flex items-center justify-center'>
      <Carousel animes={trending} title='Trending Now' />
    </div>
  )
}
