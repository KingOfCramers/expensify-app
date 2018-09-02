import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth"; // A function...

export const Header = ({ startLogout }) => ( // Props need to be imported in a stateless functional here!
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={startLogout}>Log out</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);