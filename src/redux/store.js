import { combineReducers, createStore } from 'redux';
import tripList from '../data/trips.json';
import orderReducer from './orderRedux';
import globalReducer from './globalRedux';
import filtersReducer from './filtersRedux';

const initialState = {
  trips: tripList,
  countries: {},
  regions: {},
  subregions: {},
  tags: {},
  filters: {
    searchPhrase: '',
    tags: [],
    duration: {
      from: 1,
      to: 14,
    },
  },
  order: {
    trip: null,
    email: '',
    options: {},
  },
};

const reducers = {
  filters: filtersReducer,
  order: orderReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
