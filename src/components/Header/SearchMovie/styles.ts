import styled from 'styled-components'

export const SearchContent = styled.div`
  grid-area: busca;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: 100%;
  position: relative;
`
export const SearchInput = styled.input`
  width: 95%;
  height: 3rem;
  padding: 1rem 4rem 1rem 1rem;
  border-radius: 15px 0 0 15px;
  border: none;
`
export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  height: 4rem;
  width: 4rem;
  z-index: 10;
  right: 0;
  top: calc(50% - 2rem);
  border-radius: 50%;
  border: none;

  &:hover {
    cursor: pointer;
  }
`
