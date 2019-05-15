import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import App from './App'
import Item from './Item'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/itens/:id' component={Item} />
        <Redirect from='*' to='/' />
    </Router>
)