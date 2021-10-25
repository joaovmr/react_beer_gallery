import { IBeerProps } from "../../dataBuild/BeersInterfaces";

export const ATUALIZAR_BEER = 'catalogo/ATUALIZAR_BEER';

const atualizarBeers = (beer: IBeerProps[]) => {
  return {
    type: ATUALIZAR_BEER,
    payload: beer,
  };
};


export { atualizarBeers };