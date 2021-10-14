import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './Modal';
import Filter from './Filter';

interface IProps {
  textoInput:string;
  setTextoInput: any;
  checkedButton: string;
  setCheckedButton:any
}

const Header: React.FC<IProps> = ({textoInput, 
  setTextoInput, checkedButton, setCheckedButton}) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlerHeaderClick = () =>{
      if(isModalVisible === true){
        setIsModalVisible(false)
      }
    }
    return (
    <header className = 'header' onClick={() => handlerHeaderClick()}>
        <h1>Beers</h1>
        <Filter textoInput = {textoInput} 
            setTextoInput = {setTextoInput}
            checkedButton = {checkedButton}
            setCheckedButton = {setCheckedButton}/>
      <div id="total" className="total">Preço Total do estoque: </div>
      <button id="myBtn" className="myBtn" 
      onClick = {() => setIsModalVisible(true)}><FaShoppingCart/></button>

      {isModalVisible ? 
        (<Modal onClose = {() => setIsModalVisible(false)}>
          <h1>AAAAA</h1>
        </Modal>)
         : null}
    </header>
    )
}

export default Header