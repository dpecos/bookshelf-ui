import { createStore } from 'redux';

const stateReducer = (state = {categories: []}, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY': return {...state, categories: [...state.categories, action.text]}
    default: return state
  }
};

//const store = createStore(stateReducer, applyMiddleware(thunk));
const store = createStore(stateReducer);

store.subscribe(() =>
  console.log("STORE", store.getState())
)

export default store;