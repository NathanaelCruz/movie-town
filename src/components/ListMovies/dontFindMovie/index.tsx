import React from 'react'
import { SearchOff } from '@styled-icons/material'
import * as S from './styles'

const DontFindMovie: React.FC = () => {
  return (
    <S.Wrapper>
      <h4>OPS!</h4>
      <p>
        Nossa, durante nossas pesquisas nos arquivos, não encontramos um filme
        relacionado a sua pesquisa.
      </p>
      <SearchOff size={36} />
    </S.Wrapper>
  )
}

export default DontFindMovie
