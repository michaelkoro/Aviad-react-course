import React, { Component } from "react";
import CountryName from "./Country/CountryName";
import CountryFlag from "./Country/CountryFlag";

class AppCountryInfo extends Component {
  render() {
    return (
      <div>
        <CountryName name={this.props.countryName} />
        <CountryFlag flagUrl={this.props.countryFlag} />
      </div>
    );
  }
}

export default AppCountryInfo;
