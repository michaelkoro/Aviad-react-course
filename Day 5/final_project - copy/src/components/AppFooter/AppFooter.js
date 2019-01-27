import React, { Component } from "react";
import "./AppFooter.css";

class AppFooter extends Component {
  render() {
    return (
      <div className="footer">
        <h4>
          &#169; {new Date().getFullYear()} - all rights reserved - Aviad Bitton
        </h4>
      </div>
    );
  }
}

export default AppFooter;
