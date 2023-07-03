import { type Anime, type AnimeResponse } from '@/domain/models/Anime'
import { AnimeRepository } from '@/domain/repositories'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

interface UseAnimeTrending {
  trending: Anime[] | undefined
  useAnimeTrendingQuery: UseQueryResult<AnimeResponse | undefined>
}

export const useAnimeTrending = (): UseAnimeTrending => {
  const useAnimeTrendingQuery = useQuery({
    queryKey: ['trendingAnime'],
    queryFn: async () => await AnimeRepository.getTrending(),
  })

  const { data } = useAnimeTrendingQuery

  return {
    useAnimeTrendingQuery,
    trending: data?.results,
  }
}
