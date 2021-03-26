import styled from 'styled-components'

export const Movie = styled.article`
  height: 24rem;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem ${(props) => props.theme.colors.boxShadow};
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.black};

    h4 {
      color: ${(props) => props.theme.colors.secondary};
    }

    time {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media (min-width: 767px) {
    height: 35rem;
  }
`

export const MovieImgContent = styled.figure`
  width: 100%;
  height: 17rem;
  border-radius: 5px;
  overflow: hidden;
  @media (min-width: 767px) {
    height: 26rem;
  }
`

export const MovieImg = styled.img`
  width: 100%;
`

export const MovieTitle = styled.h4`
  font: 600 2rem ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  margin: 0.5rem auto;
`

export const MovieYear = styled.time`
  font: 400 1rem ${(props) => props.theme.font.primary};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`
