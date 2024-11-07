import { ReactNode } from 'react'

interface TabDataType {
  id: number
  name: string
  path: string
  Icon: ReactNode
}

export interface CaptionDataType {
  id: number
  label: string
  children: TabDataType[]
}
export interface IMovieResp {
  docs: IMovie[]
}

export interface IMovie {
  id: number
  isSeries: boolean
  ageRating: number | null
  description: string
  alternativeName: string | null
  name: string
  enName: string | null
  movieLength: number | null
  backdrop: {
    previewUrl: string
    url: string
  }
  poster: {
    previewUrl: string
    url: string
  }
  rating: {
    await: null | number
    filmCritics: number
    imdb: number
    kp: number
    russianFilmCritics: number
  }

  ratingMpaa: number | null
  releaseYears: IEndStart[]
  seriesLength: number | null
  votes: {
    await: null | number
    filmCritics: number
    imdb: number
    kp: number
    russianFilmCritics: number
  }
  genres: IName[]
  countries: IName[]
  shortDescription: string
  status: null | string
  ticketsOnSale: boolean
  type: string
  year: number
}

interface IEndStart {
  end: number | null
  start: number
}
interface IName {
  name: string
}
