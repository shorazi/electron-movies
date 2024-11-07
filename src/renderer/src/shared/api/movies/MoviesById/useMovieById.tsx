// import { api } from '@renderer/shared/constants'
import useSWR from 'swr'
export const api = import.meta.env.VITE_BASE_URL
const useMovieById = (id: number | string) => {
  const { data: movie, isLoading } = useSWR(api + `/movies?id=${id}`)
  return { movie, isLoading }
}

export default useMovieById
