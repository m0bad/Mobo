import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/auth";

class Navbar extends Component {
  logout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <i>Mobo</i>
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={"/newTeam"}>Create Team</Link>
              </li>
              <li>
                <a onClick={this.logout}>Log out</a>
              </li>
            </ul>
          ) : (
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <Link to="/signin">Log in</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStatetoProps,
  {logout}
)(Navbar);
