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
 <div style={{marginRight:30}}>
  <ul class="navbar-nav">
    <li class="nav-item">
      <NavLink class="nav-link" to='/Login'>Login</NavLink>
    </li>
    <li class="nav-item">
      <NavLink class="nav-link" to='/AdminLogin'>Login As Admin</NavLink>
    </li>

  </ul>
  </div>
</nav>

    );
  }
}

export default Navbar;
