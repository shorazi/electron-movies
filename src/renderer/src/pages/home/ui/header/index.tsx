import { Tab, Tabs } from '@nextui-org/react'
import SearchModal from '@renderer/widgets/searchbar'
import { memo } from 'react'

const Header = () => {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center">
      <Tabs variant="underlined" color="success" size="lg">
        <Tab title="Movies" />
        <Tab title="TV Shows" />
        <Tab title="Anime" />
      </Tabs>
      <SearchModal />
    </div>
  )
}

export default memo(Header)
