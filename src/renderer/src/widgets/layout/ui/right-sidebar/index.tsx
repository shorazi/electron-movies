import { Button, Card } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { useLocation } from 'react-router'

const RightSidebar = () => {
  const { pathname } = useLocation()

  if (pathname === '/top-rated') return null
  return (
    <div className="w-[335px] min-h-[90vh]">
      <div className="w-[335px] sticky min-h-[90vh] flex flex-col justify-between items-center">
        <div className="w-full min-h-[10vh] px-8 flex justify-between items-center">
          <Button isIconOnly variant="flat">
            <IconsSVG.bell />
          </Button>
          <div className="text-[18px] font-bold text-success">Marcus Junius B.</div>
          <Button isIconOnly variant="flat">
            <IconsSVG.user />
          </Button>
        </div>
        <div className="w-full min-h-[78vh] px-8">
          {/* start code here */}
          <Card className="w-full h-[78vh]" isBlurred />
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
