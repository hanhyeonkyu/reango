import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../container/landing/Home"

function RoutesConfig() {
    return (
        <Switch>
            <Route exact path={"/"} component={Home} />
        </Switch>
    );
}

export default RoutesConfig;
