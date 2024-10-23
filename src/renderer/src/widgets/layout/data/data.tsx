import { iconsSVG } from '@renderer/shared/assets'
import { CaptionDataType } from './types'

export const CaptionData: CaptionDataType[] = [
  {
    id: 1,
    label: 'Menu',
    children: [
      {
        id: 1,
        name: 'Home',
        path: '/',
        icon: iconsSVG.award
      },
      {
        id: 2,
        name: 'Discover',
        path: '/',
        icon: iconsSVG.discover
      },
      {
        id: 3,
        name: 'Awards',
        path: '/',
        icon: iconsSVG.award
      },
      {
        id: 4,
        name: 'Celebrities',
        path: '/',
        icon: iconsSVG.celebrities
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
        path: '/',
        icon: iconsSVG.celebrities
      },
      {
        id: 6,
        name: 'Top Rated',
        path: '/',
        icon: iconsSVG.celebrities
      },
      {
        id: 7,
        name: 'Playlists',
        path: '/',
        icon: iconsSVG.celebrities
      },
      {
        id: 8,
        name: 'WatchList',
        path: '/',
        icon: iconsSVG.celebrities
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
        path: '/',
        icon: iconsSVG.settings
      },
      {
        id: 7,
        name: 'Log Out',
        path: '/',
        icon: iconsSVG.logout
      }
    ]
  }
]
