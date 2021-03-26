import * as S from './styles'
import Link from 'next/link'
import SearchMovie from './SearchMovie'

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderContent role="menu">
        <Link href="/">
          <S.LinkLogo>
            <S.Logo
              src="/img/icon-100.png"
              alt="Ticket de ingresso para o cinema com uma estrela"
            />
          </S.LinkLogo>
        </Link>
        <SearchMovie />
      </S.HeaderContent>
    </S.Header>
  )
}

export default Header
