import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const stateReducer = (state = {categories: []}, action) => {
  console.log("STORE - action: " + action.type + " " + JSON.stringify(action) );
  switch (action.type) {
    case 'ADD_CATEGORY': return {...state, categories: [...state.categories, action.text]}
    case 'CATEGORIES_RETRIEVED': return {...state, categories: action.categories}
    default: return state
  }
};

const store = createStore(stateReducer, applyMiddleware(thunk));

store.subscribe(() =>
  console.log("STORE - state", store.getState())
)

export default store;