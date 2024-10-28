import { Button, Card, Tab, Tabs } from '@nextui-org/react'
import { IconsSVG, imagesPNG } from '@renderer/shared/assets'

const HomePage = () => {
  return (
    <div className="w-full h-[90vh] px-8 flex flex-col justify-between items-center">
      <div className="w-full min-h-[10vh] flex justify-between items-center">
        <Tabs variant="underlined" color="success" size="lg">
          <Tab title="Movies" />
          <Tab title="TV Shows" />
          <Tab title="Anime" />
        </Tabs>
        <Button className="w-64 flex p-6 justify-between" variant="flat" color="secondary">
          <span className="flex gap-3">
            <IconsSVG.search />
            Search
          </span>
          <IconsSVG.filter />
        </Button>
      </div>
      <div className="w-full min-h-[78vh] flex flex-col justify-between items-center">
        <Card
          style={{ backgroundImage: `url(${imagesPNG.main_image})`, backgroundSize: '100%' }}
          isBlurred
          shadow="lg"
          className="w-full h-[350px] flex flex-col justify-between items-start px-6 py-10 rounded-lg"
        >
          <h1 className="text-5xl text-primary font-[500] mb-[30px]">The Crown</h1>
          <div className="w-full flex justify-between items-center">
            <Button isIconOnly variant="flat">
              <IconsSVG.previous />
            </Button>
            <Button isIconOnly variant="flat">
              <IconsSVG.next />
            </Button>
          </div>
          <div className="w-full flex justify-between items-center">
            <Button
              className="text-primary"
              variant="flat"
              startContent={<IconsSVG.add />}
              children="Watchlist"
            />
            <div className="w-16 h-7 bg-background2 rounded-md"></div>
            <Button className="text-background" children="Watch Now" color="success" />
          </div>
        </Card>
        <div className="w-full flex flex-col justify-between items-start rounded-lg">
          <h1 className="text-3xl font-[500] mb-[30px]">Popular</h1>
          <div className="w-full h-72 rounded-lg flex gap-8 overflow-x-hidden">
            {['Loki', 'Rick and Morty', 'Farcry'].map((item) => (
              <Card
                style={{ backgroundImage: `url(${imagesPNG.card_image})` }}
                key={'recom' + item}
                isBlurred
                className="text-primary w-[237px] h-72 pt-5 pb-2 px-6 flex flex-col justify-between items-start"
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
                    <Button isIconOnly variant="flat" children={<IconsSVG.add />} />
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
