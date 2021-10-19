import { IBeerProps } from "../../dataBuild/Interfaces";

export const ATUALIZAR_BEER = 'catalogo/ATUALIZAR_BEER';

const atualizarBeers = (beer: IBeerProps[]) => {
  return {
    type: ATUALIZAR_BEER,
    payload: beer,
  };
};


export { atualizarBeers };