import { Button, Card } from '@nextui-org/react'
import { IconsSVG, imagesPNG } from '@renderer/shared/assets'
import UIMainCard from '@renderer/shared/ui/MainCard/MainCard'
import Header from './header'

const HomePage = () => {
  return (
    <div className="w-full h-[95vh] px-8 flex flex-col justify-between items-center">
      <Header />
      <div className="w-full h-[80vh] flex flex-col justify-start items-center gap-4">
        <UIMainCard />
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
