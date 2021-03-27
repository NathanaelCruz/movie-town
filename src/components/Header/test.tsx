import { render, screen } from '@testing-library/react'
import { RenderWithTemplate } from '../../utils/utils'
import Header from './index'

describe('Header', () => {
  it('Deverá renderizar o Header', () => {
    const { container } = render(RenderWithTemplate(<Header />))

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('Deverá ser renderizado um loogo', () => {
    render(RenderWithTemplate(<Header />))

    expect(
      screen.getByRole('img', {
        name: /Ticket de ingresso para o cinema com uma estrela/i
      })
    ).toBeInTheDocument()
  })
})
