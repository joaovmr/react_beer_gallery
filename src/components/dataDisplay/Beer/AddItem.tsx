import { useState } from "react"

const AddItem = () =>{
    
    const [value,setValue] = useState(1)

    return (
        <button className = 'btnItem' onClick = {() => setValue(value + 1)}>
            qtd:{value}
        </button>
    )
}

export default AddItem