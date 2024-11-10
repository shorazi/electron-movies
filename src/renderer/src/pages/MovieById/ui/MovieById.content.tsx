import { Button, Image } from '@nextui-org/react'
import { useMovieById } from '@renderer/shared/api/movies'
import { IconsSVG } from '@renderer/shared/assets'
import { UIBody, UIBodyTitle } from '@renderer/shared/ui'
import Loader from '@renderer/shared/ui/Loader'
import { useNavigate, useParams } from 'react-router'

const MovieById = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { movie, isLoading, error } = useMovieById(id!)
  if (error) return <div>{error?.message}</div>
  if (isLoading) return <Loader />
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <Image
        width="100%"
        height="100vh"
        src={movie?.backdrop?.url}
        alt={`${movie?.name}`}
        className="fixed object-cover z-0 m-0 p-0 rounded-none right-0 left-0 top-0"
      />

      {/* Overlay */}
      <div
        className="fixed w-full h-full right-0 left-0 top-0 z-1"
        style={{
          backdropFilter: 'blur(1px) brightness(0.5)'
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full flex flex-col gap-10 p-8">
        {/* Navigation */}
        <div className="flex items-center gap-3 w-full">
          <Button isIconOnly variant="flat" type="button" onClick={() => navigate('/')}>
            <IconsSVG.previous />
          </Button>
          <UIBody>Back home</UIBody>
        </div>

        {/* Movie Title */}
        <div>
          <UIBodyTitle>{movie?.name!}</UIBodyTitle>
        </div>

        {/* Movie Description */}
        <div>
          <UIBody>{movie?.description!}</UIBody>
        </div>
      </div>
    </div>
  )
}

export default MovieById
