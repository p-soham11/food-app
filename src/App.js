import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import Details from './components/Details';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
              
              <Route exact path='/' render={() => (
                <Redirect to='/home' />
              )}/>

              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/search' component={Search}></Route>
              <Route exact path='/details' component={Details}></Route>
              <Route component={NotFound}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
