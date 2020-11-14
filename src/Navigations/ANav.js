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
            style={{ height: 25, width: 25, margin: 5 }}
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
              <li class="nav-item">
                <NavLink class="nav-link" to="/Users">
                  Users
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/Mechanics">
                  Mechanics
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/AComplaints">
              Complaints
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/ATermsandPolicies">
                  Terms & Policies
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/AdminLogin" onClick={this.Logout}>
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
