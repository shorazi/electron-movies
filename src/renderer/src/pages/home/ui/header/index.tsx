import { Button, Tab, Tabs } from '@nextui-org/react'
import { IconsSVG } from '@renderer/shared/assets'
import { memo } from 'react'

const Header = () => {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center">
      <Tabs variant="underlined" color="success" size="lg">
        <Tab title="Movies" />
        <Tab title="TV Shows" />
        <Tab title="Anime" />
      </Tabs>
      <Button className="w-64 flex justify-between" variant="flat" color="secondary">
        <span className="flex gap-3">
          <IconsSVG.search />
          Search
        </span>
        <IconsSVG.filter />
      </Button>
    </div>
  )
}

export default memo(Header)
