import { type Anime } from '@/domain/models/Anime'
import { BsDot, BsPlayCircleFill } from 'react-icons/bs'

interface AnimeCardProps {
  anime: Anime
}

export const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div
      key={anime.id}
      className='group relative h-full w-full cursor-pointer select-none overflow-hidden rounded-md bg-dark'
      data-testid='anime-card'
    >
      <img
        src={anime.image}
        alt={anime.title.userPreferred}
        className='h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105'
        loading='lazy'
      />
      <div className='absolute bottom-0 left-0 right-0 z-10 p-2'>
        <h4
          className='line-clamp-2 w-full text-sm font-bold text-gray-100
        drop-shadow-lg transition-all duration-500 ease-in-out group-hover:text-white'
        >
          {anime.title.userPreferred}
        </h4>
        <p className='text-xs font-semibold text-gray-400'>
          <span>{anime.releaseDate ?? 'No release date yet'}</span>,{' '}
          <span>{anime.genres[0]}</span>
        </p>
        <div className='flex items-center text-xs font-semibold text-gray-400'>
          {anime.type === 'TV' ? <p>TV Show</p> : <p>{anime.type}</p>}

          {anime.type !== null && anime.totalEpisodes !== null && (
            <BsDot className='text-lg' />
          )}

          {anime.totalEpisodes === null ? (
            <p> Ongoing</p>
          ) : (
            <p>{anime.totalEpisodes} episodes</p>
          )}
        </div>
      </div>
      <div
        className='group-hover: absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent
      p-2 transition-all duration-500 ease-in-out group-hover:h-full'
      />
      <div
        className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 scale-90 rounded-full
    p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:opacity-100'
      >
        <BsPlayCircleFill className='text-3xl text-gray-200' />
      </div>
      <div className='absolute bottom-0 left-0 right-0 top-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20' />
      </div>
    </div>
  )
}
