import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

class LoginPage extends React.Component {
  render(){
    return (
      <div>
        <form onSubmit={this.props.startLogin}>
          <input
            type="text"
            placeholder="Email"
            autoFocus
          />
          <input
            type="text"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (e) => {
    dispatch(startLogin()) // Auth "action" function fetched from auth folder. Returned function made possible by "thunk".
    e.preventDefault();
  }
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
