import { HomeProps } from 'pages'
import * as S from './styles'

const Main = ({ title, description }: HomeProps) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.gif" alt="Gif com duas engrenagens girando." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um grupo de três pessoas montando uma página web com partes."
    />
  </S.Wrapper>
)

export default Main
