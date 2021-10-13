import { useFetch } from '../dataFetch/useFetch';
import React from 'react';
import Card from './Beer/Card'
import '../../style/style.css'

interface IProps {
  textoInput:string;
}

const url = 'https://api.punkapi.com/v2/beers'

const Beers: React.FC<IProps> = ({textoInput}) => {
  console.log(textoInput)
  const { beers }:any = useFetch(url)
  return (
    <div>
      <section className='brejas'>
        {beers.filter((beer:any) => {
          if(textoInput === ''){
            return beer
          }else if(beer.name.toLowerCase().includes(textoInput.toLowerCase())){
            return beer
          }
        })
        .map((beer:any) => {
          return <Card key={beer.id} beer = {beer} />
        })}
      </section>
    </div>
  )
}

export default Beers;
