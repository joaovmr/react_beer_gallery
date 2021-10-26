import { Dispatch, SetStateAction } from "react";
import { IBeerProps } from "./BeersInterfaces";

export interface ICardProps {
  beer:IBeerProps
  isInicial?:boolean
  isModal?:boolean
} 

export interface IMiddleProps{
  id:number
  food_pairing:string
  ibu:number
  isModal?:boolean
}

export interface IBottomProps{
  tagline:string
  ph:number
  ibu:number
}

export interface ITopProps{
  name:string
}

export interface IItemManipulationProps{
  value:number
  setValue: Dispatch<SetStateAction<number>>
  ibu:number
  selected: IBeerProps
  totalStock: number
}