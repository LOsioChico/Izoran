import { type Anime } from '@/domain/models'
import { TbBookmark } from 'react-icons/tb'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MainButton } from '.'

import 'swiper/css/bundle'

interface BannerCarouselProps {
  anime: Anime[]
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ anime }) => {
  return (
    <div className='relative h-[60vh] min-h-[500px]'>
      <div className='h-full bg-red-50'>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className='h-full w-full'
        >
          {anime?.map((anime) => (
            <SwiperSlide key={anime.id}>
              <div className='flex h-full items-center justify-center'>
                <div className='absolute left-44 top-24 z-10 flex h-1/2 flex-col gap-4 font-bold 5xl:left-36 xl:left-28 xs:left-16'>
                  <h3 className='text-5xl font-bold text-white 5xl:text-5xl 4xl:text-4xl xl:text-3xl xs:text-2xl'>
                    {anime.title.userPreferred}
                  </h3>
                  <p
                    className='line-clamp-6 w-96 max-w-[75ch] overflow-hidden overflow-ellipsis text-sm font-normal text-white xs:w-72'
                    dangerouslySetInnerHTML={{ __html: anime.description }}
                  />
                  <div className='flex gap-4 text-sm xs:ml-6'>
                    <MainButton variant='white'>Learn More</MainButton>
                    <MainButton variant='black'>
                      <TbBookmark className='text-xl' />
                      To Watch
                    </MainButton>
                  </div>
                </div>
                <img
                  src={anime.cover}
                  alt={anime.title.userPreferred}
                  className='h-full w-full object-cover object-center'
                  loading='lazy'
                />
                <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-dark to-transparent' />
                <div className='absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-dark to-transparent' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
