
export const ATUALIZAR_TOTAL = 'catalogo/ATUALIZAR_TOTAL';

const atualizarTotals = (total: number) => {
  return {
    type: ATUALIZAR_TOTAL,
    payload: total,
  };
};


export { atualizarTotals };