import { AnimeCard } from '@/app/components/common'
import { type Anime } from '@/types/AnimeTrending'
import { render } from '@testing-library/react'

describe('Should render the Anime Info', () => {
  const anime: Partial<Anime> = {
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
  }

  it('Should render the Anime Title', () => {
    const { getByText } = render(<AnimeCard anime={anime as Anime} />)
    expect(getByText('Anime Title')).toBeTruthy()
  })

  it('Should render the Anime Image', () => {
    const { getByRole } = render(<AnimeCard anime={anime as Anime} />)
    expect(getByRole('img')).toBeTruthy()
  })

  it('Should render the Anime Main Genre', () => {
    const { getByText } = render(<AnimeCard anime={anime as Anime} />)
    expect(getByText('Action')).toBeTruthy()
  })
})
