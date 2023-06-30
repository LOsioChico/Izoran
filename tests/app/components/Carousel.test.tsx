import { Carousel } from '@/app/components'
import { type Anime } from '@/types/AnimeTrending'
import { render } from '@testing-library/react'

describe('Should render the Carousel', () => {
  it('Should render the Carousel Title', () => {
    const { getByText } = render(
      <Carousel animes={animes as Anime[]} title='Carousel Title' />
    )
    expect(getByText('Carousel Title')).toBeTruthy()
  })

  it('Should render the Carousel', () => {
    const { getByTestId } = render(
      <Carousel animes={animes as Anime[]} title='Carousel Title' />
    )
    expect(getByTestId('carousel')).toBeTruthy()
  })

  it('Should render the Carousel with 5 slides', () => {
    const { getAllByTestId } = render(
      <Carousel animes={animes as Anime[]} title='Carousel Title' />
    )
    expect(getAllByTestId('anime-card')).toHaveLength(5)
  })
})

const animes: Array<Partial<Anime>> = [
  {
    id: '1',
    title: {
      native: 'Anime Title',
      english: 'Anime Title',
      romaji: 'Anime Title',
      userPreferred: 'Anime Title',
    },
    image: 'https://example.com/image.jpg',
    releaseDate: 666,
    genres: ['Action', 'Adventure'],
    type: 'TV',
    totalEpisodes: 12,
  },
  {
    id: '2',
    title: {
      native: 'Anime Title',
      english: 'Anime Title',
      romaji: 'Anime Title',
      userPreferred: 'Anime Title',
    },
    image: 'https://example.com/image.jpg',
    releaseDate: 666,
    genres: ['Action', 'Adventure'],
    type: 'TV',
    totalEpisodes: 12,
  },
  {
    id: '3',
    title: {
      native: 'Anime Title',
      english: 'Anime Title',
      romaji: 'Anime Title',
      userPreferred: 'Anime Title',
    },
    image: 'https://example.com/image.jpg',
    releaseDate: 666,
    genres: ['Action', 'Adventure'],
    type: 'TV',
    totalEpisodes: 12,
  },
  {
    id: '4',
    title: {
      native: 'Anime Title',
      english: 'Anime Title',
      romaji: 'Anime Title',
      userPreferred: 'Anime Title',
    },
    image: 'https://example.com/image.jpg',
    releaseDate: 666,
    genres: ['Action', 'Adventure'],
    type: 'TV',
    totalEpisodes: 12,
  },
  {
    id: '5',
    title: {
      native: 'Anime Title',
      english: 'Anime Title',
      romaji: 'Anime Title',
      userPreferred: 'Anime Title',
    },
    image: 'https://example.com/image.jpg',
    releaseDate: 666,
    genres: ['Action', 'Adventure'],
    type: 'TV',
    totalEpisodes: 12,
  },
]
