import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="">
      {/* <SideBar />
      <br /> */}
      <Outlet />
    </div>
  )
}

export default Layout
