import { tokenInstance } from '@renderer/shared/utils'
import Layout from '@renderer/widgets/layout'
import { Navigate } from 'react-router'

const ProtectedLayout = () => {
  const { getToken } = tokenInstance
  return getToken() ? <Layout /> : <Navigate to="/authorization" replace />
}

export default ProtectedLayout
