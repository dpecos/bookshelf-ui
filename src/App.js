import React, { Component } from 'react';

import CategoriesListContainer from './containers/CategoriesListContainer';

import store from './store/DataStore';

import './App.css';
 
class App extends Component {
  
  componentDidMount() {
    store.dispatch({
      type: "ADD_CATEGORY",
      text: "test"
    });
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
