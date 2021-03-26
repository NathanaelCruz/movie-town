import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: ${(props) => props.theme.font.primary};
    color: ${(props) => props.theme.colors.text};
  }

  html,
  body,
  #__next{
    height: 100%;
    width: 100%;
  }

  h1{
    font: 400 ${(props) => props.theme.measures.large} ${(props) =>
  props.theme.font.secundary};
  }

  p{
    font-size: ${(props) => props.theme.measures.medium};
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }

  button,
  textarea,
  input{
    font-family: ${(props) => props.theme.font.primary};
    font-size: ${(props) => props.theme.font.primary};
  }
`

export default GlobalStyles
