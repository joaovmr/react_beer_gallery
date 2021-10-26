import { useDispatch } from "react-redux"
import { IItemManipulationProps } from "../../../dataBuild/CardInterfaces"
import { atualizarTotals } from "../../../store/total/totalActions"

const RemoveItem = ({value,setValue,ibu,selected,totalStock}:IItemManipulationProps) =>{
    
    const dispatch = useDispatch()
    const handleClick = () => {
        console.log('Estado inicial ' + totalStock)
        totalStock += selected.qtd * (Math.floor((ibu * 30)/2))
        selected.qtd--
        console.log('Pos adicao ' + totalStock)
        totalStock -= (selected.qtd + 2) * (Math.floor((ibu * 30)/2))
        console.log('Pos subtracao ' + totalStock)
        dispatch(atualizarTotals(totalStock))
        setValue(value - 1);
    }

    return (
        <button className = 'btnItem' onClick = {handleClick}>
            -
        </button>
    )
}

export default RemoveItem