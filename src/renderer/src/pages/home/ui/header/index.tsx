import { Tab, Tabs } from '@nextui-org/react'
import SearchModal from '@renderer/widgets/searchbar'
import { memo } from 'react'

const Header = ({ setTabIndex }: { setTabIndex: (e: number) => void }) => {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center">
      <Tabs
        size="lg"
        variant="underlined"
        color="success"
        onSelect={(e) => console.log(e)}
        onSelectionChange={(e) => setTabIndex(Number(e))}
      >
        <Tab onClick={() => setTabIndex(0)} title="Movies" key={0} />
        <Tab onClick={() => setTabIndex(1)} title="TV Shows" key={1} />
        <Tab onClick={() => setTabIndex(2)} title="Anime" key={2} />
      </Tabs>
      <SearchModal />
    </div>
  )
}

export default memo(Header)
