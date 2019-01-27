import React, { Component } from "react";

class GoogleAuth extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.isSignedIn = "isSignedIn";
  }
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      console.log("completed");
      window.gapi.client.init({
        clientId:"295977716086-r9bvdvtgup9bj8os3siqn2i837eknqtb.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        
        this.setState({[this.isSignedIn]:this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
   this.setState({[this.isSignedIn]:this.auth.isSignedIn.get()});
  }

  handleAuth = (param) => {
    if(param.toUpperCase() === "SIGNIN"){
      this.auth.signIn();
    }
    else{
      this.auth.signOut();
    }
  }

  
  

  render() {
    console.log(this.state);
    if(!this.state.hello){
      console.log("hello");
    }
    const signInButton = (<button className="ui red google button" onClick={(e) => this.handleAuth("signout")}>
    <i className= "google icon"/>
    Sign Out
    </button>);
    const signOutButton = (<button className="ui red google button" onClick={(e) => this.handleAuth("signin")}>
    <i className= "google icon"/>
    Sign In with Google
    </button>) 
  return (<div>
    {this.state.isSignedIn? signInButton:signOutButton}
    </div>);
  }
}

export default GoogleAuth;
