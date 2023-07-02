import { type Anime } from '@/domain/models'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'

interface BannerCarouselProps {
  anime: Anime[]
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ anime }) => {
  return (
    <div className='relative h-[60vh]'>
      <div className='h-full bg-red-50'>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className='h-full'
        >
          {anime?.map((anime) => (
            <SwiperSlide key={anime.id}>
              <div className='flex h-full items-center justify-center'>
                <img
                  src={anime.cover}
                  alt={anime.title.userPreferred}
                  className='h-full w-full object-cover object-center'
                  loading='lazy'
                />
                <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-dark to-transparent' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
