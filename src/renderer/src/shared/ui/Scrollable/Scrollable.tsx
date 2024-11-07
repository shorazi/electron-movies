import { Button } from '@nextui-org/react'
import { CSSProperties, ReactNode, useRef } from 'react'

const Scrollable = ({
  children,
  icon,
  iconText,
  className = '',
  style = {},
  title = ''
}: {
  children: ReactNode
  icon: ReactNode
  iconText?: string
  className?: string
  style?: CSSProperties
  title?: string
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleArrow = () => {
    const scrollAmount = 150
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount
    }
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        {title && <h1 className="text-[24px] font-bold">{title}</h1>}
        <div ref={scrollRef} style={style} className={`${className}`}>
          {children}
        </div>
      </div>
      <div className="flex justify-center">
        <Button color="primary" variant="light" onClick={handleArrow} endContent={icon}>
          {iconText}
        </Button>
      </div>
    </>
  )
}

export default Scrollable
