import { ReactNode } from 'react'

interface TabDataType {
  id: number
  name: string
  path: string
  icon: ReactNode
}

export interface CaptionDataType {
  id: number
  label: string
  children: TabDataType[]
}

export interface IMovie {
  id: number
  img: string
  name: string
}
