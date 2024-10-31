import { Button } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { CaptionData } from '../../lib'

const SideBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleNavigate = (navigatePathname: string) => {
    if (pathname !== navigatePathname) {
      navigate(navigatePathname)
    }
  }

  if (pathname === '/top-rated') return null
  return (
    <div className="w-[235px] h-[95vh]">
      <div className="w-[235px] h-[95vh] flex flex-col justify-between items-center sticky pl-4">
        <div className="w-full h-[10vh] flex justify-center items-center">
          {/* <ImagesSVG.logo /> */}
          {/* <p>FilmFinder</p> */}
        </div>
        <div className="w-full h-[80vh] flex flex-col justify-between items-center">
          {CaptionData.map(({ children, id, label }) => (
            <div
              key={'label' + id}
              className="w-full flex flex-col justify-start items-start gap-4"
            >
              <h1 className="text-base text-secondary">{label}</h1>
              <div
                aria-label={'tab' + id}
                className="w-full flex flex-col justify-start items-start gap-2"
              >
                {children.map(({ id, name, path }) => (
                  <Button
                    startContent={<IconsSVG.celebrities />}
                    fullWidth
                    color="secondary"
                    variant={path === pathname ? 'flat' : 'ghost'}
                    children={name}
                    key={'tab' + id}
                    size="lg"
                    type="submit"
                    onClick={() => {
                      handleNavigate(path)
                    }}
                    className="flex justify-start items-center text-primary"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(SideBar)
