import { IconsSVG } from '@renderer/shared/assets'
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
        icon: <IconsSVG.home />
      },
      // {
      //   id: 2,
      //   name: 'Discover',
      //   path: '/Category',
      //   icon: <IconsSVG.discover/>
      // },
      // {
      //   id: 3,
      //   name: 'Awards',
      //   path: '/',
      //   icon: <IconsSVG.award/>
      // },
      // {
      //   id: 4,
      //   name: 'Celebrities',
      //   path: '/',
      //   icon: <IconsSVG.celebrities/>
      // }
      {
        id: 6,
        name: 'Top Rated',
        path: '/',
        icon: <IconsSVG.celebrities />
      },
      {
        id: 7,
        name: 'Playlists',
        path: '/',
        icon: <IconsSVG.celebrities />
      },
      {
        id: 8,
        name: 'WatchList',
        path: '/',
        icon: <IconsSVG.celebrities />
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
        icon: <IconsSVG.settings />
      },
      {
        id: 7,
        name: 'Log Out',
        path: '/',
        icon: <IconsSVG.logout />
      }
    ]
  }
]
