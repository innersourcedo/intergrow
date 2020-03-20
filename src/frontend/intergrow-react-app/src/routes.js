import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './component/App';

export const Routers = () => (

    <Switch>
        <Route exact path = '/' component = {App}/>
    </Switch>
);

export default Routers;