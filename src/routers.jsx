import React from 'react';
import {Router,Route,Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// NOTE: starting page引入
import HomePage from './App';

// NOTE: ending
export default (
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' component={HomePage} />
        </Switch>
    </Router>
)
