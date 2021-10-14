import { useFetch } from '../dataFetch/useFetch';
import React from 'react';
import Card from './Beer/Card'
import '../../style/style.css'

interface IProps {
  textoInput:string;
  checkedButton:String
}

const max = function(prev: { ph: number; }, current: { ph: number; }) {
  return (prev.ph > current.ph) ? prev : current
}


const min = function(prev: { ph: number; }, current: { ph: number; }) {
  return (prev.ph < current.ph) ? prev : current
}

const maxv = function(prev: { ibu: number; }, current: { ibu: number; }) {
  return (prev.ibu > current.ibu) ? prev : current
}

const minv = function(prev: { ibu: number; }, current: { ibu: number; }) {
  return (prev.ibu < current.ibu) ? prev : current
}

const url = 'https://api.punkapi.com/v2/beers'

const Beers: React.FC<IProps> = ({textoInput, checkedButton}) => {
  const { beers }:any = useFetch(url)

  const maisAcida = beers.reduce(max)
  const menosAcida = beers.reduce(min)
  const maisCara = beers.reduce(maxv)
  const menosCara = beers.reduce(minv)

  if(checkedButton === 'acid'){
    return (
      <div>
        <section className='brejas'>
          <Card key={maisAcida.id} beer = {maisAcida} />
        </section>
      </div>
    )
  }else if(checkedButton === 'lessAcid'){
    return (
      <div>
        <section className='brejas'>
          <Card key={menosAcida.id} beer = {menosAcida} />
        </section>
      </div>
    )
  }else if(checkedButton === 'expensive'){
    return (
      <div>
        <section className='brejas'>
          <Card key={maisCara.id} beer = {maisCara} />
        </section>
      </div>
    )
  }else if(checkedButton === 'cheap'){
    return (
      <div>
        <section className='brejas'>
          <Card key={menosCara.id} beer = {menosCara} />
        </section>
      </div>
    )
  }
  return (
    <div>
      <section className='brejas'>
        {beers
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

export default Beers;
