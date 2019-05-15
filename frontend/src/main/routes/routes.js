import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Item from '../Item/Item';
import Produto from '../Produtos/produtos';

export default props => (
    <Router history={browserHistory}>
        <Route path='/' component={Produto}></Route>
        <Route path='/:id' component={Produto}></Route>
        <Route path='/itens/:id' component={Item} />
        <Redirect from='*' to='/' />
    </Router>
)