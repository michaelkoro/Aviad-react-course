import React, { Component } from "react";
import AppProductPreview from "./AppProductPreview/AppProductPreview";
import booksJson from "../../../model/books.json";
import "./AppProduct.css";

class AppProducts extends Component {
  state = { name: "", items: [] };

  searchBooks = async () => {
    // let text = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${filter}&maxResults=40&fields=items(id%2CvolumeInfo(authors%2Cdescription%2CimageLinks(thumbnail)%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`
    // );
    // let body = await text.json();
    // console.log(body.items);
    let filter = this.refs.productName.value;
    this.setState({ name: filter, items: booksJson.items });
  };

  render() {
    return (
      <div>
        <p> Search Books: </p>
        <input type="text" ref="productName" />
        <button value="Submit" onClick={this.searchBooks}>
          Submit
        </button>
        <div className="products">
          {this.state.items.map(product => (
            <div className="productPreview">
              <AppProductPreview info={product} />
            </div>
          ))}
        </div>

        {/* <Link to={`/products/${this.state.name}`}> {this.state.name}</Link>
        <Route
          path={`/products/:x`}
          render={() => <AppProductPreview info={this.state.items} />}
        /> */}
      </div>
    );
  }
}

export default AppProducts;
