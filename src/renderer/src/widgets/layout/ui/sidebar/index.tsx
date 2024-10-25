import { Button, Card } from '@nextui-org/react'
import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { CaptionData } from '../../data'

const SideBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleNavigate = (navigatePathname: string) => {
    if (pathname !== navigatePathname) {
      navigate(navigatePathname)
    }
  }

  return (
    <div className="w-[235px] min-h-[90vh] flex flex-col justify-start items-center sticky">
      <Card className="w-full min-h-[10vh]" isBlurred shadow="lg"></Card>
      {/* <ImagesSVG.logo /> */}
      <div className="w-full min-h-[80vh] flex flex-col justify-between items-center">
        {CaptionData.map(({ children, id, label }) => (
          <div
            key={'label' + id}
            className="w-full flex flex-col justify-start items-start mt-6 gap-4"
          >
            <h1 className="text-base text-secondary">{label}</h1>
            <div
              aria-label={'tab' + id}
              className="w-full flex flex-col justify-start items-start gap-2"
            >
              {children.map((item) => (
                <Button
                  fullWidth
                  color="secondary"
                  variant={item.id === 1 ? 'flat' : 'ghost'}
                  children={item.name}
                  key={'tab' + item.id}
                  size="lg"
                  onClick={() => {
                    handleNavigate(item.path)
                  }}
                  className="flex justify-start p-6 items-center text-primary"
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
