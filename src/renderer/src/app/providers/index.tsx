import { RouterProvider } from 'react-router-dom'
import NextUI from './nextui'
import router from './router/router'
import SWRProvider from './swr'

const Providers = () => {
  return (
    <SWRProvider>
      <NextUI>
        <RouterProvider router={router} />
      </NextUI>
    </SWRProvider>
  )
}

export default Providers
