export interface IMovieType {
  name: string | null
  poster_path: string | null
  alternativeName: string | null
  rating: string | null
  id: number
  genre: string | null
  year: number | null
}

export const dataMovies: IMovieType[] = [
  {
    name: 'Локи',
    alternativeName: 'Loki',
    id: 1203039,
    poster_path:
      'https://image.openmoviedb.com/kinopoisk-images/9784475/8daa730d-5b99-4add-adc9-f623db620735/orig',
    rating: '8.2',
    genre: 'фантастика',
    year: 2021
  },
  {
    name: 'Рик и Морти',
    alternativeName: 'Rick and Morty',
    id: 685246,
    poster_path:
      'https://image.openmoviedb.com/kinopoisk-images/10835644/9a7203bd-7f9d-4f45-bc39-cdf7d4156332/orig',
    rating: '9.1',
    genre: 'мультфильм',
    year: 2013
  },
  {
    name: 'Чернобыль',
    alternativeName: 'Чернобыль',
    id: 1227803,
    poster_path:
      'https://image.openmoviedb.com/kinopoisk-images/1600647/3d0b4a89-acd9-49ac-a83e-480c18c41baa/orig',
    rating: '9.3',
    genre: 'драма',
    year: 2019
  }
]
