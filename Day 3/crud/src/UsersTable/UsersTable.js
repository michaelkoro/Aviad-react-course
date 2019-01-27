import React, { Component } from "react";

class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.getAllUsers();
  }

  async getAllUsers() {
    let text = await fetch("https://reqres.in/api/users");
    let body = await text.json();
    this.setState({ users: body.data });
  }

  render() {
    return (
      <div>
        <h3>Get Users Table</h3>
        <table border="1">
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <td> {user.id}</td>
                <td> {user.first_name}</td>
                <td> {user.last_name}</td>
                <td>
                  <img src={user.avatar} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersTable;
