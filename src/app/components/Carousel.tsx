import { type Anime } from '@/types/AnimeTrending'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AnimeCard } from './common'

import 'swiper/css'
import 'swiper/css/navigation'

interface CarouselProps {
  animes: Anime[]
  title: string
}

export const Carousel: React.FC<CarouselProps> = ({ animes, title }) => {
  return (
    <div className='w-5/6'>
      <h1 className='mb-2 ml-6 select-none text-xl'>{title}</h1>
      <Swiper
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        slidesPerView={5}
        data-testid='carousel'
      >
        {animes?.map((anime) => (
          <SwiperSlide key={anime.id}>
            <div
              className='flex items-center justify-center'
              data-testid='anime-card'
            >
              <AnimeCard anime={anime} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
