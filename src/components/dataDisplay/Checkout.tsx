import { TReducers } from "../store/reducers";
import { useSelector } from 'react-redux';
import CheckoutItem from "./CheckoutContent/CheckoutItem";
import PurchaseItem from "./CheckoutContent/PurchaseItem";
import CheckoutListTitle from "./CheckoutContent/CheckoutListTitle";
import { IBeerProps } from "../dataBuild/BeersInterfaces";
import { CheckoutBox } from '../../style/CheckoutStyle/Checkout'

let qtdOfItems = 0;
const Checkout = () => { 

    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers)

    
    return (
        <>
            <CheckoutBox>
                <div>
                <CheckoutListTitle></CheckoutListTitle>
                {beersCatalog.length !== 0 ?
                    beersCatalog.map((beer:IBeerProps) => {
                        qtdOfItems += beer.qtd
                        return (
                            <CheckoutItem key={beer.id} {...beer} />
                        )
                    }) : <h1>There are no Items in the Cart</h1>}
                <PurchaseItem qtdOfItems = {qtdOfItems}></PurchaseItem>  
                </div>
            </CheckoutBox>
            {qtdOfItems = 0}  
        </>
    )
}

export default Checkout
