import { RouterProvider } from 'react-router-dom'
import NextUI from './nextui'
import router from './router/router'

const Providers = () => {
  return (
    <NextUI>
      <RouterProvider router={router} />
    </NextUI>
  )
}

export default Providers
