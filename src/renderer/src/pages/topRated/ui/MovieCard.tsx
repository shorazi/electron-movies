import { Card, CardBody, Image } from '@nextui-org/react'
import { IMovie } from '@renderer/widgets/layout/data'

const MovieCard = ({ movieInfo }: { movieInfo: IMovie }) => {
  return (
    <Card key={movieInfo?.id} isBlurred isPressable>
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          loading="lazy"
          width="100%"
          alt={movieInfo?.name}
          className="w-full object-cover"
          src={movieInfo?.img}
          height={350}
        />
      </CardBody>
    </Card>
  )
}

export default MovieCard
