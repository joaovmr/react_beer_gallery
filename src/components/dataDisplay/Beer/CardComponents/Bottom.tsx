import { IBottomProps } from "../../../dataBuild/Interfaces";


const Bottom = ({tagline,ph,ibu}:IBottomProps) => {
    const preco = Math.floor((ibu * 30)/2);
    const estoque = Math.floor(ph * 20);
    return (
      <div className = 'fundo'>
        <span className = 'slogan'>{tagline}</span>
        <span>Price: $<span id = 'preco'>{preco}</span> </span> 
        <span>pH: {ph}</span> 
        <span> In Stock: {estoque}</span>
      </div>
    )
}

export default Bottom