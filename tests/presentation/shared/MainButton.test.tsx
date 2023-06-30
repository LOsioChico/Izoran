import { MainButton } from '@/presentation/shared'
import { render } from '@testing-library/react'

describe('Should render the Button', () => {
  it('Primary Variant should render the Button', () => {
    const { getByRole } = render(
      <MainButton variant='primary' text='Testing' />
    )
    expect(getByRole('button')).toBeTruthy()
  })

  it('Secondary Variant should render the Button', () => {
    const { getByRole } = render(
      <MainButton variant='secondary' text='Testing' />
    )
    expect(getByRole('button')).toBeTruthy()
  })
})
