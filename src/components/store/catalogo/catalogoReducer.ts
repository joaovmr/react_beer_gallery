import { ATUALIZAR_BEER } from './catalogoActions';
import { IBeerProps } from "../../dataBuild/BeersInterfaces";


const INITIAL_STATE: IInitalState = {
  beers: [],
};

export interface IInitalState {
  beers: IBeerProps[];
}

export interface TAction {
  type: string;
  payload: IBeerProps[]
}

export interface TCatalogoState {
  beers: IBeerProps[];
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