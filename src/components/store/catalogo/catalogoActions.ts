interface Beer{
    id:number
    name:string
    image_url:any
    food_pairing:string
    tagline:string
    ph:number
    ibu:number
}

export const ATUALIZAR_BEER = 'catalogo/ATUALIZAR_BEER';

const atualizarBeers = (beer: Beer) => {
  return {
    type: ATUALIZAR_BEER,
    payload: beer,
  };
};


export { atualizarBeers };