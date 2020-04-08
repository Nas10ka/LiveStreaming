import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import "./App.css";

import Button from "@material-ui/core/Button";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const _onInit = (auth2) => {
      console.log("init OK", auth2);
    };
    const _onError = (err) => {
      console.log("error", err);
    };
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          // не забудьте указать ваш ключ в .env
          client_id:
            "21927936131-ppd87l389crj951kna1p8dds7cp1ft17.apps.googleusercontent.com",
        })
        .then(_onInit, _onError);
    });
  }
  signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log("Full Name: " + profile.getName());
      console.log("Given Name: " + profile.getGivenName());
      console.log("Family Name: " + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      // токен
      const id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
    });
  };
  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
  };

  render() {
    return (
      <div className="App">
        <Input />
        <Button color="primary" onClick={this.signIn} startIcon={<PermIdentityIcon />}>
          Log In
        </Button>
        <Button color="secondary" onClick={this.signOut} startIcon={<ExitToAppIcon />}>
          Log Out
        </Button>
      </div>
    );
  }
}

export default App;
