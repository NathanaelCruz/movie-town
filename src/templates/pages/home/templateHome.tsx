import Header from 'components/Header'
import ListMovies from 'components/ListMovies'
import { ListMoviesProvider } from 'contexts/ListMoviesContext'

const TemplateHome: React.FC = () => {
  return (
    <ListMoviesProvider>
      <Header></Header>
      <ListMovies></ListMovies>
    </ListMoviesProvider>
  )
}

export default TemplateHome
