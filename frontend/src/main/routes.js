import React from 'react'
// import {Router, Route, Redirect} from 'react-router'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Item from './Item';
import Produto from './produtos'

export default props => (
    // <Router history={Router.hasHistory}>
    //     <Route path='/' component={Produto}></Route>
    //     <Route path='/itens/:id' component={Item} />
    //     <Redirect from='*' to='/' />
    // </Router>


    <BrowserRouter >
        <Switch>
        <Route path='/' component={Produto} />
        <Route path='/itens/:id' component={Item} />          
        <Route exact path="/" render={() => (<Redirect to="/" />)} />          
        <Route path="*" component={Produto} />          
        </Switch>
    </BrowserRouter>
)