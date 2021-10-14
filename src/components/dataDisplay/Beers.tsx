import { useFetch } from '../dataFetch/useFetch';
import { useDataCleaner } from '../dataTreatment/useDataCleaner';
import { useDataFilters } from '../dataTreatment/useDataFilters';
import React from 'react';
import Card from './Beer/Card'
import '../../style/style.css'

interface IProps {
  textoInput:string;
  checkedButton:String
}

const url = 'https://api.punkapi.com/v2/beers'

const Beers: React.FC<IProps> = ({textoInput, checkedButton}) => {
  const { loading,beers }:any = useFetch(url)
  const { cleanedBeers } = useDataCleaner(loading, beers)
  const {maisAcida, menosAcida, maisCara, menosCara} = useDataFilters(loading, beers)
  if(loading === false){
    switch (checkedButton) {
      case 'acid':
        return (
          <div>
            <section className='brejas'>
              <Card key={maisAcida.id} beer = {maisAcida} />
            </section> 
          </div>
        )
        
      case 'lessAcid':
        return (
          <div>
            <section className='brejas'>
              <Card key={menosAcida.id} beer = {menosAcida} />
            </section> 
          </div>
        )
      
      case 'expensive':
        return (
          <div>
            <section className='brejas'>
              <Card key={maisCara.id} beer = {maisCara} />
            </section> 
          </div>
        )
      
      case 'cheap':
        return (
          <div>
            <section className='brejas'>
              <Card key={menosCara.id} beer = {menosCara} />
            </section> 
          </div>
        )
    
      default: return (
        <div>
          <section className='brejas'>
            {cleanedBeers
            .filter((beer:any) => {
    
              let beerString = JSON.stringify(beer)
              if(textoInput === ''){
                return beer
              }else if(beerString.toLowerCase().includes(textoInput.toLowerCase())){
                return beer
              }
            })
            .map((beer:any) => {
              if(checkedButton === 'padrao' || checkedButton === ''){
                return <Card key={beer.id} beer = {beer} />
              }
            })}
            
          </section>
        </div>
      )   
    }
  }
return <h1>Loading</h1>
}

export default Beers;