import Card from "../../Beer/Card";
import { connect } from 'react-redux';
import { TReducers } from "../../../store/reducers";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IBeerProps } from "../../../dataBuild/BeersInterfaces";
import { CartPrice, ModalContent, ModalVisual, NoItems } from "../../../../style/HomeStyle/HeaderStyle/HeaderComponents/Modal";


const mapStateToProps = (state: TReducers) => {
    return {
      beers: state.catalogo.beers,
    };
  };

const Modal = ({onClose = () => {}}:any) => {
    const history = useHistory();
    const totalStock = useSelector((state: TReducers) => state.total.totals)
    const handleOutsideClick = (e:any) => {
        if(e.target.id === 'modal') onClose();
    }
    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers);

    return(
        <ModalVisual id = 'modal'onClick = {handleOutsideClick}>
            <ModalContent> 
                {beersCatalog.length !== 0 ? 
                <CartPrice>
                    <h1>Total Price of the cart: ${totalStock}</h1>
                    <button onClick={()=> history.push("/checkout")}>Buy</button>
                </CartPrice>
                 : null }
                {beersCatalog.length !== 0 ?
                beersCatalog.map((beer:IBeerProps) => {
                      return (
                        <>
                            <Card key={beer.id} beer = {beer} isInicial = {false} isModal = {true}/>
                        </>
                      )
                }) : <NoItems>There are no Items in the Cart</NoItems>}  
            </ModalContent>
        </ModalVisual>
    )
}

export default connect(mapStateToProps)(Modal);