import { fetcher } from '@renderer/app/providers/swr/fetcher'
import useSWRMutation from 'swr/mutation'

const postData = async (url: string, { arg }: { arg: Record<string, any> }) => {
  // Construct URL with query params
  const urlWithParams = new URL(url)
  Object.keys(arg).forEach((key) => {
    urlWithParams.searchParams.append(key, arg[key])
  })

  return await fetcher(urlWithParams.toString(), {
    method: 'POST'
  })
}

const useAddWishlist = (url: string) => {
  const { isMutating: isLoading, trigger: add, error, data } = useSWRMutation(url, postData)
  return { isLoading, add, error, data }
}

export default useAddWishlist
