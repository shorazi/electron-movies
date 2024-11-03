import { fetcher } from '@renderer/app/providers/swr/fetcher'

const api = import.meta.env.VITE_BASE_URL
export async function postData(url: string, { arg = {} }) {
  return fetcher(api + url, {
    method: 'POST',
    body: JSON.stringify(arg)
  })
}
