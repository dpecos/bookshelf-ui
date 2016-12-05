import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <tr key={this.props.name}>
                <td>{this.props.name}</td>
            </tr>
        );
    }
}

export default Category;