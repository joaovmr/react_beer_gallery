import  { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './HeaderContent/Modal';
import Filter from './HeaderContent/Filter';
import { IHeaderProps } from '../../dataBuild/HeaderInterfaces';
import { useFetch } from '../../dataFetch/useFetch';
import { useDataCleaner } from '../../dataTreatment/useDataCleaner';
import { IBeerProps } from '../../dataBuild/BeersInterfaces';
import { HeaderStyle, Total, CartButton } from '../../../style/HomeStyle/HeaderStyle/Header';

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
    <HeaderStyle>
        <h1>Beers</h1>
        <Filter textoInput = {textoInput} 
            setTextoInput = {setTextoInput}
            setCheckedButton = {setCheckedButton}/>
      <Total>Total Stock Price: ${total}</Total>
      <CartButton className="myBtn" 
      onClick = {() => setIsModalVisible(true)}><FaShoppingCart/></CartButton>

      {isModalVisible ? 
        (<Modal 
          onClose = {() => setIsModalVisible(false)}
          
        >
        </Modal>)
         : null}
    </HeaderStyle>
    )
}

export default Header