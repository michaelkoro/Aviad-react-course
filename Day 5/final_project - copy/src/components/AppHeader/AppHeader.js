import React, { Component } from "react";
import { connect } from "react-redux";
import "./AppHeader.css";
import { Link } from "react-router-dom";

class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <img
          src="https://png.pngtree.com/svg/20170602/avatar_107646.png"
          alt=""
        />
        <p>{this.props.name}</p>

        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/account">My Account</Link>
        </button>

        <button>Products</button>
        {this.props.name !== "Guest" ? <button>My Cart</button> : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.userReducer.user.userName
  };
};

const reduxApp = connect(mapStateToProps)(AppHeader);
export default reduxApp;
