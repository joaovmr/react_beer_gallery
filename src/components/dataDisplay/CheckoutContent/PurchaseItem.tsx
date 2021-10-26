import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { BrejaCheckout, PurchaseButton } from "../../../style/CheckoutStyle/PurchaseItem";
import { IBeerProps } from "../../dataBuild/BeersInterfaces";
import { IPurchaseItemProps } from "../../dataBuild/CheckoutInterfaces.js";
import { atualizarBeers } from "../../store/catalogo/catalogoActions";
import { TReducers } from "../../store/reducers";
import { atualizarTotals } from "../../store/total/totalActions";

const PurchaseItem = ({qtdOfItems}:IPurchaseItemProps) => {

    const totalStock = useSelector((state: TReducers) => state.total.totals)
    const dispatch = useDispatch()
    const history = useHistory();

    const handleFinishPurchase = () => {
        const emptyCart: IBeerProps[] = []
        dispatch(atualizarTotals(0))
        dispatch(atualizarBeers(emptyCart))
        history.push("/")
    }
    return(
    <BrejaCheckout>
        <span><PurchaseButton onClick = {handleFinishPurchase}
           >Finish Purchase</PurchaseButton></span>
        <span></span>
        <span></span>
        <span>Quantity of Items: {qtdOfItems}</span>
        <span>Final Price: ${totalStock}</span>
    </BrejaCheckout>
    )
}

export default PurchaseItem
