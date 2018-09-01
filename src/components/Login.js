import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

class LoginPage extends React.Component {
  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Email"
            autoFocus
          />
          <input
            type="text"
            placeholder="Password"
          />
          <button onClick={this.props.startLogin}>Login</button>
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin)
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
