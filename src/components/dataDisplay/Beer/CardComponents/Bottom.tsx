import { BeerBottom, Tagline } from "../../../../style/HomeStyle/BeersStyle/BeerComponents/Bottom";
import { IBottomProps } from "../../../dataBuild/CardInterfaces";


const Bottom = ({tagline,ph,ibu}:IBottomProps) => {
    const preco = Math.floor((ibu * 30)/2);
    const estoque = Math.floor(ph * 20);
    return (
      <BeerBottom>
        <Tagline>{tagline}</Tagline>
        <span>Price: $<span id = 'preco'>{preco}</span> </span> 
        <span>pH: {ph}</span> 
        <span> In Stock: {estoque}</span>
      </BeerBottom>
    )
}

export default Bottom