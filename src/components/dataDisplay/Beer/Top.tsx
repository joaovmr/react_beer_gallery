import { TopProps } from "../../dataBuild/Interfaces"
  
const Top = ({name}:TopProps) => {
  return (
  <div className = 'colarinho'>
      <h1>{String(name)}</h1>
  </div>
  )
}

export default Top