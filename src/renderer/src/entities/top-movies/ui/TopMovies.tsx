import { useMemo } from 'react'
import { topMovies } from './top-movies'
import { Card, CardHeader, Image } from '@nextui-org/react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const TopMovies = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleFindMovie = (title: string) => {
    navigate('/top-rated')
    searchParams.set('query', title)
    setSearchParams(searchParams)
  }
  const movieParser = useMemo(() => {
    return topMovies?.map((movie, index) => {
      return (
        <Card
          key={index}
          isBlurred
          isPressable
          className="w-[210px] flex-shrink-0 flex-grow-0 flex-auto"
          onClick={() => handleFindMovie(movie?.title as string)}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">{movie?.title}</h4>
          </CardHeader>
          <Image
            removeWrapper
            width={210}
            height={99}
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={top?.img}
          />
        </Card>
      )
    })
  }, [])
  return <>{movieParser}</>
}

export default TopMovies
