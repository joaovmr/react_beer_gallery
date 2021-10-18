import '../../../style/style.css'
import { ICardProps } from '../../dataBuild/Interfaces'
import AddToCartBottom from './AddToCartBottom'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'


const Card = ({ beer , isInicial = true, isModal = false}:ICardProps) => {

  return (
    <div key={beer.id} className = 'breja'>
        {isInicial ? <AddToCartBottom {...beer}></AddToCartBottom> : null}
        <Top {...beer}></Top>
        <img src = {beer?.image_url} alt = {beer.name}></img>
        <Middle {...beer} isModal = {isModal}></Middle>
        <Bottom {...beer}></Bottom>
    </div>
  );
};

export default Card;
