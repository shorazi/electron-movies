import { Button } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { useNavigate } from 'react-router'
import { data } from './data'
import MovieCard from './MovieCard'

const TopRated = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex justify-start p-8 flex-col gap-5">
      <div className="flex justify-start items-center gap-3">
        <Button isIconOnly variant="flat" onClick={() => navigate('/')}>
          <IconsSVG.previous />
        </Button>
        <h1 className="text-[30px] font-bold text-[#F8B319]">Back home</h1>
      </div>
      <div>
        <h1 className="text-[48px] font-bold">Top Rated Movies</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-7">
        {data?.map((movie) => {
          return <MovieCard movieInfo={movie} />
        })}
      </div>
    </div>
  )
}

export default TopRated
