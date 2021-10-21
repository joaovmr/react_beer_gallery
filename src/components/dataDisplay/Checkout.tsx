import { TReducers } from "../store/reducers";
import { useSelector } from 'react-redux';
import Card from "./Beer/Card";

const Checkout = () => { 

    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers)
    const totalStock = useSelector((state: TReducers) => state.total.totals)
    return (
        <>
            {beersCatalog.length !== 0 ? 
                <div className = 'precoCarrinho'>
                    <h1>Total Price of the cart: ${totalStock}</h1>
                </div>
                 : null }
            <div className = 'brejasCheckout'>
            {beersCatalog.length !== 0 ?
                    beersCatalog.map((beer:any) => {
                        return (
                                    <Card key={beer.id} beer = {beer} isInicial = {false} isModal = {true}/>
                        )
                    }) : <h1 className = 'noItems'>There are no Items in the Cart</h1>} 
            </div>    
        </>
    )
}

export default Checkout
