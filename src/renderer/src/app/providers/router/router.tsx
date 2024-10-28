import Authorization from '@renderer/pages/authorization'
import CategoryPage from '@renderer/pages/category'
import HomePage from '@renderer/pages/home'
import TopRated from '@renderer/pages/topRated'
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
      },
      {
        path: '/top-rated',
        element: <TopRated />
      }
    ]
  },
  {
    path: '/authorization',
    element: <Authorization />
  }
])

export default router
