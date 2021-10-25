import { ITopProps } from "../../../dataBuild/CardInterfaces"
  
const Top = ({name}:ITopProps) => {
  return (
  <div className = 'colarinho'>
      <h1>{String(name)}</h1>
  </div>
  )
}

export default Top