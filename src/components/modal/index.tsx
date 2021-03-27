import * as S from './styles'
import { Close, FaceRetouchingNatural } from '@styled-icons/material'
import { useContext } from 'react'
import { ListMoviesContext } from '../../contexts/ListMoviesContext'

const Modal: React.FC = () => {
  const { closeAndOpenModal } = useContext(ListMoviesContext)

  return (
    <S.Wrapper>
      <S.Modal role="dialog">
        <S.ModalHeader>
          <h4>Ops!Há algo errado</h4>
          <button type="button" onClick={() => closeAndOpenModal()}>
            <Close size={16} />
          </button>
        </S.ModalHeader>
        <S.ModalBody>
          Opa, para achar o seu filme dentre tantos, nos dê uma pista, pode ser
          o título ou uma parte do titulo. <FaceRetouchingNatural size={30} />
        </S.ModalBody>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Modal
