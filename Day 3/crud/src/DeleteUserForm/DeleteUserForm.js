import React, { Component } from "react";

class DeleteUserForm extends Component {
  postUserData = async e => {
    e.preventDefault();
    await fetch(`https://reqres.in/api/users/${this.refs.id.value}`, {
      method: "DELETE"
    });
    console.log(`Deleted user ${this.refs.id.value}`);
  };

  render() {
    return (
      <div>
        <h3>Delete User Data</h3>
        <form onSubmit={this.postUserData}>
          ID: <input type="text" ref="id" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default DeleteUserForm;
