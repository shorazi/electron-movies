import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'

interface IProps {
  title?: string
  previousClick?: () => void
  nextClick?: () => void
  srcURL?: string
}

const UIMainCard = (props: IProps) => {
  const { previousClick, nextClick, srcURL, title } = props

  return (
    <Card isBlurred shadow="sm" className="w-full h-[250px] rounded-lg">
      <CardHeader className="w-full h-[250px] px-4 py-7 absolute z-10 top-1 flex flex-col justify-between items-start">
        <h1 className="text-5xl leading-4 text-primary font-[500] mb-[30px]">{title}</h1>
        <div className="w-full flex justify-between items-center">
          <Button
            isIconOnly
            variant="flat"
            color="secondary"
            onClick={() => previousClick && previousClick()}
          >
            <IconsSVG.previous />
          </Button>
          <Button
            isIconOnly
            variant="flat"
            color="secondary"
            onClick={() => nextClick && nextClick()}
          >
            <IconsSVG.next />
          </Button>
        </div>
        <div className="w-full flex justify-between items-center">
          <Button
            className="text-primary"
            variant="flat"
            color="secondary"
            startContent={<IconsSVG.add />}
            children="Watchlist"
          />
          <div className="w-16 h-7 bg-background2 rounded-md"></div>
          <Button className="text-background2" children="More Info" color="success" />
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={srcURL}
      />
    </Card>
  )
}

export default UIMainCard
