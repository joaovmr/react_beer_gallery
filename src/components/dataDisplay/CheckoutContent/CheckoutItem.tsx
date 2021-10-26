import { BrejaCheckout } from '../../../style/CheckoutStyle/CheckoutItem'
import { ICheckoutItem } from "../../dataBuild/CheckoutInterfaces"



const CheckoutItem = ({id,image_url,name,ibu,qtd}:ICheckoutItem) => {
    console.log(id)
    return(
        <BrejaCheckout>
            <span><img src = {image_url}></img></span>
            <span><h2>{name}</h2></span>
            <span>Individual Price: ${(Math.floor((ibu * 30)/2))}</span>
            <span>Quantity: {qtd}</span>
            <span>Total Price: ${qtd * (Math.floor((ibu * 30)/2))}</span>
        </BrejaCheckout>
    )
}

export default CheckoutItem