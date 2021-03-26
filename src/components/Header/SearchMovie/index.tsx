import * as S from './styles'
import { SavedSearch } from '@styled-icons/material'
import theme from 'styles/theme'

const SearchMovie: React.FC = () => {
  return (
    <S.SearchContent>
      <S.SearchInput
        type="search"
        placeholder="Qual seu filme favorito?"
      ></S.SearchInput>
      <S.SearchButton>
        <SavedSearch size={24} color={theme.colors.white}></SavedSearch>
      </S.SearchButton>
    </S.SearchContent>
  )
}

export default SearchMovie
