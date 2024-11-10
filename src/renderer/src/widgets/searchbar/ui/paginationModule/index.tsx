import { ModalFooter, Pagination } from '@nextui-org/react'
import { memo } from 'react'

interface IProps {
  total?: number
  initialPage?: number
  setPage: (page: number) => void
  isLoading?: boolean
}

const PaginationModule = (props: IProps) => {
  const { initialPage, total = 0, setPage, isLoading = false } = props
  return (
    total > 1 && (
      <ModalFooter className="w-full flex justify-center items-center">
        <Pagination
          isDisabled={isLoading}
          onChange={setPage}
          total={total}
          initialPage={initialPage}
          classNames={{
            wrapper: 'bg-background2',
            item: 'bg-background2 text-default-500',
            cursor: 'bg-success'
          }}
        />
      </ModalFooter>
    )
  )
}

export default memo(PaginationModule)
