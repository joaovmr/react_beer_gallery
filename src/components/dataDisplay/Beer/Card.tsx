import { useState } from 'react';
import { Beer } from '../../../style/HomeStyle/BeersStyle/Beer';
import { ICardProps } from '../../dataBuild/CardInterfaces'
import AddToCart from './CardComponents/AddToCart';
import Bottom from './CardComponents/Bottom';
import Middle from './CardComponents/Middle';
import Top from './CardComponents/Top';

const Card = ({ beer , isInicial = true, isModal = false}:ICardProps) => {
  const[isActive, setIsActive] = useState(false)
  return (
    <Beer isActive = {isActive}>
        {isInicial ? <AddToCart {...beer} 
        isActive = {isActive} 
        setIsActive = {setIsActive}
        ></AddToCart> : null}
        <Top {...beer}></Top>
        <img src = {beer?.image_url}></img>
        <Middle {...beer} isModal = {isModal}></Middle>
        <Bottom {...beer}></Bottom>
    </Beer>
  );
};

export default Card;
