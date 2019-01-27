import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppHeader from "./AppHeader/AppHeader";
import AppMain from "./AppMain/AppMain";
import AppFooter from "./AppFooter/AppFooter";
import "./App.css";

class App extends Component {
  render() {
    this.props.dispatch({ type: "INIT" });
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader />
          <AppMain />
          <AppFooter />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const reduxApp = connect(mapStateToProps)(App);
export default reduxApp;
