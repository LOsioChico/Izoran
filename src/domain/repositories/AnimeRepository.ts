import { AnimeAPI } from '@/infrastructure/api/AnimeAPI'

export const AnimeRepository = {
  getTrending: AnimeAPI.getTrending,
  getPopular: AnimeAPI.getPopular,
}
