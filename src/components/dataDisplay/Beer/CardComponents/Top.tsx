import { BeerTop } from "../../../../style/HomeStyle/BeersStyle/BeerComponents/Top"
import { ITopProps } from "../../../dataBuild/CardInterfaces"
  
const Top = ({name}:ITopProps) => {
  return (
  <BeerTop>
      <h1>{String(name)}</h1>
  </BeerTop>
  )
}

export default Top