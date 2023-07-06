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
  type: 'TV' | 'ONA' | 'MOVIE' | null
}

export interface AnimeRecentResponse
  extends Pick<AnimeResponse, 'currentPage' | 'hasNextPage'> {
  totalPage: number
  totalResults: number
  results: AnimeRecent[]
}

export interface AnimeRecent
  extends Pick<
    Anime,
    'id' | 'title' | 'image' | 'rating' | 'color' | 'genres' | 'type'
  > {
  malId: number
  episodeId: string
  episodeTitle: string
  episodeNumber: number
}

export enum Status {
  Completed = 'Completed',
  NotYetAired = 'Not yet aired',
  Ongoing = 'Ongoing',
}

export interface AnimeSearchResponse
  extends Pick<AnimeResponse, 'currentPage' | 'hasNextPage'> {
  totalPage: number
  totalResults: number
  results: AnimeSearch[]
}

export interface AnimeSearch
  extends Pick<
    Anime,
    | 'id'
    | 'title'
    | 'image'
    | 'rating'
    | 'color'
    | 'genres'
    | 'type'
    | 'totalEpisodes'
    | 'releaseDate'
    | 'status'
    | 'cover'
  > {
  popularity: number
  currentEpisode: number
  countryOfOrigin: string
  description: string
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
