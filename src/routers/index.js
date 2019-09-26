import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Player from '../componentes/mainComponents/player'; 
import Player_View from '../componentes/mainViews/Player-view';
import Home_view from '../componentes/mainViews/Home-View';

const routing = (
    <Router>
        <Switch>
           <Route path='/' component={Home_view} exact />    
           <Route path='/video' component={Player_View} exact />  
           <Route component={null} />
        </Switch>   
    </Router>
)

export default routing;