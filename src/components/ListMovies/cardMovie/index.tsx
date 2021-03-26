import * as S from './styles'

const CardMovie: React.FC = () => {
  return (
    <S.Movie>
      <S.MovieImgContent>
        <S.MovieImg src="/img/movies/halloween.jpeg" alt="nome do filme" />
      </S.MovieImgContent>
      <S.MovieTitle>Halloween</S.MovieTitle>
      <S.MovieYear dateTime="2019">2019</S.MovieYear>
    </S.Movie>
  )
}

export default CardMovie
