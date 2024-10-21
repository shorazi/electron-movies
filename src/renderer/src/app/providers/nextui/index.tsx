import { NextUIProvider } from '@nextui-org/react'
import { ReactNode } from 'react'

const NextUI = (props: { children: ReactNode }) => {
  return <NextUIProvider>{props.children}</NextUIProvider>
}

export default NextUI
