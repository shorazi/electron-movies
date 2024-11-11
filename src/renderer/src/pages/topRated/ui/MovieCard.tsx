import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { IMovie } from '@renderer/widgets/layout/lib'
import { useNavigate } from 'react-router'

const MovieCard = ({ movieInfo }: { movieInfo: IMovie }) => {
  const navigate = useNavigate()
  return (
    <Card
      key={movieInfo?.id}
      isBlurred
      isPressable
      className="w-[240px] flex-shrink-0 flex-grow-0 flex-auto rounded-b-none"
      onPress={() => {
        navigate(`/top-rated/${movieInfo?.id}`)
      }}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          loading="lazy"
          width={250}
          alt={movieInfo?.name || ''}
          className="object-cover"
          src={movieInfo?.poster?.url || ''}
          height={300}
        />
      </CardBody>
      <CardFooter className="flex flex-col justify-center items-start">
        <h1
          className="m-0 text-[#fff] text-[25px] text-ellipsis overflow-hidden whitespace-nowrap w-full"
          title={movieInfo?.name || movieInfo?.alternativeName || ''}
        >
          {movieInfo?.name}
        </h1>
        <p className="text-[#fff]">{movieInfo?.year}</p>
      </CardFooter>
    </Card>
  )
}

export default MovieCard
