import React, { Component } from "react";
import {NavLink} from "react-router-dom"
class Navbar extends Component {
  render() {
    return (

<nav class="navbar navbar-expand-sm bg-light navbar-light" style={{justifyContent:'space-between'}}>
  <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
  <img src='assets/images/appicon.png'  style={{height:25,width:25,margin:5}} alt="App Icon"></img>
  <a class="navbar-brand" href="#1" style={{fontFamily:"-moz-initial"}}>Smart Auto Mechanic Finder</a> 
  </div>
 <div style={{marginRight:100}}>
 <ul class="navbar-nav">
  <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#das"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink class="dropdown-item" to="/Login">
                    User / Mechanic
                  </NavLink>
                   <div class="dropdown-divider"></div>
                  <NavLink class="dropdown-item" to="/AdminLogin">
                    Admin
                  </NavLink>
                </div>
              </li>
            

  </ul>
 
  </div>
</nav>

    );
  }
}

export default Navbar;
