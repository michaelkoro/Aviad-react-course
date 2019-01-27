import React, { Component } from "react";
import { connect } from "react-redux";
import { productsList } from "../models/products";

class Products extends Component {
  add = productName => {
    console.log(productName);
    this.props.dispatch({ type: "ADD", payload: { name: productName } });
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {productsList.map(product => {
            return (
              <li key={product.name}>
                <p>{product.name}</p>
                <button onClick={() => this.add(product.name)}>add</button>
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
const reduxApp = connect(mapStateToProps)(Products);
export default reduxApp;
