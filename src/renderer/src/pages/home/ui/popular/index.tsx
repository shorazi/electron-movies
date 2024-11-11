import { Button, Card } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { UIBody } from '@renderer/shared/ui'
import { memo } from 'react'
import { useNavigate } from 'react-router'
import { dataMovies } from '../../lib'

const Popular = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col justify-between items-start gap-4">
      <UIBody>Popular</UIBody>
      <div className="w-full rounded-lg grid grid-cols-3 gap-8 overflow-x-hidden">
        {dataMovies.map((movie) => (
          <Card
            style={{
              backgroundImage: `url(${movie?.poster_path || ''})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            key={movie.id}
            isBlurred
            shadow="md"
            className="text-primary h-60 pt-4 pb-3 px-4 flex flex-col justify-between items-start"
          >
            <div className="w-full">
              <p className="text-2xl font-medium">{movie.name}</p>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex justify-between items-center">
                <p>{movie.year}</p>
                <p>{movie.genre}</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <Button isIconOnly variant="flat" color="secondary" children={<IconsSVG.add />} />
                <Button
                  onClick={() => navigate(`/top-rated/${movie.id}`)}
                  className="text-background"
                  color="success"
                  children="More Info"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default memo(Popular)
