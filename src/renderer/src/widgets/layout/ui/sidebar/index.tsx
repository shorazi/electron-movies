import { Button, LinkIcon } from '@nextui-org/react'
import { CaptionData } from '../../data'

const SideBar = () => {
  return (
    <div className="md:w-56 w-32 h-[90vh] flex flex-col justify-start items-center">
      <div className="w-full h-[10vh]">
        {/* <Image src={imagesSVG.logo} className="w-full" /> */}
        logo
      </div>
      <div className="w-full h-[80vh] flex flex-col justify-between items-center">
        {CaptionData.map(({ children, id, label }) => (
          <div key={'label' + id} className="w-full flex flex-col justify-start items-start mt-6">
            <h1>{label}</h1>
            <div aria-label={'tab' + id} className="w-full flex flex-col justify-start items-start">
              {children.map((item) => (
                <Button
                  className="flex justify-start p-0 items-center"
                  key={'tab' + item.id}
                  fullWidth
                  variant="light"
                  color="success"
                  children={item.name}
                  startContent={<LinkIcon />}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
