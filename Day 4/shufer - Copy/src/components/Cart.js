import React, { Component } from "react";
import { connect } from "react-redux";
import { productsList } from "../models/products";

class Cart extends Component {
  remove = productName => {
    console.log(productName);
    this.props.dispatch({ type: "REMOVE", payload: { name: productName } });
  };

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {this.props.items.map(product => {
            return (
              <li key={product}>
                <p>{product}</p>
                <button onClick={() => this.remove(product)}>remove</button>
              </li>
            );
          })}
          
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cartReducer.items
  };
};
const reduxApp = connect(mapStateToProps)(Cart);
export default reduxApp;
