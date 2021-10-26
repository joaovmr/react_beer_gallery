import  { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './HeaderContent/Modal';
import Filter from './HeaderContent/Filter';
import { IHeaderProps } from '../../dataBuild/HeaderInterfaces';
import { useFetch } from '../../dataFetch/useFetch';
import { useDataCleaner } from '../../dataTreatment/useDataCleaner';
import { IBeerProps } from '../../dataBuild/BeersInterfaces';

const url = 'https://api.punkapi.com/v2/beers'

const Header = ({textoInput, 
  setTextoInput,  setCheckedButton} : IHeaderProps) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { loading,beers }:any = useFetch(url)
    const { cleanedBeers } = useDataCleaner(loading, beers)
    let total = 0
    if(cleanedBeers !== undefined){
      cleanedBeers.forEach((beer:IBeerProps) => {
        total += Math.floor((beer.ibu * 30)/2) * Math.floor(beer.ph * 20)
      });
    }
    return (
    <header className = 'header'>
        <h1>Beers</h1>
        <Filter textoInput = {textoInput} 
            setTextoInput = {setTextoInput}
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