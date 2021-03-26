import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin-top: ${(props) => props.theme.measures.medium};
`

export const Content = styled.section`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeadingPage = styled.h1`
  text-align: center;
  width: 100%;
  &::first-letter {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => `0rem ` + props.theme.measures.bigSmall};
  }
`

export const ListMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  list-style: none;
  width: 100%;
  margin-top: ${(props) => props.theme.measures.small};
`
