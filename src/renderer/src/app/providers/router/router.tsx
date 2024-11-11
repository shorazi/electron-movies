import MovieById from '@renderer/pages/MovieById'
import Authorization from '@renderer/pages/authorization'
import AllGenres from '@renderer/pages/genres'
import HomePage from '@renderer/pages/home'
import TopMovies from '@renderer/pages/topMovies'
import TopRated from '@renderer/pages/topRated'
import WishList from '@renderer/pages/wishlist'
import { createHashRouter } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'

const router = createHashRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
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
        path: '/wish-list',
        element: <WishList />
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
