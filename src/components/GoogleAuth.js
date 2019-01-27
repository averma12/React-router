import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      console.log("completed");
      window.gapi.client.init({
        clientId:
          "295977716086-kug2bl7fhkf5gljsate8fmrsh7dg8raa.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
