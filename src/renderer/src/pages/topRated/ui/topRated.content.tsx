import { Button } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { useNavigate } from 'react-router'
import { data } from './data'
import MovieCard from './MovieCard'

const TopRated = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex p-8 flex-col gap-10">
      <div className="flex justify-start items-center gap-3">
        <Button isIconOnly variant="flat" onClick={() => navigate('/')}>
          <IconsSVG.previous />
        </Button>
        <h1 className="text-[30px] font-bold text-[#F8B319]">Back home</h1>
      </div>
      <div>
        <h1 className="text-[48px] font-bold">Top Rated Movies</h1>
      </div>
      <div className="flex flex-1 justify-start gap-7 w-full max-w-[850px] overflow-auto scrollbar-hide">
        {data?.map((movie) => {
          return <MovieCard movieInfo={movie} />
        })}
      </div>
    </div>
  )
}

export default TopRated
