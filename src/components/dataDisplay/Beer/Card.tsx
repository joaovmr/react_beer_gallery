import { Beer } from '../../../style/HomeStyle/BeersStyle/Beer';
import { ICardProps } from '../../dataBuild/CardInterfaces'
import AddToCart from './CardComponents/AddToCart';
import Bottom from './CardComponents/Bottom';
import Middle from './CardComponents/Middle';
import Top from './CardComponents/Top';



const Card = ({ beer , isInicial = true, isModal = false}:ICardProps) => {

  return (
    <Beer key={beer.id}>
        {isInicial ? <AddToCart {...beer}></AddToCart> : null}
        <Top {...beer}></Top>
        <img src = {beer?.image_url}></img>
        <Middle {...beer} isModal = {isModal}></Middle>
        <Bottom {...beer}></Bottom>
    </Beer>
  );
};

export default Card;
