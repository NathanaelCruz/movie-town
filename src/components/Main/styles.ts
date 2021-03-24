import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: transparent;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
`
export const Logo = styled.img`
  width: 12rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.measures.large};
  margin-bottom: ${(props) => props.theme.measures.small};
`

export const Description = styled.h2`
  font-size: ${(props) => props.theme.measures.medium};
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(35rem, 100%);
`
