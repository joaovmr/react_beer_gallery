import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TReducers } from "../../store/reducers"
import { atualizarTotals } from "../../store/total/totalActions"

const AddItem = ({value,setValue,ibu}:any) =>{
    
    
    const dispatch = useDispatch()
    let totalStock = useSelector((state: TReducers) => state.total.totals)
    const handleClick = () => {
        totalStock = totalStock + Math.floor((ibu * 30)/2);
        dispatch(atualizarTotals(totalStock));
        setValue(value + 1);
    }

    return (
        <button className = 'btnItem' onClick = {handleClick}>
            +
        </button>
    )
}

export default AddItem