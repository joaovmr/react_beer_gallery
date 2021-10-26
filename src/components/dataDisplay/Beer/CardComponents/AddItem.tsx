
import { useDispatch } from "react-redux"
import { AddButton } from "../../../../style/HomeStyle/BeersStyle/BeerComponents/AddItem"
import { IItemManipulationProps } from "../../../dataBuild/CardInterfaces"
import { atualizarTotals } from "../../../store/total/totalActions"

const AddItem = ({value,setValue,ibu,selected,totalStock}:IItemManipulationProps) =>{

    const dispatch = useDispatch()
    const handleClick = () => {
        totalStock -= selected.qtd * (Math.floor((ibu * 30)/2))
        selected.qtd++
        totalStock += selected.qtd * (Math.floor((ibu * 30)/2))
        dispatch(atualizarTotals(totalStock))
        setValue(value + 1);
    }
    return (
        <AddButton onClick = {handleClick}>
            +
        </AddButton>
    )
}

export default AddItem