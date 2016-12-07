import React, { Component } from 'react';

class Collection extends Component {
    render() {
        return (
            <tr key={this.props.name}>
                <td>{this.props.name}</td>
            </tr>
        );
    }
}

export default Collection;