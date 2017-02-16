import React from 'react'
import {Route, IndexRedirect} from 'react-router'

import AuthService from './utils/AuthService'

import Container from './components/home/Container'
import Home from './components/home/Home'
import Login from './components/auth/Login'

const auth = new AuthService('mqMSfZp26FzuDVuNDFjrgHl5EK3IBuQk', 'dpecos.eu.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes