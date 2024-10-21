import { CaptionData } from '../../data'

const SideBar = () => {
  return (
    <div className="w-56 h-[100vh]">
      {CaptionData.map(({ children, id, label }) => (
        <div key={'label' + id}>
          <h1>{label}</h1>
          <div>
            {children.map((item) => (
              <button key={'tab' + item.id}>{item.name}</button>
            ))}
          </div>
          <br />
        </div>
      ))}
    </div>
  )
}

export default SideBar
