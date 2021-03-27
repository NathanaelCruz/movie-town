import styled from 'styled-components'

export const Wrapper = styled.article`
  padding: 1rem;
  width: 100%;
  margin-top: ${(props) => props.theme.measures.small};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h4 {
    font: 600 2rem ${(props) => props.theme.font.primary};
    text-align: center;
  }

  p {
    margin-top: ${(props) => props.theme.measures.small};
    text-align: center;
  }
`
