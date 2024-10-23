interface TabDataType {
  id: number
  name: string
  path: string
  icon: string
}

export interface CaptionDataType {
  id: number
  label: string
  children: TabDataType[]
}
