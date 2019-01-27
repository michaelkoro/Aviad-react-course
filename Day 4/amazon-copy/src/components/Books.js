import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import BooksTable from "./BooksTable";
import booksJson from "../services/books.json";

class Books extends Component {
  state = { name: "", info: [] };

  searchBooks = async () => {
    // let text = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${filter}&maxResults=40&fields=items(id%2CvolumeInfo(authors%2Cdescription%2CimageLinks(thumbnail)%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`
    // );
    // let body = await text.json();
    // console.log(body.items);
    let filter = this.refs.bookName.value;
    this.setState({ name: filter, info: booksJson.items });
  };

  render() {
    return (
      <div>
        <p> Search: </p>
        <input type="text" ref="bookName" />
        <button value="Submit" onClick={this.searchBooks}>
          Submit
        </button>
        <Link to={`/books/${this.state.name}`}> {this.state.name}</Link>
        <Route
          path={`/books/:x`}
          render={() => <BooksTable info={this.state.info} />}
        />
      </div>
    );
  }
}

export default Books;
