import { IconsSVG } from '@renderer/shared/assets'
import { CaptionDataType } from './types'

export const PathData = {
  home: {
    name: 'Home',
    path: '/',
    Icon: <IconsSVG.home />
  },
  toprated: {
    name: 'Top Rated',
    path: '/top-rated',
    Icon: 'celebrities'
  },
  wishList: {
    name: 'Wishlist',
    path: '/wish-list',
    Icon: 'celebrities'
  },
  genres: {
    name: 'Genres',
    path: '/genres',
    Icon: 'celebrities'
  },
  profile: {
    name: 'Profile',
    path: '/profile',
    Icon: 'celebrities'
  },
  signout: {
    name: 'Sing Out',
    path: '/authorization',
    Icon: 'celebrities'
  }
}

export const CaptionData: CaptionDataType[] = [
  {
    id: 1,
    label: 'Menu',
    children: [
      {
        id: 1,
        name: 'Home',
        path: '/',
        Icon: <IconsSVG.home />
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
        path: '/top-rated',
        Icon: <IconsSVG.celebrities />
      }
      // {
      //   id: 7,
      //   name: 'Playlists',
      //   path: '/',
      //   icon: <IconsSVG.celebrities />
      // },
      // {
      //   id: 8,
      //   name: 'WatchList',
      //   path: '/',
      //   icon: <IconsSVG.celebrities />
      // }
    ]
  }
  // {
  //   id: 3,
  //   label: 'General',
  //   children: [
  //     {
  //       id: 6,
  //       name: 'Settings',
  //       path: '/',
  //       icon: <IconsSVG.settings />
  //     },
  //     {
  //       id: 7,
  //       name: 'Log Out',
  //       path: '/',
  //       icon: <IconsSVG.logout />
  //     }
  //   ]
  // }
]
