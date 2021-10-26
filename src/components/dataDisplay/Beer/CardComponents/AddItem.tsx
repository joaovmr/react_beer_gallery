
import { useDispatch } from "react-redux"
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
        <button className = 'btnItem' onClick = {handleClick}>
            +
        </button>
    )
}

export default AddItem