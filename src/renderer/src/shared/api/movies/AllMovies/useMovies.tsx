import { api, routesPaths } from '@renderer/shared/constants'
import { IMovieResp } from '@renderer/widgets/layout/lib'
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import useSWR from 'swr'

const useMovies = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const moviesByFilter = api + routesPaths.movies + location.search
  const moviesByName = api + routesPaths.moviesByName + location.search
  const { data: movies, isLoading } = useSWR<IMovieResp>(
    searchParams.has('query') ? moviesByName : moviesByFilter
  )
  return { movies, isLoading }
}

export default useMovies
