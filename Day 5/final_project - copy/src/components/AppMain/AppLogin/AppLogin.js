import React, { Component } from "react";
import { connect } from "react-redux";
import "./AppLogin.css";

class AppLogin extends Component {
  login = () => {
    let userName = this.refs.userName.value;
    let password = this.refs.password.value;
    if (this.validUsername(userName) && this.validPassword(password)) {
      alert("ok");
      this.props.dispatch({
        type: "LOGIN",
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

  render() {
    return (
      <div className="login">
        <label>Username:</label>
        <input ref="userName" />
        <label>Password:</label>
        <input ref="password" type="password" />
        <button onClick={this.login}>Login</button>
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

const reduxApp = connect(mapStateToProps)(AppLogin);
export default reduxApp;
