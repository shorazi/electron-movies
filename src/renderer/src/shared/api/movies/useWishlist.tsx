import { api } from '@renderer/shared/constants'
import useSWR from 'swr'

const useWishlist = () => {
  const { data: wishlist, isLoading, error } = useSWR(`${api}/user/profile?user_id=1`)
  return { wishlist, isLoading, error }
}

export default useWishlist
