import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";

export class UserSignUp extends Component {
  componentWillMount() {
    this.inputModal = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(this.inputModal);
  }

  componentWillUnmount() {
    this.inputModal.remove();
  }

  render() {
    return ReactDOM.createPortal(
      <div className="user-input-wrapper">
        <div className="modal-input-user">
          <Logo />
          <div className="form-block-user">
            <form>
              <div class="form-group form-sign-up">
                <label for="exampleInputEmail1">E-mail адрес </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group form-sign-up">
                <label for="exampleInputPassword1">Введите пароль</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-sign-up ">
                <label for="exampleInputPassword1">Повторите пароль</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button className="btn">Зарегестрироватся</button>
            </form>
          </div>
          <button
            className="btn btn-close-user"
            onClick={this.props.handleUserShow}
          >
            X
          </button>
        </div>
      </div>,
      this.inputModal
    );
  }
}
