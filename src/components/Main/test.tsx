import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

import Main from './Main'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main
          title={'Boilerplate NextJS'}
          description={
            'ReactJS, NextJS, Typescript, Jest, Styled Components e mais.'
          }
        />
      </ThemeProvider>
    )

    expect(
      screen.getByRole('heading', { name: /Boilerplate NextJS/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render colors correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main
          title={'Boilerplate NextJS'}
          description={
            'ReactJS, NextJS, Typescript, Jest, Styled Components e mais.'
          }
        />
      </ThemeProvider>
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': 'transparent'
    })
  })
})
