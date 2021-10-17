import { combineReducers } from 'redux';
import { catalogoReducer } from './catalogo';
import { TCatalogoState } from './catalogo/catalogoReducer'

export type TReducers = {
  catalogo: TCatalogoState;
};

const reducers = combineReducers({
  catalogo: catalogoReducer ,
});

export default reducers;