import MainOutlet from './outlet'
import RightSidebar from './right-sidebar'
import Sidebar from './sidebar'

const Layout = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-background text-primary">
      <div className="max-w-[1440px] w-full h-[100vh] flex justify-start items-center">
        <Sidebar />
        <MainOutlet />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Layout
