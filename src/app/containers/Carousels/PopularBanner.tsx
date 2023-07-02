import { BannerCarousel } from '@/app/components'
import { useAnimePopular } from '@/domain/usecases/useAnimePopular'

export const PopularBanner: React.FC = () => {
  const { popular } = useAnimePopular()
  if (popular === undefined) return null

  return (
    <div className='select-none' draggable={false}>
      <BannerCarousel anime={popular} />
    </div>
  )
}
