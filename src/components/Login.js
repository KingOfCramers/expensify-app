import React from "react";

class LoginPage extends React.Component {
  state =  {
    email: "",
    password: ""
  }

  onEmailChange() {
    console.log("Loaded")
  }

  onPasswordChange(){
    console.log("Loaded")
  }

  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Email"
            autoFocus
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  };
};

export default LoginPage;