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
    <div className="w-[235px] min-h-[90vh]">
      <div className="w-[235px] h-[90vh] flex flex-col justify-between items-center sticky">
        <div className="w-full min-h-[10vh]  flex justify-center items-center">
          {/* <ImagesSVG.logo width={176} /> */}
        </div>
        <div className="w-full min-h-[78vh] flex flex-col justify-between items-center">
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
                    onClick={() => {
                      handleNavigate(path)
                    }}
                    className="flex justify-start p-6 items-center text-primary"
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
