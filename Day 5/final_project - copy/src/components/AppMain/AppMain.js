import React, { Component } from "react";
import AppHome from "./AppHome/AppHome";
import AppAccount from "./AppAccount/AppAccount";
import AppProducts from "./AppProducts/AppProducts";
import { Route } from "react-router-dom";

class AppMain extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={AppHome} />
        <Route path="/account" component={AppAccount} />
        <Route path="/products" component={AppProducts} />
      </div>
    );
  }
}

export default AppMain;
