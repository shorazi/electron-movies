import { api } from '@renderer/shared/constants'
import { tokenInstance } from '@renderer/shared/utils'
import useSWR from 'swr'

const useWishlist = () => {
  const { getToken } = tokenInstance
  const {
    data: wishlist,
    isLoading,
    error
  } = useSWR(`${api}/user/profile?user_id=${getToken()?.user_id}`)
  return { wishlist, isLoading, error }
}

export default useWishlist
