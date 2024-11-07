import { Button } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { useLocation, useNavigate } from 'react-router'
import MovieCard from './MovieCard'

import useSWR from 'swr'
import Scrollable from '@renderer/shared/ui/Scrollable'
import { IMovieResp } from '@renderer/widgets/layout/lib'
import { useSearchParams } from 'react-router-dom'
import { routesPaths } from '@renderer/shared/constants'
const api = import.meta.env.VITE_BASE_URL
const TopRated = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const moviesByFilter = api + routesPaths.movies + location.search
  const moviesByName = api + routesPaths.moviesByName + location.search
  const { data: movies, isLoading } = useSWR<IMovieResp>(
    searchParams.has('query') ? moviesByName : moviesByFilter
  )
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <div className="w-full flex p-8 flex-col gap-10">
        <div className="flex justify-start items-center gap-3">
          <Button isIconOnly variant="flat" type="submit" onClick={() => navigate('/')}>
            <IconsSVG.previous />
          </Button>
          <h1 className="text-[30px] font-bold text-[#F8B319]">Back home</h1>
        </div>
        <div>
          <h1 className="text-[48px] font-bold">Top Rated Movies</h1>
        </div>
        <Scrollable
          icon={<IconsSVG.arrow />}
          iconText="Swipe"
          className="flex flex-1 justify-start gap-7 w-full overflow-auto scrollbar-hide p-3"
        >
          {movies?.docs?.map((movie) => {
            return <MovieCard movieInfo={movie} />
          })}
        </Scrollable>
      </div>
    </>
  )
}

export default TopRated
