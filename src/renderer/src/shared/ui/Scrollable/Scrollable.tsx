import { Button } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { CSSProperties, ReactNode, useRef } from 'react'
import { UIBody } from '../Typography'

interface IProps {
  children: ReactNode
  icon?: ReactNode
  iconText?: string
  className?: string
  style?: CSSProperties
  title?: string
  variantButton?: 'default' | 'secondary'
  seeMoreContent?: ReactNode
}

const Scrollable = (props: IProps) => {
  const {
    children,
    icon = <IconsSVG.next />,
    iconText,
    className = '',
    style = {},
    title = '',
    variantButton = 'default',
    seeMoreContent = ''
  } = props
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleArrowNext = () => {
    const scrollAmount = 150
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount
    }
  }

  const handleArrowPrevious = () => {
    const scrollAmount = 150
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex justify-center items-center gap-1">
            {title && <UIBody>{title}</UIBody>}
            {variantButton === 'secondary' ? (
              <>
                <Button
                  size="sm"
                  isIconOnly
                  color="secondary"
                  variant="ghost"
                  onClick={handleArrowPrevious}
                  children={<IconsSVG.previous />}
                />
                <Button
                  size="sm"
                  isIconOnly
                  color="secondary"
                  variant="ghost"
                  onClick={handleArrowNext}
                  children={<IconsSVG.next />}
                />
              </>
            ) : null}
          </div>
          {seeMoreContent}
        </div>
        <div ref={scrollRef} style={style} className={className}>
          {children}
        </div>
      </div>
      {variantButton === 'default' ? (
        <div className="flex justify-center">
          <Button color="primary" variant="light" onClick={handleArrowNext} endContent={icon}>
            {iconText}
          </Button>
        </div>
      ) : null}
    </>
  )
}

export default Scrollable
