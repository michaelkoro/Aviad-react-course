import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import AppLogin from "../AppLogin/AppLogin";
import AppRegister from "../AppRegister/AppRegister";
import "./AppAccount.css";

class AppAcount extends Component {
  logout = () => {
    this.props.dispatch({
      type: "LOGOUT"
    });
  }

  render() {
    return (
      <div>
        <div className="account_nav">
          {this.props.name === "Guest" ? (
            <button>
              <Link to="/account/login">Login</Link>
            </button>
          ) : (
            ""
          )}
          {this.props.name === "Guest" ? (
            <button>
              <Link to="/account/register">Register</Link>
            </button>
          ) : (
            ""
          )}

          {this.props.name !== "Guest" ? <button onClick={this.logout}>Logout</button> : ""}
        </div>
        <div>
          <Route path="/account/login" component={AppLogin} />
          <Route path="/account/register" component={AppRegister} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.userReducer.user.userName
  };
};

const reduxApp = connect(mapStateToProps)(AppAcount);
export default reduxApp;
