import { combineReducers } from 'redux';
import { totalReducer } from './total';
import { TTotalState } from './total/totalReducer'
import { catalogoReducer } from './catalogo';
import { TCatalogoState } from './catalogo/catalogoReducer'

export type TReducers = {
  catalogo: TCatalogoState;
  total : TTotalState;
};

const reducers = combineReducers({
  catalogo: catalogoReducer ,
  total: totalReducer
});

export default reducers;