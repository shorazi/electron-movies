import { Outlet } from 'react-router'

const MainOutlet = () => {
  return (
    <div className="w-full min-h-[90vh]">
      <Outlet />
    </div>
  )
}

export default MainOutlet
