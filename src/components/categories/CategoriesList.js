import React, { Component, PropTypes } from 'react';
import Category from './Category';

class CategoriesList extends Component {
    render() {
        const categories = this.props.categories.map((cat, i) => {
            return <Category key={i} name={cat}/>
        });

        return (
            <table>
                <tbody>
                    {categories}
                </tbody>
            </table>
        );
    }
};

CategoriesList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CategoriesList;