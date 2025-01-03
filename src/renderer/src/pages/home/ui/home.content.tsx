import { LocalMainMovies } from '@renderer/shared/lib'
import UIMainCard from '@renderer/shared/ui/MainCard/MainCard'
import { useState } from 'react'
import { useLocalMainMovies } from '../helper'
import Header from './header'
import Popular from './popular'

const HomePage = () => {
  const { nextClick, previousClick, underTopIndex } = useLocalMainMovies()
  const [tabIndex, setTabIndex] = useState(0)

  // useEffect(() => {
  //   console.log(tabIndex)
  // }, [tabIndex])

  return (
    <div className="w-full h-[95vh] px-8 flex flex-col justify-between items-center">
      <Header setTabIndex={setTabIndex} />
      <div className="w-full h-[80vh] flex flex-col justify-start items-center gap-4">
        <UIMainCard
          id={LocalMainMovies[tabIndex][underTopIndex].id}
          nextClick={nextClick}
          previousClick={previousClick}
          srcURL={LocalMainMovies[tabIndex][underTopIndex].poster.url}
          title={LocalMainMovies[tabIndex][underTopIndex].name}
        />
        {/* <div className="w-full flex flex-col justify-between items-start gap-4">
          <UIBody>Popular</UIBody>
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
        </div> */}
        <Popular />
      </div>
    </div>
  )
}

export default HomePage
