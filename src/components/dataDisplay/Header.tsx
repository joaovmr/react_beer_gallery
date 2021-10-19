import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './Modal';
import Filter from './Filter';
import { IHeaderProps } from '../dataBuild/Interfaces';

const Header = ({textoInput, 
  setTextoInput, checkedButton, setCheckedButton} : IHeaderProps) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [totalStock, setTotalStock] = useState(0)
    return (
    <header className = 'header'>
        <h1>Beers</h1>
        <Filter textoInput = {textoInput} 
            setTextoInput = {setTextoInput}
            checkedButton = {checkedButton}
            setCheckedButton = {setCheckedButton}/>
      <div id="total" className="total">Total Stock Price: {totalStock}</div>
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