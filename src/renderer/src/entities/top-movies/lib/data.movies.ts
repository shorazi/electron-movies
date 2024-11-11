interface IMovieType {
  id: number
  name: string | null
  alternativeName: string | null
  poster: {
    url: string | null
    previewUrl?: string | null
  }
  backdrop: {
    url: string | null
    previewUrl?: string | null
  }
  genres: { name: string }[]
  year: number
  rating: {
    imdb: number
  }
}

export const dataMovies: IMovieType[] = [
  {
    alternativeName: 'SolarBalls',
    backdrop: {
      url: 'https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018d17ba77ff1a51d6dcf883ad802c/orig'
    },
    genres: [
      {
        name: 'мультфильм'
      },
      {
        name: 'фантастика'
      },
      {
        name: 'драма'
      },
      {
        name: 'комедия'
      }
    ],
    id: 5444474,
    poster: {
      url: 'https://image.openmoviedb.com/kinopoisk-images/1898899/f1887ac1-729e-4873-9588-ac31b50c68da/orig'
    },
    rating: {
      imdb: 9.2
    },
    name: null,
    year: 2022
  },
  {
    alternativeName: null,
    backdrop: {
      url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a000001769bfbeedbaf9e85edadc76f84d3/orig'
    },
    genres: [
      {
        name: 'документальный'
      }
    ],
    id: 2500772,
    name: 'Жизнь человека. Последнее интервью',
    poster: {
      url: 'https://image.openmoviedb.com/kinopoisk-images/1600647/5df6b993-23e1-483d-93be-34a1114e7901/orig'
    },
    rating: {
      imdb: 0
    },
    year: 2020
  },
  {
    alternativeName: null,
    backdrop: {
      url: 'https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a00000161423295cb795c68987d01d4268b/orig'
    },
    genres: [
      {
        name: 'мультфильм'
      },
      {
        name: 'фантастика'
      },
      {
        name: 'детский'
      }
    ],
    id: 1072974,
    name: 'Герои Энвелла',
    poster: {
      url: 'https://image.openmoviedb.com/kinopoisk-images/6201401/98dea5ec-a546-4c3f-82fd-7fc7420e04f8/orig'
    },
    rating: {
      imdb: 0
    },
    year: 2017
  },
  {
    alternativeName: 'BTS: Blood Sweat & Tears',
    backdrop: {
      url: null
    },
    genres: [
      {
        name: 'короткометражка'
      },
      {
        name: 'музыка'
      }
    ],
    id: 1201206,
    name: null,
    poster: {
      url: null
    },
    rating: {
      imdb: 0
    },
    year: 2016
  },
  {
    alternativeName: 'Lords of the Lockerroom',
    backdrop: {
      previewUrl: null,
      url: null
    },
    genres: [
      {
        name: 'для взрослых'
      },
      {
        name: 'спорт'
      }
    ],
    id: 1252447,
    name: 'Лорды раздевалки',
    poster: {
      previewUrl: null,
      url: null
    },
    rating: {
      imdb: 9.4
    },
    year: 1999
  },
  {
    alternativeName: 'Team Hot Wheels: Build the Epic Race',
    backdrop: {
      previewUrl: 'https://image.openmoviedb.com/tmdb-images/w500/jcQ54R34zTTioPYz6L3HPNTNNOe.jpg',
      url: 'https://image.openmoviedb.com/tmdb-images/original/jcQ54R34zTTioPYz6L3HPNTNNOe.jpg'
    },
    genres: [
      {
        name: 'мультфильм'
      },
      {
        name: 'детский'
      }
    ],
    id: 952236,
    name: 'Hot Wheels. Мегатрасса',
    poster: {
      previewUrl:
        'https://image.openmoviedb.com/kinopoisk-images/4303601/6f264ae2-ce76-4179-b63d-68d324789758/x1000',
      url: 'https://image.openmoviedb.com/kinopoisk-images/4303601/6f264ae2-ce76-4179-b63d-68d324789758/orig'
    },
    rating: {
      imdb: 6.3
    },
    year: 2015
  },
  {
    alternativeName: null,
    backdrop: {
      previewUrl: null,
      url: null
    },
    genres: [
      {
        name: 'документальный'
      }
    ],
    id: 5260016,
    name: 'Попкульт',
    poster: {
      previewUrl:
        'https://image.openmoviedb.com/kinopoisk-images/6201401/7e0e117a-5751-4054-bac6-06ee451544af/x1000',
      url: 'https://image.openmoviedb.com/kinopoisk-images/6201401/7e0e117a-5751-4054-bac6-06ee451544af/orig'
    },
    rating: {
      imdb: 0
    },
    year: 2022
  },
  {
    alternativeName: 'National Theatre Live: Prima Facie',
    backdrop: {
      previewUrl: null,
      url: null
    },
    genres: [
      {
        name: 'драма'
      }
    ],
    id: 5139058,
    name: 'На первый взгляд',
    poster: {
      previewUrl:
        'https://image.openmoviedb.com/kinopoisk-images/6201401/cfe1fcbf-e532-4b27-9bc5-eb1f9c1ba5fb/x1000',
      url: 'https://image.openmoviedb.com/kinopoisk-images/6201401/cfe1fcbf-e532-4b27-9bc5-eb1f9c1ba5fb/orig'
    },
    rating: {
      imdb: 9.1
    },
    year: 2022
  },
  {
    alternativeName: 'Team Hot Wheels: The Skills to Thrill',
    backdrop: {
      previewUrl: 'https://image.openmoviedb.com/tmdb-images/w500/c4xc6iDrVRSQ0vFh6XwQmqs67mf.jpg',
      url: 'https://image.openmoviedb.com/tmdb-images/original/c4xc6iDrVRSQ0vFh6XwQmqs67mf.jpg'
    },
    genres: [
      {
        name: 'мультфильм'
      },
      {
        name: 'детский'
      }
    ],
    id: 962472,
    name: 'Hot Wheels. За гранью воображения',
    poster: {
      previewUrl:
        'https://image.openmoviedb.com/kinopoisk-images/4716873/ccc5d1a9-a7fd-44e4-b1f6-a5b031c886a5/x1000',
      url: 'https://image.openmoviedb.com/kinopoisk-images/4716873/ccc5d1a9-a7fd-44e4-b1f6-a5b031c886a5/orig'
    },
    rating: {
      imdb: 6.8
    },
    year: 2015
  },
  {
    alternativeName: 'BTS 본보야지',
    backdrop: {
      previewUrl: 'https://image.openmoviedb.com/tmdb-images/w500/7CjsCXtZqo6Yo9K2Lo0Eu8IUezz.jpg',
      url: 'https://image.openmoviedb.com/tmdb-images/original/7CjsCXtZqo6Yo9K2Lo0Eu8IUezz.jpg'
    },
    genres: [
      {
        name: 'реальное ТВ'
      }
    ],
    id: 1399205,
    name: 'BTS 본보야지',
    poster: {
      previewUrl: null,
      url: null
    },
    rating: {
      imdb: 9.4
    },
    year: 2016
  }
]
