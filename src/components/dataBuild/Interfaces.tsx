export interface IBeer{
  id:number
  name:string
  image_url:any
  food_pairing:string
  tagline:string
  ph:number
  ibu:number
}

export interface ICardProps {
  beer:any
  isInicial?:boolean
  isModal?:boolean
} 

export interface MiddleProps{
  id:number
  food_pairing:string
  isModal?:boolean
}

export interface BottomProps{
  tagline:string
  ph:number
  ibu:number
}

export interface TopProps{
  name:string
}