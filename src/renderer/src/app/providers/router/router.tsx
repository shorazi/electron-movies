import CategoryPage from '@renderer/pages/category'
import HomePage from '@renderer/pages/home'
import Layout from '@renderer/widgets/layout'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/category',
        element: <CategoryPage />
      }
    ]
  }
])

export default router
