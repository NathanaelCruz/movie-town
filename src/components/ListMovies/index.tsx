import * as S from './styles'
import Link from 'next/link'
import CardMovie from './cardMovie'

const ListMovies: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.HeadingPage>Filmes</S.HeadingPage>
        <S.ListMovies>
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <li key={`list-${number}`}>
                <Link href="/">
                  <a>
                    <CardMovie />
                  </a>
                </Link>
              </li>
            )
          })}
        </S.ListMovies>
      </S.Content>
    </S.Container>
  )
}

export default ListMovies
