import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonsBox, FoodPairing, Quantity } from '../../../../style/HomeStyle/BeersStyle/BeerComponents/Middle'
import { IMiddleProps } from '../../../dataBuild/CardInterfaces'
import { atualizarBeers } from '../../../store/catalogo/catalogoActions'
import { TReducers } from '../../../store/reducers'
import AddItem from './AddItem'
import RemoveItem from './RemoveItem'

const Middle = ({id,food_pairing, ibu,isModal = false}:IMiddleProps) => {
    const [value,setValue] = useState(1)
    const dispatch = useDispatch()

    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers);
    const totalStock = useSelector((state: TReducers) => state.total.totals);
    const selected:any = beersCatalog.find(beer => beer.id === id)
    
    useEffect(() => {
      if(selected !== undefined){
        setValue(selected.qtd)
      }
    },[value]);
    
    if(value === 0){
      const newBeersCatalog = beersCatalog.filter(function( beer ) {
        return beer.id !== id;
      });
      dispatch(atualizarBeers(newBeersCatalog))
    }
    return(
      <>
      <FoodPairing>
        <h1>Combines with:</h1>
        <ul>
          <li>{food_pairing[0]}</li>
          <li>{food_pairing[1]}</li>
          <li>{food_pairing[2]}</li>
        </ul>
      </FoodPairing>
      {isModal ? 
      <>
        <Quantity>
          Quantity: {value}
        </Quantity>
        <ButtonsBox>
          <AddItem 
          value = {value} 
          setValue = {setValue} 
          ibu = {ibu} 
          selected = {selected}
          totalStock = {totalStock}/>
          <RemoveItem 
          value = {value} 
          setValue = {setValue} 
          ibu = {ibu} 
          selected = {selected}
          totalStock = {totalStock}/>
        </ButtonsBox> 
      </>
      : null}
      </>
    )
}

export default Middle