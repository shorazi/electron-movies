import { api } from '@renderer/shared/constants'
import { IMovie } from '@renderer/widgets/layout/lib'
import useSWR from 'swr'
const useMovieById = (id: number | string) => {
  const { data: movie, isLoading, error } = useSWR<IMovie>(`${api}/movies?id=${id}`)
  return { movie, isLoading, error }
}

export default useMovieById
