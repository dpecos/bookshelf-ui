import { connect } from 'react-redux';

import CategoriesList from '../components/categories/CategoriesList';

const mapStateToProps = function(store) {
    return {  
        categories: store.categories
    };
}

const CategoriesListContainer = connect(mapStateToProps)(CategoriesList);

export default CategoriesListContainer;