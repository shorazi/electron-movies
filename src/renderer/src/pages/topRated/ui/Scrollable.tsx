import { Button } from '@nextui-org/react'
import { CSSProperties, ReactNode, useRef } from 'react'

const Scrollable = ({
  children,
  icon,
  iconText,
  className = '',
  style = {}
}: {
  children: ReactNode
  icon: ReactNode
  iconText?: string
  className?: string
  style?: CSSProperties
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
      <div ref={scrollRef} style={style} className={`${className}`}>
        {children}
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
