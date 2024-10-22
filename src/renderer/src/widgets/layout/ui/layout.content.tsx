import { Outlet } from 'react-router'
import SideBar from './sidebar'

const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#2b2b2b] text-[#fff]">
      <div className="max-w-[1440px] w-[95%] h-[100vh] flex justify-start items-center">
        <div className="sticky">
          <SideBar />
        </div>
        <div className="w-full h-[90vh]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
