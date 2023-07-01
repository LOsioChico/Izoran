export interface AnimeResponse {
  currentPage: number
  hasNextPage: boolean
  results: Anime[]
}

export interface Anime {
  id: string
  title: Title
  image: string
  trailer: Trailer
  description: string
  status: Status
  cover: string
  rating: number | null
  releaseDate: number | null
  color: string | null
  genres: string[]
  totalEpisodes: number | null
  duration: number | null
  type: 'TV' | 'ONA'
}

export enum Status {
  Completed = 'Completed',
  NotYetAired = 'Not yet aired',
  Ongoing = 'Ongoing',
}

export interface Title {
  romaji: string
  english: null | string
  native: string
  userPreferred: string
}

export interface Trailer {
  id: string
  site: string
  thumbnail: string
}
