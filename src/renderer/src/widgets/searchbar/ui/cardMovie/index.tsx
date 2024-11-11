import { Card, CardHeader, Image } from '@nextui-org/react'
import { IMovie } from '@renderer/widgets/layout/lib'
import { memo } from 'react'
import { useNavigate } from 'react-router'

const CardMovie = ({ item }: { item: IMovie }) => {
  const navigate = useNavigate()
  return (
    <Card
      onClick={() => navigate('/top-rated/' + item.id)}
      id={'id' + item?.id}
      className="h-[70px] bg-background2"
      isPressable
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          className="w-[40px] h-full object-cover"
          src={item?.poster?.previewUrl || item?.poster?.url || ''}
          width={40}
          isZoomed
        />
        <div className="w-full flex flex-col justify-between items-start">
          <div className="w-full flex justify-between items-center">
            <p className="text-md text-primary">
              {item?.name?.substring(0, 23) ||
                item?.alternativeName?.substring(0, 23) ||
                'Undefined'}
            </p>
            <p className="text-success font-bold">{item?.rating?.imdb || ''}</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-small text-default-500">{item?.genres[0]?.name || 'undefined'}</p>
            <p className="text-small text-default-500">{item?.year}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default memo(CardMovie)
