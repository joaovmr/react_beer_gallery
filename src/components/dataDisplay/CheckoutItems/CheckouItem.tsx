


const CheckouItem = ({beer}:any) => {
    return(
        <div key = {beer.id} className = 'brejaCheckout'>
            <span><img src = {beer?.image_url}></img></span>
            <div className = 'name'><h2>{beer.name}</h2></div>
            <span className = 'individualPrice'>Individual Price: ${(Math.floor((beer.ibu * 30)/2))}</span>
            <span className = 'qtd'>Quantity: {beer.qtd}</span>
            <span className = 'totalPrice'>Total Price: ${beer.qtd * (Math.floor((beer.ibu * 30)/2))}</span>
        </div>
    )
}

export default CheckouItem

// id name image_url food_pairing tagline ph ibu qtd