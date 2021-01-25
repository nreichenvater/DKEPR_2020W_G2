import React, { Component } from "react";
import Auth from "../components/auth/authservice";
import Router from "next/router";
import API from '../api';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      repeatedPassword: "",
    };
  }

  componentDidMount() {
    //document.getElementById("registerMail").focus();
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleChange(e) {
    if(e){
      e.preventDefault();
    }
    let id = e.target.id;
    let val = e.target.value;
    if (id === "registerUser") {
      this.setState({ user: val });
    } else if (id === "registerPassword") {
      this.setState({ password: val });
    } else if (id === "registerRepeatedPassword") {
      this.setState({ repeatedPassword: val });
    }
  }

  register(e) {
    if(e){
      e.preventDefault();
    }

    console.log(
      this.state.user +
        " " +
        this.state.password +
        " " +
        this.state.repeatedPassword
    );

    Auth.register(
      this.state.user,
      this.state.password,
      this.state.repeatedPassword,
      (res) => {
        if (res.status === 200) {
          console.log("Erfolgreich registriert");
          Router.push('/login');
          document.getElementById("registerUser").value = "";
          document.getElementById("registerPassword").value = "";
          document.getElementById("registerRepeatedPassword").value = "";
        } else {
          console.log("Fehler beim Registrieren");
        }
      }
    );
  }

  switchToLogin(e) {
    if(e){
      e.preventDefault();
    }
    Router.push('/login');
  }

  handleKeyUp(e) {
    if(e){
      e.preventDefault();
    }
    if (e.key === "Enter") {
      this.register();
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
            <div class="loginheader">Registrieren</div>
            <div class="loginform w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                class="form-3"
              >
                <input
                  type="text"
                  onChange={this.handleChange.bind(this)}
                  class="logintextfield mail w-input"
                  maxlength="256"
                  name="field"
                  data-name="Field"
                  placeholder="Username"
                  id="registerUser"
                  required=""
                />
                <input
                  type="password"
                  onChange={this.handleChange.bind(this)}
                  class="logintextfield password w-input"
                  maxlength="256"
                  name="field-2"
                  data-name="Field 2"
                  placeholder="Passwort"
                  id="registerPassword"
                  required=""
                />
                <input
                  type="password"
                  onKeyUp={this.handleKeyUp.bind(this)}
                  onChange={this.handleChange.bind(this)}
                  class="logintextfield password w-input"
                  maxlength="256"
                  name="field-2"
                  data-name="Field 2"
                  placeholder="Passwort wiederholen"
                  id="registerRepeatedPassword"
                  required=""
                />
                <a
                  data-w-id="2e7716f4-fa06-b98c-67d2-94a074914c30"
                  onClick={this.register.bind(this)}
                  href="#"
                  class="button login w-button"
                >
                  REGISTRIEREN
                </a>
              </form>
            </div>
            <div class="loginbottomtext">
              Du hast bereits ein Konto? 
              <a
                href="#"
                onClick={this.switchToLogin.bind(this)}
                class="link-5"
              >
                Anmelden
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
