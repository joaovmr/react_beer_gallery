export interface IBeerProps{
  id:number
  name:string
  image_url:any
  food_pairing:string
  tagline:string
  ph:number
  ibu:number
  qtd:number
}

export interface IFilterProps {
  textoInput:string;
  setTextoInput: any;
  checkedButton: string;
  setCheckedButton:any
}

export interface IHeaderProps {
  textoInput:string;
  setTextoInput: any;
  checkedButton: string;
  setCheckedButton:any
}

export interface IBeersProps {
  textoInput:string;
  checkedButton:String
}

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