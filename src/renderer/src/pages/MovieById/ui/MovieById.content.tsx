import { Button, Card, CardBody, Image } from '@nextui-org/react'
import WishlistButton from '@renderer/entities/wishlistButton/ui/WishlistButton'
import { useMovieById } from '@renderer/shared/api/movies'
import { IconsSVG } from '@renderer/shared/assets'
import { UIBody, UIBodyTitle } from '@renderer/shared/ui'
import Error from '@renderer/shared/ui/Error'
import Loader from '@renderer/shared/ui/Loader'
import { tokenInstance } from '@renderer/shared/utils'
import { useNavigate, useParams } from 'react-router'

const MovieById = () => {
  const navigate = useNavigate()
  const { getToken } = tokenInstance
  const { id } = useParams()
  const { movie, isLoading, error } = useMovieById(id!)

  if (error) return <Error error={error} />
  if (isLoading) return <Loader />

  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <Image
        width="100%"
        height="100vh"
        src={movie?.backdrop?.url || movie?.poster?.url}
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
      <div className="relative z-10 w-full flex flex-col gap-10 p-8 justify-center h-full">
        {/* Navigation */}
        <div className="flex items-center gap-3 w-full">
          <Button isIconOnly variant="flat" type="button" onClick={() => navigate('/')}>
            <IconsSVG.previous />
          </Button>
          <UIBody>Back home</UIBody>
        </div>

        <div className="flex gap-1 justify-between">
          <div className="flex flex-col gap-6 w-full max-w-[800px]">
            {/* Movie Title */}
            <UIBodyTitle>{movie?.name!}</UIBodyTitle>
            <p className="text-[28px] font-bold text-success">
              {movie?.rating?.imdb && 'Рейтинг ' + movie?.rating?.imdb}
            </p>
            <p className="text-[24px] font-bold text-secondary">
              {movie?.genres.length && 'Жанр: ' + movie?.genres.map((item) => ' ' + item.name)}
            </p>
            {/* Movie Description */}
            <UIBody>{movie?.description!}</UIBody>
            <div>
              <WishlistButton
                requestWatched={{
                  movie_id: movie?.id,
                  user_id: getToken()?.user_id,
                  status: 'Просмотрено'
                }}
                requestPending={{
                  movie_id: movie?.id,
                  user_id: getToken()?.user_id,
                  status: 'Отложено'
                }}
              />
            </div>
          </div>
          <Card
            key={movie?.id}
            isBlurred
            isPressable
            className="w-[240px] h-[300px] flex-shrink-0 flex-grow-0 flex-auto"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                loading="lazy"
                width={250}
                alt={movie?.name}
                className="object-cover h-full"
                src={movie?.poster?.url}
                height={300}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MovieById
