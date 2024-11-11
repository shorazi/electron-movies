import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import useAddWishlist from '@renderer/shared/api/movies/useAddWishlist'
import { IconsSVG } from '@renderer/shared/assets'
import { api } from '@renderer/shared/constants'
import { tokenInstance } from '@renderer/shared/utils'
import { mutate } from 'swr'

const WishlistButton = ({
  requestWatched,
  requestPending
}: {
  requestWatched: any
  requestPending: any
}) => {
  const { getToken } = tokenInstance
  const { add, isLoading } = useAddWishlist(api + '/wishlist/add')

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isLoading={isLoading}
          startContent={<IconsSVG.addSmall />}
          variant="flat"
          color="primary"
        >
          Wishlist
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={async () => {
            await add(requestWatched)
            await mutate(api + `/profile?id=${getToken()?.user_id}`)
          }}
          variant="light"
          color="primary"
          className="hover:bg-[green]"
        >
          Просмотрено
        </DropdownItem>
        <DropdownItem
          onClick={async () => {
            await add(requestPending)
            await mutate(api + `/profile?id=${getToken()?.user_id}`)
          }}
          color="warning"
        >
          Отложено
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default WishlistButton
