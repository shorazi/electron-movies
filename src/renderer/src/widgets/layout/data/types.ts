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
