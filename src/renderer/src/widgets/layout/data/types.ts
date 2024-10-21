interface TabDataType {
  id: number
  name: string
  path: string
}

export interface CaptionDataType {
  id: number
  label: string
  children: TabDataType[]
}
