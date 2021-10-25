import { TReducers } from "../store/reducers";
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItem from "./CheckoutContent/CheckoutItem";
import PurchaseItem from "./CheckoutContent/PurchaseItem";
import CheckoutListTitle from "./CheckoutContent/CheckoutListTitle";
import '../../style/checkout.css'

const Checkout = () => { 

    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers)

    let qtdOfItems = 0;

    return (
        <>
            <div className = 'checkout'>
                <div className = 'brejasCheckout'>
                <CheckoutListTitle></CheckoutListTitle>
                {beersCatalog.length !== 0 ?
                    beersCatalog.map((beer:any) => {
                        qtdOfItems += beer.qtd
                        return (
                                    <CheckoutItem key={beer.id} beer = {beer} />
                        )
                    }) : <h1 className = 'noItems'>There are no Items in the Cart</h1>}
                <PurchaseItem qtdOfItems = {qtdOfItems}></PurchaseItem> 
                </div>
            </div>
        </>
    )
}

export default Checkout
