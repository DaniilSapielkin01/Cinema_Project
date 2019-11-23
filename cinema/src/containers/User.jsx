import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserInput } from "../components/User/UserInput";

export class User extends Component {
  state = {
    UserShow: false
  };

  handleClickUserShow = () => {
    this.setState(prevState => ({
      UserShow: !prevState.UserShow
    }));
  };

  render() {
    return (
      <div className="user-input  ml-auto p-2 bd-highlight">
        <Link to="/user" onClick={this.handleClickUserShow}>
          <a href="/" className="icon-user-circle"></a>
        </Link>
        {this.state.UserShow && (
          <UserInput handleUserShow={this.handleClickUserShow} />
        )}
      </div>
    );
  }
}
