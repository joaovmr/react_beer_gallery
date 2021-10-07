import React, { useState, useEffect } from 'react'
import '../../style/style.css'
import { useFetch } from '../dataFetch/useFetch';


interface Props {
    name:string
    image_url:string
    food_pairing:string
    tagline:string
} 

interface BottomProps{
  tagline:string
}

const FoodList = (food_pairing:string) => {
  return(
    <span className = 'conteudo'>
      <h1>Combines with:</h1>
      <ul>
        <li>{food_pairing[0]}</li>
        <li>{food_pairing[1]}</li>
        <li>{food_pairing[2]}</li>
      </ul>
    </span>
  )
}

const Bottom = (tagline:string) => {
  return (
    <div className = 'fundo'>
      {tagline}
    </div>
  )
}

const Card = ({ image_url, name, food_pairing,tagline}:Props) => {
  return (
    <div className = 'breja'>
        <div className = 'colarinho'>
          <h1>{name}</h1>
        </div>
        <img src = {image_url} alt = {name}></img>
        <FoodList {...food_pairing}></FoodList>
        <div className = 'fundo'>
          <span className = 'slogan'>{tagline}</span>
        </div>
    </div>
  );
};

export default Card;
