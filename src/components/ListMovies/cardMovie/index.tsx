import { MovieProps } from 'contexts/ListMoviesContext'
import * as S from './styles'

const CardMovie: React.FC<MovieProps> = (movie) => {
  return (
    <S.Movie>
      <S.MovieImgContent>
        <S.MovieImg
          src={`/img/movies/${movie.folder}`}
          alt={`Filme ${movie.name}`}
          layout="fill"
          quality={75}
        />
      </S.MovieImgContent>
      <S.MovieTitle>{movie.name}</S.MovieTitle>
      <S.MovieYear dateTime={movie.year.toString()}>{movie.year}</S.MovieYear>
    </S.Movie>
  )
}

export default CardMovie
