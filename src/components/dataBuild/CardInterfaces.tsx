
export interface ICardProps {
  beer:any
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