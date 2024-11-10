import { api, routesPaths } from '@renderer/shared/constants'
import { useLocation } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import useSWRInfinite from 'swr/infinite'

const useMovies = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const moviesByFilter = api + routesPaths.movies
  const moviesByName = api + routesPaths.moviesByName

  const { data, setSize, size, isLoading, isValidating, error } = useSWRInfinite(
    (pageIndex, previousPageData) => {
      pageIndex = pageIndex + 1
      if (previousPageData && pageIndex > previousPageData.pages) return null
      return searchParams.has('query')
        ? `${moviesByName}?page=${pageIndex}` + location.search?.replaceAll('?', '&')
        : `${moviesByFilter}?page=${pageIndex}` + location.search?.replaceAll('?', '&')
    },
    {
      revalidateFirstPage: false
    }
  )
  const movies = data?.flat()
  const isLastPage = movies?.[movies?.length - 1]?.page >= movies?.[movies?.length - 1]?.pages
  return { movies, isLoading, isValidating, setSize, size, error, isLastPage }
}

export default useMovies
