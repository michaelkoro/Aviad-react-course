import React, { Component } from "react";

class AppCountryInfo extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.countryName}</h4>
        <h4> flag </h4>
      </div>
    );
  }
}

export default AppCountryInfo;
