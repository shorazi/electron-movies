import { imagesPNG } from '../assets'

interface LocalMainMoviesType {
  0: MovieType[]
  1: MovieType[]
  2: MovieType[]
}

interface MovieType {
  id: number
  name: string
  alternative: string
  poster: {
    url: string
  }
}

export const LocalMainMovies: LocalMainMoviesType = {
  1: [
    {
      alternative: 'The Crown',
      id: 924910,
      name: 'Корона',
      poster: {
        url: imagesPNG.main_image
      }
    },
    {
      id: 1337788,
      name: 'Социальная дилемма',
      alternative: 'The Social Dilemma',
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/1600647/9125ce7d-b407-4c17-925a-f4cc573c0e42/x1000'
      }
    },
    {
      id: 1282028,
      name: 'Cambridge Analytica',
      alternative: 'Cambridge Analytica. Scandal',
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-images/1946459/67cdafc2-6e0d-4ce1-83cb-0fd64ef9fd92/x1000'
      }
    }
  ],
  0: [
    {
      id: 662359,
      name: 'Расплата',
      alternative: 'The Accountant',
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a00000167f05ef1af8b107dfeac7e4e8cb8/orig'
      }
    },
    {
      id: 926540,
      name: 'Миссия невыполнима',
      alternative: 'Mission: Impossible - Fallout',
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a000001880a05d3ec5fd3f7a964c92aac39/orig'
      }
    },
    {
      id: 1008444,
      name: 'Дэдпул и Росомаха',
      alternative: 'Deadpool & Wolverine',
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001626d3bfd64104ee81e873a01e8ce/orig'
      }
    }
  ],
  2: [
    {
      id: 49684,
      name: 'Ходячий замок',
      alternative: 'Howl no Ugoku Shiro',
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000017394799e6893b002f04de0fc6408/orig'
      }
    },
    {
      id: 382731,
      name: 'Ван-Пис',
      alternative: 'One Piece',
      poster: {
        url: 'https://www.kinopoisk.ru/film/308605/'
        // url: 'https://image.openmoviedb.com/kinopoisk-images/4774061/75f72ac1-1362-4a17-9693-461017555af4/orig'
      }
    },
    {
      id: 1274280,
      name: 'Сага о Винланде',
      alternative: 'Vinland Saga',
      poster: {
        url: 'https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a00000181632064bf541c8e4edee1e340c7/orig'
      }
    }
  ]
}
