import { useDispatch, useSelector} from 'react-redux'
import { IBeerProps } from '../../../dataBuild/Interfaces';
import { atualizarBeers } from '../../../store/catalogo/catalogoActions';
import { TReducers } from '../../../store/reducers';
import { atualizarTotals } from '../../../store/total/totalActions';



const AddToCart = ({id,name,image_url,food_pairing,tagline,ph,ibu}:IBeerProps)  => {

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
    const beersCatalog = useSelector((state: TReducers) => state.catalogo.beers);
    let totalStock:number = useSelector((state: TReducers) => state.total.totals)
    return (
        <>
            <button onClick = {() => {
                const isItemInCatalog = beersCatalog.find(el => beer.id === el.id)
                totalStock = totalStock + Math.floor((ibu * 30)/2);
                isItemInCatalog === undefined ? beersCatalog.push(beer) : console.log('')
                isItemInCatalog === undefined ? dispatch(atualizarTotals(totalStock)) : console.log('')
                dispatch(atualizarBeers(beersCatalog));
            }}>
                +
            </button>
        </>
    )
}

export default AddToCart