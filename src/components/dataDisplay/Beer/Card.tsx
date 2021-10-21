import '../../../style/style.css'
import { ICardProps } from '../../dataBuild/Interfaces'
import AddToCart from './CardComponents/AddToCart';
import Bottom from './CardComponents/Bottom';
import Middle from './CardComponents/Middle';
import Top from './CardComponents/Top';



const Card = ({ beer , isInicial = true, isModal = false}:ICardProps) => {

  return (
    <div key={beer.id} className = 'breja'>
        {isInicial ? <AddToCart {...beer}></AddToCart> : null}
        <Top {...beer}></Top>
        <img src = {beer?.image_url} alt = {beer.name}></img>
        <Middle {...beer} isModal = {isModal}></Middle>
        <Bottom {...beer}></Bottom>
    </div>
  );
};

export default Card;
