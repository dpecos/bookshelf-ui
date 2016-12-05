import React, { Component } from 'react';

import CategoriesListContainer from './containers/CategoriesListContainer';

import store from './store/DataStore';
import { fetchCategories } from './actions/CategoryActions';

import './App.css';
 
class App extends Component {
  
  componentWillMount() {
    store.dispatch(fetchCategories());
  }

  render() {
    return (
      <div>
        <CategoriesListContainer/>
      </div>
    );
  }
}

export default App;
