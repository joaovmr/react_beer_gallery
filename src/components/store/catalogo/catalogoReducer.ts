import { ATUALIZAR_BEER } from './catalogoActions';
import { IBeer } from "../../dataBuild/Interfaces";


const INITIAL_STATE: IInitalState = {
  beers: [],
};

export interface IInitalState {
  beers: IBeer[];
}

export interface TAction {
  type: string;
  payload: IBeer[]
}

export interface TCatalogoState {
  beers: IBeer[];
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