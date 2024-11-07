export const USER_TOKEN_KEY_LOCALSTORAGE = 'token'

export const routerPaths = {
  login: '/authorization'
}
export const routesPaths = {
  signIn: '/auth/login',
  signUp: '/auth/register',
  movies: '/movies/search',
  moviesByName: '/movies/search/name'
}

// registration - /auth/register
// login - /auth/login
// top - /movies/top
// personal cabinet - /user/profile?user_id=1
// genres - /genres/getList
// search && filter - /movies/search?title=Inception&year_range=1980-2010
// title=None, genre=None, year_range=None, rating_range=None, page=1, page_size=10
