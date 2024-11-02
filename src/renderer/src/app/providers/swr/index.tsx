import { tokenInstance } from '@renderer/shared/utils'
import { ReactNode } from 'react'
import { SWRConfig } from 'swr'

const fetcher = (...args: [string]) => {
  const { getToken } = tokenInstance
  return fetch(...args, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`)
    }
    return res.json()
  })
}

const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        revalidateOnReconnect: false,
        revalidateOnFocus: false,
        dedupingInterval: 1000000,
        shouldRetryOnError: false,
        keepPreviousData: true
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SWRProvider
