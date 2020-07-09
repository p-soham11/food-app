import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import Search from './Search';
import Details from './Details';
import NotFound from './NotFound/NotFound';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function Router() {
    return(
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>

                    <Route exact path='/' render={() => (
                        <Redirect to='/home' />
                    )} />

                    <Route exact path='/home' component={Home}></Route>
                    <Route exact path='/search' component={Search}></Route>
                    <Route exact path='/details' component={Details}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Router;