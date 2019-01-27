import React, { Component } from "react";
import "./App.css";
import UsersTable from "./UsersTable/UsersTable";
import CreateUserForm from "./CreateUserForm/CreateUserForm";
import PutUserForm from "./PutUserForm/PutUserForm";
import DeleteUserForm from "./DeleteUserForm/DeleteUserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UsersTable />
          <hr />
          <CreateUserForm />
          <hr />
          <PutUserForm />
          <hr />
          <DeleteUserForm />
        </header>
      </div>
    );
  }
}

export default App;
