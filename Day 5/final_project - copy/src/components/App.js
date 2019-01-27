import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";
import AppMain from "./AppMain/AppMain";
import AppFooter from "./AppFooter/AppFooter";
import "./App.css";

class App extends Component {
  render() {
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

export default App;
