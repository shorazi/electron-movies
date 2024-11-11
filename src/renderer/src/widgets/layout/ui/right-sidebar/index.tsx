import { Button } from '@nextui-org/react'
import Genres from '@renderer/entities/genres'
import TopMovies from '@renderer/entities/top-movies'
import { IconsSVG } from '@renderer/shared/assets'
import { pagesToHide, routesPaths } from '@renderer/shared/constants'
import Scrollable from '@renderer/shared/ui/Scrollable'
import { tokenInstance } from '@renderer/shared/utils'
import { memo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

const RightSidebar = () => {
  const { getToken } = tokenInstance

  const { pathname } = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()

  if (pathname.includes(pagesToHide[pathname]) || pathname.includes(String(id))) return null
  return (
    <div className="w-[335px] h-[95vh]">
      <div className="w-[335px] sticky px-4 h-[95vh] flex flex-col justify-between items-center">
        <div className="w-full h-[10vh] flex justify-between items-center">
          <Button isIconOnly variant="flat" color="secondary">
            <IconsSVG.bell />
          </Button>
          <div className="text-[18px] font-bold text-success">{getToken()}</div>
          <Button isIconOnly variant="flat" color="secondary">
            <IconsSVG.user />
          </Button>
        </div>
        <div className="w-full flex flex-col gap-7  h-[80vh]">
          {/* start code here */}
          <Scrollable
            title="Top Rated"
            variantButton="secondary"
            className="flex justify-start gap-6 w-full overflow-auto scrollbar-hide mb-2"
            seeMoreContent={
              <div className="flex justify-center items-center gap-1">
                <h1>See more</h1>
                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  children={<IconsSVG.next />}
                  onClick={() => navigate(routesPaths.topMovies)}
                />
              </div>
            }
          >
            <TopMovies />
          </Scrollable>
          <Scrollable
            title="Genres"
            variantButton="secondary"
            className="flex justify-start gap-6 w-full overflow-auto scrollbar-hide"
            seeMoreContent={
              <div className="flex justify-center items-center gap-1">
                <h1>See more</h1>
                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  children={<IconsSVG.next />}
                  onClick={() => navigate(routesPaths.genres)}
                />
              </div>
            }
          >
            <Genres />
          </Scrollable>
        </div>
      </div>
    </div>
  )
}

export default memo(RightSidebar)
