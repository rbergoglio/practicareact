import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
  </tr>
);

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("https://rbergoglio-deliveryapp.herokuapp.com/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} key={currentuser._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}
