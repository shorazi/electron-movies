import {
  Button,
  Card,
  CardHeader,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Select,
  SelectItem,
  useDisclosure
} from '@nextui-org/react'
import { genres } from '@renderer/entities/genres/lib'
import { topMovies } from '@renderer/entities/top-movies/lib'
import { IconsSVG, imagesPNG } from '@renderer/shared/assets'
import { UIBody } from '@renderer/shared/ui'
import { FormEvent, memo } from 'react'

const totalPages = 1

const SearchModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

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
        <ModalContent className="bg-background text-primary">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <form className="w-full" onSubmit={handleSearch}>
                  <Input
                    name="searchInput"
                    startContent={<IconsSVG.search />}
                    placeholder="Search"
                    variant="underlined"
                    color="success"
                    autoFocus
                  />
                </form>
              </ModalHeader>
              <ModalBody className="grid grid-cols-2">
                <div className="grid grid-cols-1 gap-2 max-h-[450px] min-h-[450px] overflow-y-scroll scrollbar-hide">
                  {(topMovies &&
                    topMovies.map((item, index) => (
                      <Card id={index + 'carditem'} className="h-[70px] bg-background2" isPressable>
                        <CardHeader className="flex gap-3">
                          <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            className="w-full h-full object-cover"
                            src={imagesPNG.card_image}
                            width={40}
                            isZoomed
                          />
                          <div className="flex flex-col justify-between items-start">
                            <p className="text-md text-primary">{item.title || 'Undefined'}</p>
                            <p className="text-small text-default-500">fantasy</p>
                          </div>
                        </CardHeader>
                      </Card>
                    ))) || (
                    <div className="w-full h-full flex justify-center items-center">
                      <UIBody>Nothing was found</UIBody>
                    </div>
                  )}
                </div>
                <div>
                  <Select
                    variant="underlined"
                    color="success"
                    label="Select a genre"
                    // className="max-w-xs"
                    classNames={{
                      base: 'text-red bg-red'
                    }}
                  >
                    {genres?.map((item) => <SelectItem key={item.id}>{item.name}</SelectItem>)}
                  </Select>
                </div>
              </ModalBody>
              {totalPages > 1 && (
                <ModalFooter className="w-full flex justify-center items-center">
                  <Pagination
                    total={10}
                    initialPage={1}
                    classNames={{
                      wrapper: 'bg-background2',
                      item: 'bg-background2 text-default-500',
                      cursor: 'bg-success'
                    }}
                  />
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default memo(SearchModal)
