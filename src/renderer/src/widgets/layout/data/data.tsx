import { CaptionDataType } from './types'

export const CaptionData: CaptionDataType[] = [
  {
    id: 1,
    label: 'Menu',
    children: [
      {
        id: 1,
        name: 'Home',
        path: '/'
      },
      {
        id: 2,
        name: 'Discover',
        path: '/'
      },
      {
        id: 3,
        name: 'Awards',
        path: '/'
      },
      {
        id: 4,
        name: 'Celebrities',
        path: '/'
      }
    ]
  },
  {
    id: 2,
    label: 'Library',
    children: [
      {
        id: 5,
        name: 'Recent',
        path: '/'
      },
      {
        id: 6,
        name: 'Top Rated',
        path: '/'
      },
      {
        id: 7,
        name: 'Playlists',
        path: '/'
      },
      {
        id: 8,
        name: 'WatchList',
        path: '/'
      }
    ]
  },
  {
    id: 3,
    label: 'General',
    children: [
      {
        id: 6,
        name: 'Settings',
        path: '/'
      },
      {
        id: 7,
        name: 'Log Out',
        path: '/'
      }
    ]
  }
]
