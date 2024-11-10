import { Button } from '@nextui-org/react'
import TopMovies from '@renderer/entities/top-movies'
import { IconsSVG } from '@renderer/shared/assets'
import { UIBody, UIBodyTitle } from '@renderer/shared/ui'
import Scrollable from '@renderer/shared/ui/Scrollable'
import { useNavigate } from 'react-router'

const AllTopMovies = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex p-8 flex-col gap-10">
      <div className="flex justify-start items-center gap-3">
        <Button isIconOnly variant="flat" type="submit" onClick={() => navigate('/')}>
          <IconsSVG.previous />
        </Button>
        <UIBody>Back home</UIBody>
      </div>
      <div>
        <UIBodyTitle>Top Movies</UIBodyTitle>
      </div>
      <Scrollable
        icon={<IconsSVG.arrow />}
        iconText="Swipe"
        className="flex flex-1 justify-start gap-7 w-full overflow-auto scrollbar-hide p-3"
      >
        <TopMovies width={250} height={350} />
      </Scrollable>
    </div>
  )
}

export default AllTopMovies
