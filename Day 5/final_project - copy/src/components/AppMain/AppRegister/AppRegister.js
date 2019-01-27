import React, { Component } from "react";
import { connect } from "react-redux";
import CountryDropDown from "../Country/CountryDropDown";
import "./AppRegister.css";

class AppRegister extends Component {
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

  register = () => {
    let userName = this.refs.userName.value;
    let password = this.refs.password.value;
    if (this.validUsername(userName) && this.validPassword(password)) {
      this.props.dispatch({
        type: "REGISTER",
        payload: { userName, password }
      });
    } else {
      alert("bad username or password");
    }
  };

  validUsername = userName => {
    let check = true;
    if (!(userName.length >= 3 && userName.length <= 15)) {
      check = false;
    }
    let regexp = new RegExp("^([A-Za-z])+$");
    if (!regexp.test(userName)) {
      check = false;
    }
    return check;
  };

  validPassword = password => {
    let check = true;
    if (!(password.length >= 5 && password.length <= 10)) {
      check = false;
    }
    return check;
  };

  changeSelectedCountry = event => {
    let country = this.state.countries.find(
      country => country.name === event.target.value
    );
    this.setState({ selectedCountry: country });
  };

  render() {
    return (
      <div className="login">
        <label>First Name:</label>
        <input ref="firstName" />
        <label>Last Name:</label>
        <input ref="lastName" />
        <label>Username:</label>
        <input ref="userName" />
        <label>Password:</label>
        <input ref="password" type="password" />
        <label>Country</label>
        <CountryDropDown
          countries={this.state.countries}
          changeSelectedCountry={this.changeSelectedCountry}
        />
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // filter only the reqiered props that we will use in the App component
  // then we can access them inside the class as: this.props.count & this.props.name
  return {
    name: state.userReducer.user.userName
  };
};

const reduxApp = connect(mapStateToProps)(AppRegister);
export default reduxApp;
