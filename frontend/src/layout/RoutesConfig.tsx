import React from 'react';
import { Switch } from "react-router-dom";
import Home from "../container/landing/Home"

function RoutesConfig() {
    return (
        <Switch>
            <Home />
        </Switch>
    );
}

export default RoutesConfig;
