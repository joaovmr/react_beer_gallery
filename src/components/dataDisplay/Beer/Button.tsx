import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { atualizarBeers } from '../../store/catalogo/catalogoActions';
import { TReducers } from '../../store/reducers';

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
    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers);
    return (
        <>
            <button onClick = {(e:any) => {
                const isItemInCatalog = beersCatalog.find(el => beer.id === el.id)
                isItemInCatalog === undefined ? beersCatalog.push(beer) : console.log('Item existente')
                dispatch(atualizarBeers(beersCatalog))
            }}>
                +
            </button>
        </>
    )
}

export default Button