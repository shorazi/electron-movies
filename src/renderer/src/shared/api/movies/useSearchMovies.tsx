import { fetcher } from '@renderer/app/providers/swr/fetcher'
import { api, routesPaths } from '@renderer/shared/constants'
import { IMovie } from '@renderer/widgets/layout/lib'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'

interface RequestType {
  limit: number
  page: number
  pages: number
  total: number
  docs: IMovie[]
}

export async function getData(url: string) {
  return fetcher(url, {
    method: 'GET'
  })
}

const useSearchMovies = () => {
  const moviesByName = api + routesPaths.moviesByName + '?query='

  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')

  const {
    data: movies,
    isMutating: isLoading,
    trigger: mutate,
    error
  } = useSWRMutation<RequestType>(`${moviesByName + searchText}&page_size=10&page=${page}`, getData)

  return { mutate, movies, isLoading, error, page, setPage, searchText, setSearchText }
}

export default useSearchMovies
