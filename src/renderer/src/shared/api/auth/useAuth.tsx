import useSWRMutation from 'swr/mutation'
import { postData } from './auth'
const useAuth = (url: string) => {
  const { isMutating: isLoading, trigger: auth, error, data } = useSWRMutation(url, postData)
  return { isLoading, auth, error, data }
}

export default useAuth
