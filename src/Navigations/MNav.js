import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/index";


class MNav extends Component {

  Logout = () => {
    this.props.logout();
  };

  render() {
    
    return (
      <nav
        class="navbar navbar-expand-md bg-light navbar-light"
        style={{ justifyContent: "space-between" }}
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
                <NavLink class="nav-link" to="/MechanicDashboard">
                  Home
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink class="nav-link" to="/MServiceRates">
                  Service Rates
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/MContactUs">
                  Contact Us
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/MAbout">
                  About
                </NavLink>
              </li>

              <li class="nav-item">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#sasa"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.props.auth.user.photo == null ? (
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <img
                        src={this.props.auth.user.photo}
                        width="30"
                        height="30"
                        class="rounded-circle"
                        alt="circle"
                      ></img>
                    )}
                  </a>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink class="dropdown-item heading3" to="/MSetting">
                      Hi {this.props.auth.user.firstname}
                    </NavLink>

                    <NavLink class="dropdown-item" to="/MSetting">
                      Setting
                    </NavLink>
                    <NavLink
                      class="dropdown-item"
                      to="/Login"
                      onClick={this.Logout}
                    >
                      Sign Out
                    </NavLink>
                  </div>
                </li>
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
export default connect(mapStateToProps, mapDispatchToProps)(MNav);
