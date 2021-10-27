import { useDispatch, useSelector} from 'react-redux'
import { AddToCartButton } from '../../../../style/HomeStyle/BeersStyle/BeerComponents/AddToCart';
import { IAddToCartProps } from '../../../dataBuild/CardInterfaces';
import { atualizarBeers } from '../../../store/catalogo/catalogoActions';
import { TReducers } from '../../../store/reducers';
import { atualizarTotals } from '../../../store/total/totalActions';


const AddToCart = ({id,name,image_url,food_pairing,tagline,ph,ibu,isActive,setIsActive}:IAddToCartProps)  => {

    const dispatch = useDispatch()
    const beer = {
        id : id,
        name: name,
        image_url:image_url,
        food_pairing: food_pairing,
        tagline: tagline,
        ph: ph,
        ibu: ibu,
        qtd:1
    }

    const handleAddToCart = () => {
        const isItemInCatalog = beersCatalog.find(el => beer.id === el.id)
        setIsActive(!isActive)
        console.log(isActive)
        totalStock = totalStock + Math.floor((ibu * 30)/2);
        isItemInCatalog === undefined ? beersCatalog.push(beer) : console.log('')
        isItemInCatalog === undefined ? dispatch(atualizarTotals(totalStock)) : console.log('')
        dispatch(atualizarBeers(beersCatalog));
    }

    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers);
    let totalStock:number = useSelector((state: TReducers) => state.total.totals)
    return (
        <>
            <AddToCartButton onClick = {handleAddToCart}>
                +
            </AddToCartButton>
        </>
    )
}

export default AddToCart