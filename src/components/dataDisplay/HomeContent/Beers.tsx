import { useFetch } from '../../dataFetch/useFetch';
import { useDataCleaner } from '../../dataTreatment/useDataCleaner';
import { useDataFilters } from '../../dataTreatment/useDataFilters';
import Card from '../Beer/Card'
import {IBeersProps} from '../../dataBuild/BeersInterfaces'
import { BeersVisual } from '../../../style/HomeStyle/BeersStyle/Beers';

const url = 'https://api.punkapi.com/v2/beers'
const Beers = ({textoInput, checkedButton}:IBeersProps) => {
  const { loading,beers }:any = useFetch(url)
  const { cleanedBeers } = useDataCleaner(loading, beers)
  const { maisAcida, menosAcida, maisCara, menosCara} = useDataFilters(loading, beers)

  if(loading === false){
    switch (checkedButton) {
      case 'acid':
        return (
          <div>
            <BeersVisual>
              <Card key={maisAcida.id} beer = {maisAcida} />
            </BeersVisual> 
          </div>
        )
        
      case 'lessAcid':
        return (
          <div>
            <BeersVisual>
              <Card key={menosAcida.id} beer = {menosAcida} />
            </BeersVisual> 
          </div>
        )
      
      case 'expensive':
        return (
          <div>
            <BeersVisual>
              <Card key={maisCara.id} beer = {maisCara} />
            </BeersVisual> 
          </div>
        )
      
      case 'cheap':
        return (
          <div>
            <BeersVisual>
              <Card key={menosCara.id} beer = {menosCara} />
            </BeersVisual> 
          </div>
        )
    
      default: 
      return (
        <div>
          <BeersVisual>
            {cleanedBeers
            .filter((beer:object) => {
    
              let beerString = JSON.stringify(beer)
              if(textoInput === ''){
                return beer
              }else if(beerString.toLowerCase().includes(textoInput.toLowerCase())){
                return beer
              }
            })
            .map((beer:any) => {
              return <Card key={beer.id} beer = {beer} />
            })} 
          </BeersVisual>
        </div>
      )   
    }
  }
return <h1>Loading</h1>
}

export default Beers;