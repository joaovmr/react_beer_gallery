
import { ATUALIZAR_BEER } from './catalogoActions';

interface Beer{
    id:number
    name:string
    image_url:any
    food_pairing:string
    tagline:string
    ph:number
    ibu:number
}

const INITIAL_STATE: IInitalState = {
  beers: {id:0,name:'a',image_url:null,food_pairing:'a',tagline:'a',ph:0,ibu:0},
};

export interface IInitalState {
  beers: Beer;
}

export interface TAction {
  type: string;
  payload: Beer;
}

export interface TCatalogoState {
  beers: Beer;
}

export default (state: IInitalState = INITIAL_STATE, action: TAction) => {
  switch (action.type) {
    case ATUALIZAR_BEER:
      return {
        ...state,
        beers: action.payload,
      };
    default:
      return state;
  }
};