import React, { Component } from "react";
import AppHome from "./AppHome/AppHome";
import AppAccount from "./AppAccount/AppAccount";
import { Route } from "react-router-dom";

class AppMain extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AppHome} />
        <Route path="/account" component={AppAccount} />
      </div>
    );
  }
}

export default AppMain;
