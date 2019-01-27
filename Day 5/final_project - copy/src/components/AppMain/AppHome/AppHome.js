import React, { Component } from "react";
import { connect } from "react-redux";
import AppCountryInfo from "../AppCountryInfo";
import bookStoreInfo from "../../../model/bookStore";

class AppHome extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to our Book Store</h2>
        <img
          src="https://cornerbookstorenyc.com/wp-content/uploads/2018/11/corner-storefront.jpg"
          alt=""
        />
        <h3>{bookStoreInfo.address}</h3>
        <AppCountryInfo countryName={bookStoreInfo.country} />
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

const reduxApp = connect(mapStateToProps)(AppHome);
export default reduxApp;
