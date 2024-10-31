import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { IconsSVG, imagesPNG } from '@renderer/shared/assets'

interface IProps {
  title?: string
  previousFnc?: () => void
  nextFnc?: () => void
  imageSrc?: string
}

const UIMainCard = (props: IProps) => {
  const { imageSrc = imagesPNG.main_image, nextFnc, previousFnc, title = 'The Crown' } = props

  return (
    <Card
      isBlurred
      shadow="md"
      className="w-full h-[250px] flex flex-col justify-between items-start rounded-lg"
    >
      <CardHeader className="w-full h-[250px] px-4 py-7 absolute z-10 top-1 flex flex-col justify-between items-start">
        <h1 className="text-5xl leading-4 text-primary font-[500] mb-[30px]">{title}</h1>
        <div className="w-full flex justify-between items-center">
          <Button
            isIconOnly
            variant="flat"
            color="secondary"
            onClick={() => previousFnc && previousFnc()}
          >
            <IconsSVG.previous />
          </Button>
          <Button isIconOnly variant="flat" color="secondary" onClick={() => nextFnc && nextFnc()}>
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
          <Button className="text-background" children="Watch Now" color="success" />
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={imageSrc}
      />
    </Card>
  )
}

export default UIMainCard
