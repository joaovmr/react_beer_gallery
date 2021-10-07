import React from 'react'

interface Props {
    name:string
}

const Greetings = ({name}:Props) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Greetings
