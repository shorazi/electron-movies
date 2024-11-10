import { Tab, Tabs } from '@nextui-org/react'
import SearchModal from '@renderer/widgets/searchbar'
import { memo } from 'react'

const Header = () => {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center">
      <Tabs
        variant="underlined"
        color="success"
        size="lg"
        onSelect={(e) => console.log(e)}
        onClick={(e) => console.log(e)}
        onChange={(e) => console.log(e)}
      >
        <Tab title="Movies" value={0} />
        <Tab title="TV Shows" value={1} />
        <Tab title="Anime" value={2} />
      </Tabs>
      <SearchModal />
    </div>
  )
}

export default memo(Header)
