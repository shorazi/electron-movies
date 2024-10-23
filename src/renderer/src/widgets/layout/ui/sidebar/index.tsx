import { Button, Image } from '@nextui-org/react'
import { imagesSVG } from '@renderer/shared/assets'
import { memo, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { CaptionData } from '../../data'

const SideBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleNavigate = (navigatePathname: string) => {
    if (pathname !== navigatePathname) {
      navigate(navigatePathname)
    }
    console.log(navigatePathname, pathname, navigatePathname === pathname)
  }

  useEffect(() => {
    console.log(pathname)
  }, [pathname])
  return (
    <div className="md:w-56 w-32 min-h-[90vh] flex flex-col justify-start items-center sticky">
      <div className="w-full min-h-[10vh]" key="logo">
        <Image src={imagesSVG.logo} className="w-full" />
        {/* logo */}
      </div>
      <div className="w-full min-h-[80vh] flex flex-col justify-between items-center">
        {CaptionData.map(({ children, id, label }) => (
          <div
            key={'label' + id}
            className="w-full flex flex-col justify-start items-start mt-6 gap-4"
          >
            <h1 className="text-base text-secondary">{label}</h1>
            <div aria-label={'tab' + id} className="w-full flex flex-col justify-start items-start">
              {children.map((item) => (
                <Button
                  fullWidth
                  color="secondary"
                  variant="ghost"
                  children={item.name}
                  key={'tab' + item.id}
                  startContent={<Image src={item.icon} />}
                  onClick={() => {
                    handleNavigate(item.path)
                  }}
                  className="flex justify-start p-0 items-center text-primary"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(SideBar)
