import React, { Component } from 'react';

import CategoriesListContainer from '../../containers/CategoriesListContainer';
import CollectionsListContainer from '../../containers/CollectionsListContainer';

import store from '../../store/DataStore';
import { fetchCategories } from '../../actions/CategoryActions';
import { fetchCollections } from '../../actions/CollectionActions';

class Home extends Component {

  componentWillMount() {
    store.dispatch(fetchCategories());
    store.dispatch(fetchCollections());
  }

  render() {
    return (
      <div>
        <CategoriesListContainer/>
        <CollectionsListContainer/>
      </div>
    );
  }
}

export default Home;