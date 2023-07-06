import { type Anime } from '@/domain/models/Anime'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import { AnimeCard } from './common'

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
      <div className='relative'>
        <Swiper
          centeredSlides={true}
          spaceBetween={20}
          centeredSlidesBounds={true}
          data-testid='carousel'
          className='h-72'
          breakpoints={{
            1600: {
              slidesPerView: 7,
            },
            1366: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 5,
            },
            960: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 3,
            },
          }}
        >
          {animes?.map((anime) => (
            <SwiperSlide key={anime.id}>
              <AnimeCard anime={anime} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute left-0 top-0 z-10 h-full w-2 bg-gradient-to-r from-dark to-transparent' />
        <div className='absolute right-0 top-0 z-10 h-full w-2 bg-gradient-to-l from-dark to-transparent' />
      </div>
    </div>
  )
}
