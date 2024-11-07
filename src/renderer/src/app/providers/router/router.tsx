import Authorization from '@renderer/pages/authorization'
import CategoryPage from '@renderer/pages/category'
import HomePage from '@renderer/pages/home'
import TopRated from '@renderer/pages/topRated'
import MovieById from '@renderer/pages/MovieById'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/category',
        element: <CategoryPage />
      },
      {
        path: '/top-rated',
        element: <TopRated />
      },
      {
        path: '/top-rated/:id',
        element: <MovieById />
      }
    ]
  },
  {
    index: true,
    path: '/authorization',
    element: <Authorization />
  }
])

export default router
