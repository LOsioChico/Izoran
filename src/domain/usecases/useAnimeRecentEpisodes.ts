import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { type AnimeRecent, type AnimeRecentResponse } from '../models/Anime'
import { AnimeRepository } from '../repositories'

interface UseAnimeRecentEpisodes {
  recentEpisodes: AnimeRecent[] | undefined
  useAnimeRecentEpisodesQuery: UseQueryResult<AnimeRecentResponse | undefined>
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
