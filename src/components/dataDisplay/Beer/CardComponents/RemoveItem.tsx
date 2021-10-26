import { useDispatch } from "react-redux"
import { RemoveButton } from "../../../../style/HomeStyle/BeersStyle/BeerComponents/RemoveItem"
import { IItemManipulationProps } from "../../../dataBuild/CardInterfaces"
import { atualizarTotals } from "../../../store/total/totalActions"

const RemoveItem = ({value,setValue,ibu,selected,totalStock}:IItemManipulationProps) =>{
    
    const dispatch = useDispatch()
    const handleClick = () => {
        totalStock += selected.qtd * (Math.floor((ibu * 30)/2)) //Adds compensation value to not get null subtraction
        selected.qtd--
        totalStock -= (selected.qtd + 2) * (Math.floor((ibu * 30)/2))//The +2 is needed because of the first addition and the addition logic
        dispatch(atualizarTotals(totalStock))
        setValue(value - 1);
    }

    return (
        <RemoveButton onClick = {handleClick}>
            -
        </RemoveButton>
    )
}

export default RemoveItem