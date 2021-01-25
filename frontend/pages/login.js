import Router from "next/router";
import React, { Component } from "react";
import Auth from "../components/auth/authservice";
import API from '../api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }

  componentDidMount() {
    //document.getElementById("loginmailinput").focus();
    document.addEventListener("keyup", this.handleKeyUp);
  }

  login(e) {
    if (e) {
      e.preventDefault();
    }
    console.log(this);
    const body = {
      username: this.state.user,
      password: this.state.password,
    };
    Auth.login(body, (res) => {
        if (res.status === 200) {
          Router.push('/');
          document.getElementById("loginuserinput").value = "";
          document.getElementById("loginpasswordinput").value = "";
        } else {
          console.log("Fehler");
        }
      });
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.id === "loginuserinput") {
      this.setState({ user: e.target.value });
    } else if (e.target.id === "loginpasswordinput") {
      this.setState({ password: e.target.value });
    }
  }

  switchToRegister(e) {
    if (e) {
      e.preventDefault();
    }
    document.getElementById("loginuserinput").value = "";
    document.getElementById("loginpasswordinput").value = "";
    Router.push('/register');
  }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      this.login();
    }
  }

  render() {
    return (
      <div>
        <div className="body-4">
            <div id="HeaderSection" class="defaultsection loginheader">
                <div class="defaultcontainer header">
                    <div class="navigationdiv nomarginbottom">
                        <a className="logo">Mooder</a>
                        <div class="headerspace" />
                    </div>
                </div>
            </div>
          <div class="logindiv">
            <div class="loginheader">Anmelden</div>
            <div class="loginform w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                class="form-3"
              >
                <input
                  onChange={this.handleChange.bind(this)}
                  type="text"
                  class="logintextfield mail w-input"
                  maxLength="256"
                  name="field"
                  data-name="Field"
                  placeholder="Username"
                  id="loginuserinput"
                  required=""
                />
                <input
                  onChange={this.handleChange.bind(this)}
                  onKeyUp={this.handleKeyUp.bind(this)}
                  type="password"
                  class="logintextfield password w-input"
                  maxlength="256"
                  name="field-2"
                  data-name="Field 2"
                  placeholder="Passwort"
                  id="loginpasswordinput"
                  required=""
                />
                <a
                  onClick={this.login.bind(this)}
                  data-w-id="2e7716f4-fa06-b98c-67d2-94a074914c30"
                  href="#"
                  class="button login w-button"
                >
                  ANMELDEN
                </a>
              </form>
              <div class="loginbottomtext">
              Du hast noch kein Konto? 
              <a
                href="#"
                onClick={this.switchToRegister.bind(this)}
                class="link-5"
              >
                Registrieren
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
