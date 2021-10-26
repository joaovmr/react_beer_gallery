import { ICheckoutItem } from "../../dataBuild/CheckoutInterfaces"



const CheckoutItem = ({id,image_url,name,ibu,qtd}:ICheckoutItem) => {
    console.log(id)
    return(
        <div key = {id} className = 'brejaCheckout'>
            <span><img src = {image_url}></img></span>
            <div className = 'name'><h2>{name}</h2></div>
            <span className = 'individualPrice'>Individual Price: ${(Math.floor((ibu * 30)/2))}</span>
            <span className = 'qtd'>Quantity: {qtd}</span>
            <span className = 'totalPrice'>Total Price: ${qtd * (Math.floor((ibu * 30)/2))}</span>
        </div>
    )
}

export default CheckoutItem