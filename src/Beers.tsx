import React, { useState, useEffect } from 'react'
import './App.css';
import { useFetch } from './components/dataFetch/useFetch';
import Card from './components/dataDisplay/Card'

const url = 'https://api.punkapi.com/v2/beers'
function Beers() {
  const { products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <section className='brejas'>
        {products.map((product:any) => {
          return <Card key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Beers;
