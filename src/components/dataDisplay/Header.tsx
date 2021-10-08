import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Modal />}
    </>
  );
};

const Modal = () => {
  return (
  <div id="myModal" className="modal">
      <div className="modal-content" id = "modal-content"></div>
  </div>
  )
}

const Header = () => {
    return (
    <header className = 'header'>
        <h1>Beers</h1>
            <form>
              <input type="radio" id="padrao" name="fav_language" checked = {true} />
              <label >Padrão</label> 
              <input type="radio" id="acid" name="fav_language"/>
              <label >Cerveja Mais Ácida</label> 
              <input type="radio" id="lessAcid" name="fav_language"/>
              <label >Cerveja Menos Ácida</label>
              <input type="radio" id="expensive" name="fav_language"/>
              <label >Cerveja Mais Cara</label>
              <input type="radio" id="cheap" name="fav_language" placeholder="cheap"/>
              <label >Cerveja Mais Barata</label>
            </form>
            <input type="text" id= "search" placeholder="Nome da cerveja"/>
            <div id="myModal" className="modal">
      <div className="modal-content" id = "modal-content" ></div>
      </div>
      <div id="total" className="total">Preço Total do estoque: </div>
      <button id="myBtn" className="myBtn"><FaShoppingCart/></button>
    </header>
    )
}

export default Header