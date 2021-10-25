import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { atualizarBeers } from "../../store/catalogo/catalogoActions";
import { TReducers } from "../../store/reducers";
import { atualizarTotals } from "../../store/total/totalActions";

const PurchaseItem = ({qtdOfItems}:any) => {

    const totalStock = useSelector((state: TReducers) => state.total.totals)
    const dispatch = useDispatch()
    const history = useHistory();

    const handleFinishPurchase = () => {
        const emptyCart:any = []
        dispatch(atualizarTotals(0))
        dispatch(atualizarBeers(emptyCart))
        history.push("/")
    }
    return(
    <div key = {0} className = 'brejaCheckout'>
        <button onClick = {handleFinishPurchase}
        className = 'purchaseButton'>Finish Purchase</button>
        <div className = 'name'><h2></h2></div>
        <span className = 'individualPrice'></span>
        <span className = 'qtd'>Quantity of Items: {qtdOfItems}</span>
        <span className = 'totalPrice'>Final Price: ${totalStock}</span>
    </div>
    )
}

export default PurchaseItem
