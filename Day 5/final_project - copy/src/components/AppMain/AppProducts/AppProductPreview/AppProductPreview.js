import React, { Component } from "react";

class AppProductPreview extends Component {
  render() {
    return (
      <div>
        <table border="1">
          <tbody>
            <tr>
              <th>title</th>
              <th>subtitle</th>
              <th>publisher</th>
              <th>publishedDate</th>
              {/* <th>description</th> */}
            </tr>
            <tr key={this.props.info.id}>
              <td>{this.props.info.volumeInfo.title}</td>
              <td>{this.props.info.volumeInfo.subtitle}</td>
              <td>{this.props.info.volumeInfo.publisher}</td>
              <td>{this.props.info.volumeInfo.publishedDate}</td>
              {/* <td>{this.props.info.volumeInfo.description}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AppProductPreview;
