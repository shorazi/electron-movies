import { Button } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { pagesToHide } from '@renderer/shared/constants'
import { tokenInstance } from '@renderer/shared/utils'
import { memo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { PathData } from '../../lib'

const { home, toprated, signout, genres, wishList } = PathData

const SideBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { id } = useParams()

  const handleNavigate = (navigatePathname: string) => {
    if (pathname !== navigatePathname) {
      navigate(navigatePathname)
    }
  }

  if (pathname.includes(pagesToHide[pathname]) || pathname.includes(String(id))) return null
  return (
    <div className="w-[235px] h-[95vh]">
      <div className="w-[235px] h-[95vh] flex flex-col justify-between items-center sticky pl-4">
        <div className="w-full h-[10vh] flex justify-center items-center">
          <p className="font-bold text-[42px] text-success">
            F<span className="text-secondary">i</span>
            lmFinder
          </p>
        </div>
        <div className="w-full h-[80vh] flex flex-col justify-between items-center">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h1 className="text-base text-secondary">Menu</h1>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <Button
                startContent={<IconsSVG.home />}
                fullWidth
                color="secondary"
                variant={home.path === pathname ? 'flat' : 'ghost'}
                children={home.name}
                size="lg"
                type="submit"
                onClick={() => {
                  handleNavigate(home.path)
                }}
                className="flex justify-start items-center text-primary"
              />
              <Button
                startContent={<IconsSVG.award />}
                fullWidth
                color="secondary"
                variant={toprated.path === pathname ? 'flat' : 'ghost'}
                children={toprated.name}
                size="lg"
                type="submit"
                onClick={() => {
                  handleNavigate(toprated.path)
                }}
                className="flex justify-start items-center text-primary"
              />
              <Button
                startContent={<IconsSVG.discover />}
                fullWidth
                color="secondary"
                variant={genres.path === pathname ? 'flat' : 'ghost'}
                children={genres.name}
                size="lg"
                type="submit"
                onClick={() => {
                  handleNavigate(genres.path)
                }}
                className="flex justify-start items-center text-primary"
              />
              <Button
                startContent={<IconsSVG.celebrities />}
                fullWidth
                color="secondary"
                variant={wishList.path === pathname ? 'flat' : 'ghost'}
                children={wishList.name}
                size="lg"
                type="submit"
                onClick={() => {
                  handleNavigate(wishList.path)
                }}
                className="flex justify-start items-center text-primary"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* <h1 className="text-base text-secondary">More</h1> */}
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <Button
                startContent={<IconsSVG.logout />}
                fullWidth
                color="secondary"
                variant="ghost"
                children={signout.name}
                size="lg"
                type="submit"
                onClick={() => {
                  tokenInstance.clearToken(), navigate(signout.path)
                }}
                className="flex justify-start items-center text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(SideBar)
