import { Outlet } from 'react-router'
import SideBar from './sidebar'

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Layout
