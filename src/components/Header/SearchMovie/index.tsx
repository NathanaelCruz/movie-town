import * as S from './styles'
import { SavedSearch } from '@styled-icons/material'
import { KeyboardEvent, useContext } from 'react'
import { ListMoviesContext } from '../../../contexts/ListMoviesContext'

const SearchMovie: React.FC = () => {
  const { listMoviesSearch, searchForWordKey } = useContext(ListMoviesContext)

  function searchWordKey(e: KeyboardEvent) {
    const valueCurrency = e.target as HTMLInputElement
    listMoviesSearch(valueCurrency.value)
  }

  return (
    <S.SearchContent>
      <S.SearchInput
        type="search"
        placeholder="Qual seu filme favorito?"
        onKeyUp={(event) => searchWordKey(event)}
      ></S.SearchInput>
      <S.SearchButton onClick={() => searchForWordKey()}>
        <SavedSearch size={24} color="#ffffff"></SavedSearch>
      </S.SearchButton>
    </S.SearchContent>
  )
}

export default SearchMovie
