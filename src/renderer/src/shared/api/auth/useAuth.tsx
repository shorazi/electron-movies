import useSWRMutation from 'swr/mutation'
import { postData } from './auth'
const useAuth = (url: string) => {
  const { isMutating: isLoading, trigger: auth } = useSWRMutation(url, postData)
  return { isLoading, auth }
}

export default useAuth
