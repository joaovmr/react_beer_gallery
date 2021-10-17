import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { atualizarBeers } from '../../store/catalogo/catalogoActions';

interface Beer{
    id:number
    name:string
    image_url:any
    food_pairing:string
    tagline:string
    ph:number
    ibu:number
}

const Button = ({id,name,image_url,food_pairing,tagline,ph,ibu}:Beer)  => {

    const dispatch = useDispatch()
    const beer = {
        id : id,
        name: name,
        image_url:image_url,
        food_pairing: food_pairing,
        tagline: tagline,
        ph: ph,
        ibu: ibu
    }

    return (
        <>
            <button onClick = {(e:any) => {

                dispatch(atualizarBeers(beer))
                
            }}>
                +
            </button>
        </>
    )
}

export default Button