import { Button } from '@nextui-org/react'
import { useMovies } from '@renderer/shared/api/movies'
import { IconsSVG } from '@renderer/shared/assets'
import useInfiniteScrolling from '@renderer/shared/hooks'
import { UIBody, UIBodyTitle } from '@renderer/shared/ui'
import Error from '@renderer/shared/ui/Error'
import Loader from '@renderer/shared/ui/Loader'
import Scrollable from '@renderer/shared/ui/Scrollable'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import MovieCard from './MovieCard'
import ScrollSpinner from './ScrollSpinner'

const TopRated = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { movies, isLoading, isValidating, setSize, size, error, isLastPage } = useMovies()
  const { handleLoaderRef } = useInfiniteScrolling(setSize, size, isValidating, isLastPage)

  if (isLoading) return <Loader />
  if (error) return <Error error={error} />

  return (
    <div className="w-full flex p-8 flex-col gap-10">
      <div className="flex justify-start items-center gap-3">
        <Button isIconOnly variant="flat" type="submit" onClick={() => navigate('/')}>
          <IconsSVG.previous />
        </Button>
        <UIBody>Back home</UIBody>
      </div>
      <div>
        <UIBodyTitle>
          {searchParams.get('genre') ? 'Genre: ' + searchParams.get('genre') : 'Top Rated Movies'}
        </UIBodyTitle>
      </div>
      <Scrollable
        icon={<IconsSVG.arrow />}
        iconText="Swipe"
        className="flex flex-1 justify-start gap-7 w-full overflow-auto scrollbar-hide p-3"
      >
        {movies?.map((data) => {
          return data?.docs?.map((movie) => {
            return <MovieCard key={movie.id} movieInfo={movie} />
          })
        })}
        <div ref={handleLoaderRef}></div>
        <ScrollSpinner isValidating={isValidating} />
      </Scrollable>
    </div>
  )
}

export default TopRated
