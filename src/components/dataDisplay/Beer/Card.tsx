import '../../../style/style.css'
import Button from './Button'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'

interface Beer {
    beer:any
    isInicial?:boolean
} 


const Card = ({ beer ,isInicial = true}:Beer) => {

  return (
    <div key={beer.id} className = 'breja'>
        {isInicial ? <Button {...beer}></Button> : null}
        <Top {...beer}></Top>
        <img src = {beer?.image_url} alt = {beer.name}></img>
        <Middle {...beer}></Middle>
        <Bottom {...beer}></Bottom>
    </div>
  );
};

export default Card;
