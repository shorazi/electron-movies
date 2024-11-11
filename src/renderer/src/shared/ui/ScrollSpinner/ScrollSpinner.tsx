import { Spinner } from '@nextui-org/react'

const ScrollSpinner = ({ isValidating }: { isValidating: boolean }) => {
  if (!isValidating) return
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner size="sm" />
    </div>
  )
}

export default ScrollSpinner
