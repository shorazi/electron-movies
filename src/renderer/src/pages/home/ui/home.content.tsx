import { Button, Card } from '@nextui-org/react'
import { IconsSVG, imagesPNG } from '@renderer/shared/assets'
import { UIBody } from '@renderer/shared/ui'
import UIMainCard from '@renderer/shared/ui/MainCard/MainCard'
import Header from './header'

const HomePage = () => {
  return (
    <div className="w-full h-[95vh] px-8 flex flex-col justify-between items-center">
      <Header />
      <div className="w-full h-[80vh] flex flex-col justify-start items-center gap-4">
        <UIMainCard />
        <div className="w-full flex flex-col justify-between items-start gap-4">
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
        </div>
      </div>
    </div>
  )
}

export default HomePage

function multiply(a, b) {
  let result = 0
  for (let i = 1; i < b; i++) {
    result = add(result, a)
  }
  return result
}

// function minus(a, b) {
//   return Math.max(a, b) % Math.min(a, b)
// }

function Delete(a, b) {
  let max = Math.max(a, b)
  let min = Math.min(a, b)
  let result = 0
  while (max > 0) {
    max = max - min
    result = add(result, 1)
  }
}

function add(a, b) {
  while (b !== 0) {
    let carry = a & b

    a = a ^ b

    b = carry << 1
  }
  return a
}

console.log(add(23, 1))
