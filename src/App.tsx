import React, { useState, useEffect } from 'react'
import './App.css';
import { useFetch } from './components/useFetch';
import Beer from './components/Beer'

const url = 'https://api.punkapi.com/v2/beers'
function App() {
  const { products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <section className='products'>
        {products.map((product:any) => {
          return <Beer key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default App;
