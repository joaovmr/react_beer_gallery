import { TReducers } from "../store/reducers";
import { useDispatch, useSelector } from 'react-redux';
import CheckouItem from "./CheckoutItems/CheckouItem";
import { atualizarBeers } from "../store/catalogo/catalogoActions";
import { atualizarTotals } from "../store/total/totalActions";
import { useHistory } from "react-router-dom";

const Checkout = () => { 

    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers)
    const totalStock = useSelector((state: TReducers) => state.total.totals)
    const dispatch = useDispatch()
    const history = useHistory();

    const handleFinishPurchase = () => {
        const emptyCart:any = []
        dispatch(atualizarTotals(0))
        dispatch(atualizarBeers(emptyCart))
        history.push("/")
    }
    return (
        <>
            {beersCatalog.length !== 0 ? 
                <div className = 'precoCarrinho'>
                    <h1>Total Price of the cart: ${totalStock}</h1>
                    <button onClick = {handleFinishPurchase}>Finish Purchase</button>
                </div>
                 : null }
            <div className = 'brejasCheckout'>
            {beersCatalog.length !== 0 ?
                    beersCatalog.map((beer:any) => {
                        return (
                                    <CheckouItem key={beer.id} beer = {beer} />
                        )
                    }) : <h1 className = 'noItems'>There are no Items in the Cart</h1>} 
            </div>    
        </>
    )
}

export default Checkout
