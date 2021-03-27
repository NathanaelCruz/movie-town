import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 70;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundModal};
`

export const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 5px 2px ${(props) => props.theme.colors.boxShadow};
  width: 90%;
  max-width: 35rem;
  height: 15rem;
  padding: ${(props) => props.theme.measures.small};
  border-radius: ${(props) => props.theme.measures.bigSmall};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export const ModalHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font: 600 2rem ${(props) => props.theme.font.primary};
    &::first-letter {
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.primary};
      padding: 0 0.5rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border: none;
    outline: none;
    padding: ${(props) => props.theme.measures.bigSmall};
    border-radius: 50%;
    cursor: pointer;
    &:active,
    &:focus {
      box-shadow: 0 0 3px 3px ${(props) => props.theme.colors.primary};
    }
  }
`
export const ModalBody = styled.p`
  margin-top: ${(props) => props.theme.measures.bigSmall};
  font-size: ${(props) => props.theme.measures.small};
  line-height: 1.5;
`
