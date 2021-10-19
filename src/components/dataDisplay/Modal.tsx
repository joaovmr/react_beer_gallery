import Card from "./Beer/Card";
import { connect } from 'react-redux';
import { TReducers } from "../store/reducers";
import { useSelector } from 'react-redux';


const mapStateToProps = (state: TReducers) => {
    return {
      beers: state.catalogo.beers,
    };
  };

const Modal = ({onClose = () => {}}:any) => {
    const handleOutsideClick = (e:any) => {
        if(e.target.id === 'modal') onClose();
    }
    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers);
    return(
        <div id = 'modal' className = "modal" onClick = {handleOutsideClick}>
            <div className = "container"> 
                {beersCatalog.length !== 0 ? 
                beersCatalog.map((beer:any) => {
                      return <Card key={beer.id} beer = {beer} isInicial = {false} isModal = {true}/>
                }) : <h1 className = 'noItems'>There is no Items in the Cart</h1>}  
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Modal);