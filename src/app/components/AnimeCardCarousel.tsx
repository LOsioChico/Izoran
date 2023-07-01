import { type Anime } from '@/domain/models/Anime'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AnimeCard } from './common'

import 'swiper/css/bundle'

interface CarouselProps {
  animes: Anime[]
  title: string
}

export const AnimeCardCarousel: React.FC<CarouselProps> = ({
  animes,
  title,
}) => {
  return (
    <div className='w-5/6'>
      <h1 className='mb-2 ml-2 select-none text-xl'>{title}</h1>
      <Swiper slidesPerView={6} data-testid='carousel'>
        {animes?.map((anime) => (
          <SwiperSlide key={anime.id}>
            <div className='flex items-center justify-center'>
              <AnimeCard anime={anime} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
