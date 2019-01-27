import React, { Component } from "react";

class BooksTable extends Component {
  render() {
    return (
      <table border="1">
        <tbody>
          <tr>
            <th>title</th>
            <th>subtitle</th>
            <th>publisher</th>
            <th>publishedDate</th>
            {/* <th>description</th> */}
          </tr>
          {this.props.info.map(item => (
            <tr key={item.id}>
              <td>{item.volumeInfo.title}</td>
              <td>{item.volumeInfo.subtitle}</td>
              <td>{item.volumeInfo.publisher}</td>
              <td>{item.volumeInfo.publishedDate}</td>
              {/* <td>{item.volumeInfo.description}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BooksTable;
