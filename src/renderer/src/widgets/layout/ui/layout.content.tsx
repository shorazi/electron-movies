import { Card } from '@nextui-org/react'
import { Outlet } from 'react-router'
import Sidebar from './sidebar'

const Layout = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-background text-primary">
      <div className="max-w-[1440px] w-[95%] min-h-[100vh] flex justify-start items-center">
        <Sidebar />
        <div className="w-full h-[100vh]">
          <Outlet />
        </div>
        <Card className="w-96 sticky min-h-[90vh] h-[90vh]" isBlurred />
      </div>
    </div>
  )
}

export default Layout
