import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './Modal';
import Filter from './Filter';
import { IHeaderProps } from '../dataBuild/Interfaces';
import { useFetch } from '../dataFetch/useFetch';
import { useDataCleaner } from '../dataTreatment/useDataCleaner';

const url = 'https://api.punkapi.com/v2/beers'

const Header = ({textoInput, 
  setTextoInput, checkedButton, setCheckedButton} : IHeaderProps) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { loading,beers }:any = useFetch(url)
    const { cleanedBeers } = useDataCleaner(loading, beers)
    let total = 0
    if(cleanedBeers !== undefined){
      cleanedBeers.forEach((beer:any) => {
        total += Math.floor((beer.ibu * 30)/2) * Math.floor(beer.ph * 20)
      });
    }
    return (
    <header className = 'header'>
        <h1>Beers</h1>
        <Filter textoInput = {textoInput} 
            setTextoInput = {setTextoInput}
            checkedButton = {checkedButton}
            setCheckedButton = {setCheckedButton}/>
      <div id="total" className="total">Total Stock Price: ${total}</div>
      <button id="myBtn" className="myBtn" 
      onClick = {() => setIsModalVisible(true)}><FaShoppingCart/></button>

      {isModalVisible ? 
        (<Modal 
          onClose = {() => setIsModalVisible(false)}
          
        >
        </Modal>)
         : null}
    </header>
    )
}

export default Header