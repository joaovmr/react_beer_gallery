import { useState } from "react"

const RemoveItem = () =>{
    
    const [value,setValue] = useState(1)

    return (
        <button className = 'btnItem' onClick = {() => setValue(value - 1)}>
            qtd:{value}
        </button>
    )
}

export default RemoveItem