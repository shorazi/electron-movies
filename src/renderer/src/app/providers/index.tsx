import { RouterProvider } from 'react-router-dom'
import NextUI from './nextui'
import router from './router/router'
import SWRProvider from './swr'
import { Toaster } from 'react-hot-toast'

const Providers = () => {
  return (
    <SWRProvider>
      <NextUI>
        <Toaster />
        <RouterProvider router={router} />
      </NextUI>
    </SWRProvider>
  )
}

export default Providers
