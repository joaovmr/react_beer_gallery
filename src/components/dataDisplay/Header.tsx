import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './Modal';

const Header = () => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlerHeaderClick = () =>{
      if(isModalVisible === true){
        setIsModalVisible(false)
      }
    }
    return (
    <header className = 'header' onClick={() => handlerHeaderClick()}>
        <h1>Beers</h1>
            <form>
              <input type="radio" id="padrao" name="escolhas" checked = {true} />
              <label >Padrão</label> 
              <input type="radio" id="acid" name="escolhas"/>
              <label >Cerveja Mais Ácida</label> 
              <input type="radio" id="lessAcid" name="escolhas"/>
              <label >Cerveja Menos Ácida</label>
              <input type="radio" id="expensive" name="escolhas"/>
              <label >Cerveja Mais Cara</label>
              <input type="radio" id="cheap" name="escolhas"/>
              <label >Cerveja Mais Barata</label>
            </form>
            <input type="text" id= "search" placeholder="Nome da cerveja"/>
            
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