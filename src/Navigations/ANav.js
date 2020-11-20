import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/index";
class ANav extends Component {
  Logout = () => {
    this.props.logout();
  };
  render() {
    return (
      <nav
        class="navbar navbar-expand-md navbar-dark "
        style={{
          justifyContent: "space-between",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="assets/images/appicon.png"
            style={{ height: 25, width: 25, margin: 5, objectFit:'cover' }}
            alt="App"
          ></img>
          <a
            class="navbar-brand"
            href="#lsa"
            style={{ fontFamily: "-moz-initial" }}
          >
            Smart Auto Mechanic Finder
          </a>
        </div>
        <div style={{ marginRight: 100 }}>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link" to="/AdminDashboard">
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink class="nav-link" to="/AServiceRates">
                  Service Rates
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#sd"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Manage
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink class="dropdown-item" to="/Users">
                    Users
                  </NavLink>

                  <div class="dropdown-divider"></div>
                  <NavLink class="dropdown-item" to="/Mechanics">
                    Mechanics
                  </NavLink>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#sad"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Help
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink class="dropdown-item" to="/UHelplist">
                    Users
                  </NavLink>

                  <div class="dropdown-divider"></div>
                  <NavLink class="dropdown-item" to="/MHelplist">
                    Mechanics
                  </NavLink>
                </div>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/ATermsandPolicies">
                  Terms & Policies
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="/AdminLogin"
                  onClick={this.Logout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ANav);
