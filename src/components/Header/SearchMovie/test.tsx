import { fireEvent, render, screen } from '@testing-library/react'
import { RenderWithTemplate } from '../../../utils/utils'
import { ListMoviesProvider } from '../../../contexts/ListMoviesContext'
import SearchMovie from './index'

describe('Barra de Busca', () => {
  it('Deverá renderizar um input', () => {
    const { container } = render(RenderWithTemplate(<SearchMovie />))

    expect(screen.getByRole('searchbox', {})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Deverá aparecer o modal se não tiver nada no input', () => {
    render(
      RenderWithTemplate(
        <ListMoviesProvider>
          <SearchMovie />
        </ListMoviesProvider>
      )
    )

    fireEvent.click(screen.getByRole('button', {}))

    expect(screen.getByRole('dialog', {})).toBeInTheDocument()
  })
})
