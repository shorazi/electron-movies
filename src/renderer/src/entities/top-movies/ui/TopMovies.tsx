import { Card, CardHeader, Image } from '@nextui-org/react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { topMovies } from '../lib'

const TopMovies = ({ width = 210, height = 99 }: { width?: number; height?: number }) => {
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
          onPress={() => handleFindMovie(movie?.title as string)}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">{movie?.title || 'Undefinded'}</h4>
          </CardHeader>
          <Image
            removeWrapper
            width={width}
            height={height}
            alt="Card background"
            className="z-0 w-full h-full object-cover bg-black/40"
            src={
              'https://image.openmoviedb.com/kinopoisk-images/1773646/85356576-893c-4ef7-86a5-23e37110f346/orig'
            }
          />
        </Card>
      )
    })
  }, [topMovies])
  return <>{movieParser}</>
}

export default TopMovies
