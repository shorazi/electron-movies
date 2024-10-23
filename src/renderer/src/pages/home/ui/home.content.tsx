import { Button, Card, Image, Input, Tab, Tabs } from '@nextui-org/react'
import { iconsSVG } from '@renderer/shared/assets'

const HomePage = () => {
  return (
    <div className="w-full min-h-[90vh] px-8 flex flex-col justify-between items-center">
      <div className="w-full h-16 flex justify-between items-center">
        <Tabs variant="underlined" color="success" size="lg" className="text-primary">
          <Tab title="Movies" />
          <Tab title="TV Shows" />
          <Tab title="Anime" />
        </Tabs>
        <Input
          type="search"
          startContent={<Image src={iconsSVG.home} />}
          className="w-80"
          placeholder="search"
          // variant="flat"
          // color="primary"
        />
      </div>
      <Card
        isBlurred
        shadow="lg"
        className="w-full h-[350px] flex flex-col justify-between items-start px-5 py-10 rounded-lg"
      >
        <h1 className="text-5xl text-primary font-[500] mb-[30px]">Popular</h1>
        <div className="w-full flex justify-between items-center">
          <Button isIconOnly>
            <Image src={iconsSVG.logout} />
          </Button>
          <Button isIconOnly>
            <Image src={iconsSVG.logout} />
          </Button>
        </div>
        <div className="w-full flex justify-between items-center">
          <Button
            variant="shadow"
            startContent={<Image src={iconsSVG.logout} />}
            children="Watchlist"
          />
          <div className="w-16 h-7 bg-background2 rounded-md"></div>
          <Button
            className="text-black"
            startContent={<Image src={iconsSVG.logout} />}
            children="Watch Now"
            color="success"
          />
        </div>
      </Card>
      <div className="w-full flex flex-col justify-between items-start rounded-lg">
        <h1 className="text-3xl font-[500] mb-[30px]">Popular</h1>
        <div className="w-full h-72 rounded-lg flex gap-8 overflow-x-hidden">
          {[1, 2, 5].map((item) => (
            <Card
              key={'recom' + item}
              className="bg-secondary text-primary w-[237px] h-72 pt-5 pb-2 px-5 flex flex-col justify-between items-start"
            >
              <div className="w-full">
                <p className="text-2xl font-medium">Chernobyl</p>
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex justify-between items-center">
                  <p>6 ep</p>
                  <p>Mini Series</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <Button isIconOnly children={<Image src={iconsSVG.settings} />} />
                  <Button color="success" children="More Info" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
