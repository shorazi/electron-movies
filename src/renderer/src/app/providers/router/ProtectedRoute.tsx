import { tokenInstance } from '@renderer/shared/utils/tokenInstance'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
  const { getToken } = tokenInstance
  return getToken() ? <Outlet /> : <Navigate to="/authorization" replace />
}

export default ProtectedRoute
