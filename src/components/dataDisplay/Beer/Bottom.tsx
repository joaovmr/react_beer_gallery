interface PropsBottom{
    tagline:string
    ph:number
    ibu:number
}

const Bottom = ({tagline,ph,ibu}:PropsBottom) => {
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