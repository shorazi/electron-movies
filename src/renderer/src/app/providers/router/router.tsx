import Authorization from '@renderer/pages/authorization'
import CategoryPage from '@renderer/pages/category'
import HomePage from '@renderer/pages/home'
import TopRated from '@renderer/pages/topRated'
import MovieById from '@renderer/pages/MovieById'
import AllGenres from '@renderer/pages/genres'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'
import TopMovies from '@renderer/pages/topMovies'

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
        path: '/genres',
        element: <AllGenres />
      },
      {
        path: '/top-movies',
        element: <TopMovies />
      },
      {
        path: '/top-rated',
        element: <TopRated />
      },
      {
        path: '/top-rated/:id',
        element: <MovieById />
      },
      {
        path: '*',
        element: <div>Not found</div>
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
