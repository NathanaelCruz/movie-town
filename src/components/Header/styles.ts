import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9rem;
  background-color: ${(props) => props.theme.colors.black};
  padding: ${(props) =>
    props.theme.measures.small + ' ' + props.theme.measures.bigSmall};
`

export const HeaderContent = styled.div`
  display: grid;
  grid-template: 'logo busca busca busca busca';
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  max-width: 100rem;

  @media (min-width: 767px) {
    grid-template: 'logo busca busca . .';
  }
`

export const LinkLogo = styled.a`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 6.5rem;
`
export const Logo = styled.img`
  max-width: 100%;
`
