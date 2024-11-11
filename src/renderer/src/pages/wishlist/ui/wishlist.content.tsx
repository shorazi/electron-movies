import { Button, Tab, Tabs } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { UIBody, UIBodyTitle } from '@renderer/shared/ui'
import Error from '@renderer/shared/ui/Error'
import Loader from '@renderer/shared/ui/Loader'

import { useNavigate } from 'react-router'

import useWishlist from '@renderer/shared/api/movies/useWishlist'
const WishList = () => {
  const navigate = useNavigate()
  const { wishlist, error, isLoading } = useWishlist()
  console.log(wishlist)

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
        <UIBodyTitle>Wishlist</UIBodyTitle>
      </div>
      <div className="flex w-full flex-col items-center">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-[#22d3ee]',
            tab: 'max-w-fit px-0 h-12',
            tabContent: 'group-data-[selected=true]:text-[#06b6d4]'
          }}
        >
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <span>Просмотрено</span>
              </div>
            }
          />
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <span>Отложено</span>
              </div>
            }
          />
        </Tabs>
      </div>

      {/* <Scrollable
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
      </Scrollable> */}
    </div>
  )
}

export default WishList
