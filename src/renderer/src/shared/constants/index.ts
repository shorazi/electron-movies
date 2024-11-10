export const USER_TOKEN_KEY_LOCALSTORAGE = 'token'
export const api = import.meta.env.VITE_BASE_URL

export const routerPaths = {
  login: '/authorization'
}
export const routesPaths = {
  signIn: '/auth/login',
  signUp: '/auth/register',
  movies: '/movies/search',
  moviesByName: '/movies/search/name',
  genres: '/genres',
  topMovies: '/top-movies'
}

export const pagesToHide = {
  '/top-rated': '/top-rated',
  '/genres': '/genres',
  '/top-movies': '/top-movies'
}

// registration - /auth/register
// login - /auth/login
// top - /movies/top
// personal cabinet - /user/profile?user_id=1
// genres - /genres/getList
// search && filter - /movies/search?title=Inception&year_range=1980-2010
// title=None, genre=None, year_range=None, rating_range=None, page=1, page_size=10
