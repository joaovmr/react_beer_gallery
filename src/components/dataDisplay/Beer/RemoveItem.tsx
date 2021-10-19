import { useState } from "react"

const RemoveItem = ({value,setValue}:any) =>{

    return (
        <button className = 'btnItem' onClick = {() => setValue(value - 1)}>
            -
        </button>
    )
}

export default RemoveItem