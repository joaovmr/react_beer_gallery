import { TReducers } from "../store/reducers";
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItem from "./CheckoutContent/CheckoutItem";
import PurchaseItem from "./CheckoutContent/PurchaseItem";
import CheckoutListTitle from "./CheckoutContent/CheckoutListTitle";
import '../../style/checkout.css'
import { IBeerProps } from "../dataBuild/BeersInterfaces";

let qtdOfItems = 0;
const Checkout = () => { 

    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers)

    
    return (
        <>
            <div className = 'checkout'>
                <div className = 'brejasCheckout'>
                <CheckoutListTitle></CheckoutListTitle>
                {beersCatalog.length !== 0 ?
                    beersCatalog.map((beer:IBeerProps) => {
                        qtdOfItems += beer.qtd
                        return (
                            <CheckoutItem key={beer.id} {...beer} />
                        )
                    }) : <h1 className = 'noItems'>There are no Items in the Cart</h1>}
                <PurchaseItem qtdOfItems = {qtdOfItems}></PurchaseItem>  
                </div>
            </div>
            {qtdOfItems = 0}  
        </>
    )
}

export default Checkout
