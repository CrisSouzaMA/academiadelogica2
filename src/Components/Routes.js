import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from '../Pages/Home';
import Details from './Details';

class Routes extends React.Component{
  render(){
    return(
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/details/:id' component={ Details } />
        </Switch>
    );
  }
}

export default Routes;