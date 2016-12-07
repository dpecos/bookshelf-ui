import { connect } from 'react-redux';

import CollectionsList from '../components/collections/CollectionsList';

const mapStateToProps = function(store) {
    return {  
        collections: store.collections
    };
}

const CollectionsListContainer = connect(mapStateToProps)(CollectionsList);

export default CollectionsListContainer;