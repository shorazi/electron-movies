import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
  useDisclosure
} from '@nextui-org/react'
import { useSearchMovies } from '@renderer/shared/api'
import { IconsSVG } from '@renderer/shared/assets'
import { UIBody } from '@renderer/shared/ui'
import { FormEvent, memo, useEffect } from 'react'
import CardMovie from './cardMovie'
import PaginationModule from './paginationModule'

const SearchModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { isLoading, movies, page, setPage, mutate, searchText, setSearchText } = useSearchMovies()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchText) {
      setPage(1)
      mutate()
    }
  }

  useEffect(() => {
    if (searchText) {
      mutate()
    }
  }, [page])

  return (
    <>
      <Button
        onPress={onOpen}
        className="w-64 flex justify-between"
        variant="flat"
        color="secondary"
      >
        <span className="flex gap-3">
          <IconsSVG.search />
          Search
        </span>
        <IconsSVG.filter />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" placement="center">
        <ModalContent className="bg-background text-primary p-5">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <form className="w-full" onSubmit={handleSearch}>
                  <Input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    color="success"
                    classNames={{
                      base: 'bg-background2 rounded-md'
                    }}
                    name="searchInput"
                    startContent={<IconsSVG.search />}
                    placeholder="Search"
                    autoFocus
                  />
                </form>
              </ModalHeader>
              <ModalBody className="">
                <div className="grid grid-cols-1 gap-2 max-h-[450px] min-h-[450px] overflow-y-scroll scrollbar-hide">
                  {(!isLoading &&
                    movies?.docs.length &&
                    movies?.docs?.map((item) => <CardMovie item={item} />)) || (
                    <div className="w-full h-full flex justify-center items-center">
                      {isLoading ? <Spinner size="sm" /> : <UIBody>Nothing was found</UIBody>}
                    </div>
                  )}
                </div>
              </ModalBody>
              <PaginationModule initialPage={page} total={movies?.pages || 0} setPage={setPage} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default memo(SearchModal)
