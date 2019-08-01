import React from "react";
import {Route, Switch} from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"

export default (
  <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route path = "/dashboard" component = {Dashboard}/>
  </Switch>
)

