import { BottomProps } from "../../dataBuild/Interfaces";

const Bottom = ({tagline,ph,ibu}:BottomProps) => {
    const preco = Math.floor((ibu * 30)/2);
    const estoque = Math.floor(ph * 20);
    return (
      <div className = 'fundo'>
        <span className = 'slogan'>{tagline}</span>
        <span>Preço: $<span id = 'preco'>{preco}</span> </span> 
        <span>pH: {ph}</span> 
        <span> Em estoque: {estoque}</span>
      </div>
    )
}

export default Bottom