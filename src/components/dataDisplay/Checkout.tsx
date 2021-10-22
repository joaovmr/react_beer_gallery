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

    let qtdOfItems = 0;

    const handleFinishPurchase = () => {
        const emptyCart:any = []
        dispatch(atualizarTotals(0))
        dispatch(atualizarBeers(emptyCart))
        history.push("/")
    }
    return (
        <>
            <div className = 'checkout'>
                <div className = 'brejasCheckout'>
                {beersCatalog.length !== 0 ?
                        beersCatalog.map((beer:any) => {
                            qtdOfItems += beer.qtd
                            return (
                                        <CheckouItem key={beer.id} beer = {beer} />
                            )
                        }) : <h1 className = 'noItems'>There are no Items in the Cart</h1>} 
                    <div key = {0} className = 'brejaCheckout'>
                        <button onClick = {handleFinishPurchase}
                        className = 'purchaseButton'>Finish Purchase</button>
                        <div className = 'name'><h2></h2></div>
                        <span className = 'individualPrice'></span>
                        <span className = 'qtd'>Quantity of Items: {qtdOfItems}</span>
                        <span className = 'totalPrice'>Final Price: ${totalStock}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
