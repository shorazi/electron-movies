import { Input, Select, SelectItem } from '@nextui-org/react'
import { genres } from '@renderer/entities/genres/lib'
import { memo } from 'react'

const FilterModule = () => {
  return (
    <div className="flex flex-col gap-2">
      <Select
        size="sm"
        color="success"
        label="Genre"
        classNames={{
          base: 'bg-background2 rounded-md',
          trigger: 'bg-background2',
          popoverContent: 'bg-background2',
          listbox: 'text-primary'
        }}
      >
        {genres?.map((item) => (
          <SelectItem key={item.id} value={item.name}>
            {item.name}
          </SelectItem>
        ))}
      </Select>
      <Select
        size="sm"
        color="success"
        label="Rating"
        classNames={{
          base: 'bg-background2 rounded-md',
          trigger: 'bg-background2',
          popoverContent: 'bg-background2',
          listbox: 'text-primary'
        }}
      >
        {['1', '2', '3', '4', '5']?.map((item) => (
          <SelectItem key={'rating' + item}>{item}</SelectItem>
        ))}
      </Select>
      <Input
        size="sm"
        color="success"
        label="Start Year"
        classNames={{
          base: 'bg-background2 rounded-md'
        }}
      />
      <Input
        size="sm"
        color="success"
        label="Last Year"
        classNames={{
          base: 'bg-background2 rounded-md'
        }}
      />
    </div>
  )
}

export default memo(FilterModule)
