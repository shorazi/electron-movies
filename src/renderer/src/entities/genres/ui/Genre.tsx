import { Card, CardHeader, Image } from '@nextui-org/react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { genres } from '../lib'

const Genres = ({ width = 210, height = 99 }: { width?: number; height?: number }) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleFindGenre = (name: string) => {
    navigate('/top-rated')
    searchParams.set('genre', name)
    setSearchParams(searchParams)
  }
  const genreParser = useMemo(() => {
    return genres?.map((genre) => {
      return (
        <Card
          key={genre?.id}
          isBlurred
          isPressable
          className="w-[210px] flex-shrink-0 flex-grow-0 flex-auto"
          onClick={() => handleFindGenre(genre?.name)}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">{genre?.name}</h4>
          </CardHeader>
          <Image
            removeWrapper
            width={width}
            height={height}
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={genre?.img}
          />
        </Card>
      )
    })
  }, [genres])
  return genreParser
}

export default Genres
