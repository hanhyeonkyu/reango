import React from 'react';
import { Route, Switch } from "react-router-dom";
import landing from '../container/mainpages/landing'
import about from "../container/mainpages/about"
import easy from "../container/mainpages/easy"
import gold from "../container/mainpages/gold"
import life from "../container/mainpages/life"
import work from "../container/mainpages/work"

function HomeRoutes() {
    return (
        <Switch>
            <Route exact path={"/"} component={landing} />
            <Route exact path={"/about"} component={about} />
            <Route exact path={"/easy"} component={easy} />
            <Route exact path={"/life"} component={life} />
            <Route exact path={"/gold"} component={gold} />
            <Route exact path={"/work"} component={work} />
        </Switch>
    );
}

export default HomeRoutes;
