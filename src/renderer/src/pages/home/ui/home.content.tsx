import { Button, Card } from '@nextui-org/react'
import { IconsSVG, imagesPNG } from '@renderer/shared/assets'
import { MainCard } from '@renderer/shared/ui'
import Header from './header'

const HomePage = () => {
  return (
    <div className="w-full h-[95vh] px-8 flex flex-col justify-between items-center">
      <Header />
      <div className="w-full h-[80vh] flex flex-col justify-start items-center gap-4">
        {/* <Card
          isBlurred
          shadow="md"
          className="w-full h-[240px] flex flex-col justify-between items-start rounded-lg"
        >
          <CardHeader className="w-full h-[240px] px-4 py-7 absolute z-10 top-1 flex flex-col justify-between items-start">
            <h1 className="text-5xl leading-4 text-primary font-[500] mb-[30px]">The Crown</h1>
            <div className="w-full flex justify-between items-center">
              <Button isIconOnly variant="flat" color="secondary">
                <IconsSVG.previous />
              </Button>
              <Button isIconOnly variant="flat" color="secondary">
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
            src={imagesPNG.main_image}
          />
        </Card> */}
        <MainCard />
        <div className="w-full flex flex-col justify-between items-start gap-4">
          <h1 className="text-3xl font-[500]">Popular</h1>
          <div className="w-full rounded-lg flex gap-8 overflow-x-hidden">
            {['Loki', 'Rick and Morty', 'Farcry'].map((item) => (
              <Card
                style={{ backgroundImage: `url(${imagesPNG.card_image})` }}
                key={'popularFilm' + item}
                isBlurred
                shadow="md"
                className="text-primary w-[200px] h-60 pt-4 pb-3 px-4 flex flex-col justify-between items-start"
              >
                <div className="w-full">
                  <p className="text-2xl font-medium">{item}</p>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <div className="w-full flex justify-between items-center">
                    <p>6 ep</p>
                    <p>Mini Series</p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <Button
                      isIconOnly
                      variant="flat"
                      color="secondary"
                      children={<IconsSVG.add />}
                    />
                    <Button className="text-background" color="success" children="More Info" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
