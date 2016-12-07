import React, { Component, PropTypes } from 'react';
import Collection from './Collection';

class CollectionsList extends Component {
    render() {
        const collections = this.props.collections.map((cat, i) => {
            return <Collection key={i} name={cat}/>
        });

        return (
            <table>
                <tbody>
                    {collections}
                </tbody>
            </table>
        );
    }
};

CollectionsList.propTypes = {
    collections: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CollectionsList;