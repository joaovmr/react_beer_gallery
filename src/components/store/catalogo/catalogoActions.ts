import { IBeer } from "../../dataBuild/Interfaces";

export const ATUALIZAR_BEER = 'catalogo/ATUALIZAR_BEER';

const atualizarBeers = (beer: IBeer[]) => {
  return {
    type: ATUALIZAR_BEER,
    payload: beer,
  };
};


export { atualizarBeers };