import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'

import AuthService from '../../utils/AuthService';

export class Container extends React.Component {
  static contextTypes = {
    router: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    let auth = this.props.route.auth;

    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: auth //sends auth instance to children
      })
    }

    let logout = null;
    if (auth.loggedIn()) {
      logout = <button onClick={auth.logout.bind(this)}>Logout</button>;
    }
    
    return (
      <Jumbotron>
        <h2 className={styles.mainTitle}>
          <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
        </h2>
        {logout}
        {children}
      </Jumbotron>
    )
  }
}

export default Container;
