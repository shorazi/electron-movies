import useSWRMutation from 'swr/mutation'

const postData = async (url: string, { arg }: { arg: Record<string, any> }) => {
  // Construct URL with query params
  const urlWithParams = new URL(url)
  Object.keys(arg).forEach((key) => {
    urlWithParams.searchParams.append(key, arg[key])
  })

  const response = await fetch(urlWithParams.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to post data')
  }

  return response.json()
}

const useAddWishlist = (url: string) => {
  const { isMutating: isLoading, trigger: add, error, data } = useSWRMutation(url, postData)
  return { isLoading, add, error, data }
}

export default useAddWishlist
