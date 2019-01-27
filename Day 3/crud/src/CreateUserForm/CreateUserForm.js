import React, { Component } from "react";

class CreateUserForm extends Component {
  postUserData = async e => {
    e.preventDefault();
    let inputData = { name: this.refs.name.value, job: this.refs.job.value };
    let text = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputData)
    });
    let response = await text.json();
    console.log("POST response:\n", response);
  };

  render() {
    return (
      <div>
        <h3>Post User Data</h3>
        <form onSubmit={this.postUserData}>
          Username: <input type="text" ref="name" />
          <br />
          Job: <input type="text" ref="job" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateUserForm;
