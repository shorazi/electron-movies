import useMovieById from '@renderer/shared/api/movies/MoviesById'
import Loader from '@renderer/shared/ui/Loader'
import { useParams } from 'react-router'

const MovieById = () => {
  const { id } = useParams()
  const { movie, isLoading } = useMovieById(id!)
  if (isLoading) return <Loader />
  return (
    <>
      <div>Hello</div>
      <div>{movie?.name}</div>
    </>
  )
}

export default MovieById
