import { type AnimeRecentResponse, type AnimeResponse } from '@/domain/models'
import { axiosInstance } from './axios'
export const AnimeAPI = {
  getTrending: async (page = 1, perPage = 15) => {
    try {
      const { data } = await axiosInstance.get<AnimeResponse>('/trending', {
        params: {
          page,
          perPage,
        },
      })
      return data
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  },

  getPopular: async (page = 1, perPage = 15) => {
    try {
      const { data } = await axiosInstance.get<AnimeResponse>('/popular', {
        params: {
          page,
          perPage,
        },
      })
      return data
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  },

  getRecentEpisodes: async (page = 1, perPage = 18) => {
    try {
      const { data } = await axiosInstance.get<AnimeRecentResponse>(
        '/recent-episodes',
        {
          params: {
            page,
            perPage,
          },
        }
      )
      return data
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  },
}
