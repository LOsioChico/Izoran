import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type Anime, type AnimeResponse } from '../models/Anime'
import { AnimeRepository } from '../repositories'

interface UseAnimeRecentEpisodes {
  recentEpisodes: Anime[] | undefined
  useAnimeRecentEpisodesQuery: UseQueryResult<AnimeResponse | undefined>
}

export const useAnimeRecentEpisodes = (): UseAnimeRecentEpisodes => {
  const useAnimeRecentEpisodesQuery = useQuery({
    queryKey: ['recentEpisodes'],
    queryFn: async () => await AnimeRepository.getRecentEpisodes(),
  })

  const { data } = useAnimeRecentEpisodesQuery

  return {
    useAnimeRecentEpisodesQuery,
    recentEpisodes: data?.results,
  }
}
