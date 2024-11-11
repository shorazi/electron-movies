import { Card, CardHeader, Image } from '@nextui-org/react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import { dataMovies, topMovies } from '../lib'

const TopMovies = ({ width = 210, height = 99 }: { width?: number; height?: number }) => {
  const navigate = useNavigate()
  // const [searchParams, setSearchParams] = useSearchParams()

  const handleFindMovie = (id: number) => {
    navigate('/top-rated/' + id)
    // searchParams.set('query', title)
    // setSearchParams(searchParams)
  }
  const movieParser = useMemo(() => {
    return dataMovies?.map((movie, index) => {
      return (
        <Card
          key={index}
          isBlurred
          isPressable
          className="w-[210px] flex-shrink-0 flex-grow-0 flex-auto"
          onPress={() => handleFindMovie(movie.id)}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">
              {movie?.name || movie?.alternativeName || 'Undefinded'}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            width={width}
            height={height}
            alt="Card background"
            className="z-0 w-full h-full object-cover bg-black/40"
            src={movie?.backdrop.url || movie?.backdrop?.previewUrl || movie?.poster.url || ''}
          />
        </Card>
      )
    })
  }, [topMovies])
  return <>{movieParser}</>
}

export default TopMovies
