import { api } from '@renderer/shared/constants'
import useSWR from 'swr'
const useMovieById = (id: number | string) => {
  const { data: movie, isLoading, error } = useSWR(`${api}/movies?id=${id}`)
  return { movie, isLoading, error }
}

export default useMovieById
