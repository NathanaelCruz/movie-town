import axios from 'axios'
import Modal from '../components/modal'
import { createContext, useState, ReactNode, useEffect } from 'react'
import { HostDataBase } from '../utils/utils'

type ListMoviesProviderProps = {
  children: ReactNode
}

type GenresProps = {
  genre: string
}

type ActorsProps = {
  name: string
  link: string
}

export type MovieProps = {
  id: string
  name: string
  slug: string
  folder: string
  rating: number
  synopsis: string
  year: number
  duration: number
  director: string
  genres: Array<GenresProps>
  actors: Array<ActorsProps>
}

type ListMoviesContextProps = {
  closeAndOpenModal: () => void
  listMovies: Array<MovieProps>
  listMoviesSearch: (str: string) => void
  setListMoviesWithAll: () => void
  searchForWordKey: () => void
  movieIsFinded: boolean
}

export const ListMoviesContext = createContext({} as ListMoviesContextProps)

export function ListMoviesProvider({ children }: ListMoviesProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [listMovies, setListMovies] = useState([])
  const [wordSearchCurrency, setWordSearchCurrency] = useState('')
  const [movieIsFinded, setMovieIsFinded] = useState(false)

  useEffect(() => {
    setListMoviesWithAll()
  }, [])

  function closeAndOpenModal() {
    setIsOpen(!isOpen)
  }

  function listMoviesSearch(wordKey: string) {
    setWordSearchCurrency(wordKey)
    axios.get(`${HostDataBase}/movies?q=${wordSearchCurrency}`).then((res) => {
      if (res.data.length > 0) {
        setListMovies(res.data)
        setMovieIsFinded(false)
      } else {
        setMovieIsFinded(true)
      }
    })
  }

  function searchForWordKey() {
    console.log(wordSearchCurrency)
    if (wordSearchCurrency === '') {
      closeAndOpenModal()
    } else {
      axios
        .get(`${HostDataBase}/movies?q=${wordSearchCurrency}`)
        .then((res) => {
          if (res.data.length > 0) {
            setListMovies(res.data)
            setMovieIsFinded(false)
          } else {
            setMovieIsFinded(true)
          }
        })
    }
  }

  function setListMoviesWithAll() {
    axios.get(`${HostDataBase}/movies`).then((res) => {
      setListMovies(res.data)
    })
  }

  return (
    <ListMoviesContext.Provider
      value={{
        closeAndOpenModal,
        listMovies,
        movieIsFinded,
        listMoviesSearch,
        setListMoviesWithAll,
        searchForWordKey
      }}
    >
      {children}
      {isOpen && <Modal />}
    </ListMoviesContext.Provider>
  )
}
