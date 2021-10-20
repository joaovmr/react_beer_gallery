import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TReducers } from "../../store/reducers"
import { atualizarTotals } from "../../store/total/totalActions"

const AddItem = ({value,setValue,ibu,selected,totalStock}:any) =>{

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