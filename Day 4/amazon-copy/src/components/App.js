import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Books from "./Books";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/books" component={Books} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
