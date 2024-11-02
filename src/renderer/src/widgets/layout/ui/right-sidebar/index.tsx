import { Button, Card } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { tokenInstance } from '@renderer/shared/utils'
import { memo } from 'react'
import { useLocation } from 'react-router'

const RightSidebar = () => {
  const { getToken } = tokenInstance
  const { pathname } = useLocation()

  if (pathname === '/top-rated') return null
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
        <div className="w-full h-[80vh]">
          {/* start code here */}
          <Card className="w-full h-[80vh] bg-success" isBlurred />
        </div>
      </div>
    </div>
  )
}

export default memo(RightSidebar)
