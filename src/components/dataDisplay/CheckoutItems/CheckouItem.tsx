


const CheckouItem = ({beer}:any) => {
    return(
        <div key = {beer.id} className = 'brejaCheckout'>
            <span><img src = {beer?.image_url}></img></span>
            <span>Name: {beer.name}</span>
            <span>Quantity: {beer.qtd}</span>
            <span>Price: {(Math.floor((beer.ibu * 30)/2))}</span>
        </div>
    )
}

export default CheckouItem

// id name image_url food_pairing tagline ph ibu qtd