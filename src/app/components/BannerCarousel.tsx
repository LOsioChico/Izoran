import { type Anime } from '@/domain/models'
import { Autoplay, Navigation } from 'swiper'
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
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          className='h-full'
        >
          {anime?.map((anime) => (
            <SwiperSlide key={anime.id}>
              <div className='flex h-full items-center justify-center'>
                <img
                  src={anime.cover}
                  alt={anime.title.userPreferred}
                  className='h-full w-full object-cover object-center'
                />
                <div className='from-dark absolute left-0 top-0 h-full w-full bg-gradient-to-t to-transparent' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
