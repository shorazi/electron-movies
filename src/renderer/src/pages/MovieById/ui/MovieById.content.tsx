import { useMovieById } from '@renderer/shared/api/movies'
import Loader from '@renderer/shared/ui/Loader'
import { useParams } from 'react-router'

const MovieById = () => {
  const { id } = useParams()
  const { movie, isLoading, error } = useMovieById(id!)
  if (error) return <div>{error?.message}</div>
  if (isLoading) return <Loader />
  return (
    <>
      <div>{movie?.name}</div>
    </>
  )
}

export default MovieById
