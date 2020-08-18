import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from '../App';
import Cart from './Cart';

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/cart" exact component={Cart} />
    </div>
  </Router>
)


export default routing;