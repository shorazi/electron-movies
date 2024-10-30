import { Outlet } from 'react-router'

const MainOutlet = () => {
  return (
    <div className="w-full h-[95vh]">
      <Outlet />
    </div>
  )
}

export default MainOutlet
