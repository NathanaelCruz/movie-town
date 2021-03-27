import * as S from './styles'
import Link from 'next/link'
import CardMovie from './cardMovie'
import { useContext } from 'react'
import { ListMoviesContext } from '../../contexts/ListMoviesContext'
import DontFindMovie from './dontFindMovie'

const ListMovies: React.FC = () => {
  const { listMovies, movieIsFinded } = useContext(ListMoviesContext)
  return (
    <S.Container>
      <S.Content>
        <S.HeadingPage>Filmes</S.HeadingPage>
        {movieIsFinded === false ? (
          <S.ListMovies>
            {listMovies.map((movie) => {
              return (
                <li key={`list-${movie.id}`}>
                  <Link href={movie.slug}>
                    <a>
                      <CardMovie {...movie} />
                    </a>
                  </Link>
                </li>
              )
            })}
          </S.ListMovies>
        ) : (
          <DontFindMovie />
        )}
      </S.Content>
    </S.Container>
  )
}

export default ListMovies
