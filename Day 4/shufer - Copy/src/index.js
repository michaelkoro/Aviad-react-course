import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { cartReducer } from "./reducers/CartReducer";

import Products from "./components/Products";
import Cart from "./components/Cart";

const combined = combineReducers({
  cartReducer
});
/**
 * createStore  -Creates a Redux store that holds the state tree.
 * @param reducer A function that returns the next state tree, given the
 *   current state tree and the action to handle.
 * @returns A Redux store that lets you read the state, dispatch actions and
 *   subscribe to changes.
 */
const myStore = createStore(combined);

/**
 * Provider - is a "react-redux" built-in component
 * Makes the Redux store available to the connect()
 * calls in the component hierarchy below.
 */
render(
  <Provider store={myStore}>
    {/*inside Provider we can create only one element (like return in render function)*/}
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/products">Products</Link>{" "}
          </li>
          <li>
            <Link to="/cart">Cart</Link>{" "}
          </li>
        </ul>
        <Route exact path="/" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
