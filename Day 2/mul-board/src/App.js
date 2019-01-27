import React, { Component } from "react";
import "./App.css";
import CountryDropDown from "./CountryDropDown";
import CountryName from "./CountryName";
import CountryFlag from "./CountryFlag";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], selectedCountry: {} };
    this.getCountries();
  }

  async getCountries() {
    let text = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;flag"
    );
    let body = await text.json();
    this.setState({ countries: body });
  }

  changeSelectedCountry = event => {
    let country = this.state.countries.find(
      country => country.name === event.target.value
    );
    this.setState({ selectedCountry: country });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Look for your flag</h1>
            <CountryDropDown
              countries={this.state.countries}
              changeSelectedCountry={this.changeSelectedCountry}
            />
            <CountryName name={this.state.selectedCountry.name} />
            <CountryFlag flagUrl={this.state.selectedCountry.flag} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
