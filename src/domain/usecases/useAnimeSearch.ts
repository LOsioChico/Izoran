import { type AnimeSearchResponse, type AnimeSearch } from '../models'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { AnimeRepository } from '../repositories'

interface UseAnimeSearch {
  searchResult: AnimeSearch[] | undefined
  useAnimeSearchQuery: UseQueryResult<AnimeSearchResponse | undefined>
}

export const useAnimeSearch = (params: {
  query?: string
  search?: string
}): UseAnimeSearch => {
  const useAnimeSearchQuery = useQuery({
    queryKey: ['searchAnime', params],
    queryFn: async () => await AnimeRepository.search(params),
  })

  const { data } = useAnimeSearchQuery

  return {
    useAnimeSearchQuery,
    searchResult: data?.results,
  }
}
