import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { IMovie } from '@renderer/widgets/layout/lib'

const MovieCard = ({ movieInfo }: { movieInfo: IMovie }) => {
  return (
    <Card
      key={movieInfo?.id}
      isBlurred
      isPressable
      className="w-[240px] flex-shrink-0 flex-grow-0 flex-auto bg-black rounded-b-none"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          loading="lazy"
          width={250}
          alt={movieInfo?.name}
          className="object-cover rounded-none"
          src={movieInfo?.img}
          height={350}
        />
      </CardBody>
      <CardFooter className="flex flex-col justify-center items-start">
        <h1 className="text-[#fff] text-[25px]">{movieInfo?.name}</h1>
        <p className="text-[#fff]">{movieInfo?.date}</p>
      </CardFooter>
    </Card>
  )
}

export default MovieCard
