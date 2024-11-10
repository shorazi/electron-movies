import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import ErrorImage from '@renderer/shared/assets/images/hero-card-complete.jpeg'
import { useNavigate } from 'react-router'

const Error = ({ error }: { error: any }) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="py-4 border-none ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{error?.message}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={ErrorImage}
            width={270}
            height={270}
          />
        </CardBody>
        <CardFooter className="flex gap-2 justify-between">
          <Button onClick={() => navigate('/')}>Home</Button>
          <Button onClick={() => window.location.reload()}>Try again</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Error
