import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type Anime, type AnimeResponse } from '../models/Anime'
import { AnimeRepository } from '../repositories'

interface UseAnimePopular {
  popular: Anime[] | undefined
  useAnimePopularQuery: UseQueryResult<AnimeResponse, unknown>
}

export const useAnimePopular = (): UseAnimePopular => {
  const useAnimePopularQuery = useQuery({
    queryKey: ['popularAnime'],
    queryFn: async () => await AnimeRepository.getPopular(),
  })

  const { data } = useAnimePopularQuery

  return {
    useAnimePopularQuery,
    popular: data?.results,
  }
}
