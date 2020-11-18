import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import {connect} from "react-redux"
import Navs from "../../Navigations/Navs";
class Setting extends Component {
  state = {};
  render() {
    const {auth} =this.props
    return (
      <body style={{ backgroundColor: "whitesmoke" }}>
        <Navs></Navs>
        <div class="container">
          <div
            class="img"
            style={{
              height: "350px",
              backgroundSize: "cover",
              backgroundImage:
                "linear-gradient(150deg, rgba(63, 174, 255, .3)15%,rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%),url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg)",
            }}
          ></div>
          <div class="card social-prof">
            <div class="card-body">
              <div class="wrapper">
              {this.props.auth.user.photo == null ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <img
                    // src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    src={auth.user.photo}
                    alt=""
                    class="user-profile"
                    style={{ objectFit:'cover'}}
                  />
                )}

             
                <h3>{auth.user.firstname}</h3>
                
              </div>
              <div class="row ">
                <div class="col-lg-12">
                  <ul class=" nav nav-tabs justify-content-center s-nav">
                    <li>
                      <Link to="/Setting" class="active">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/EditProfile">Edit Profile</Link>
                    </li>

                    <li>
                      <Link to="/TermsandPolicy">Terms & Policy</Link>
                    </li>
                    <li>
                      <Link to="/Help">Help</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body info-card social-about">
                  <h2 class="text-blue">About</h2>
                  <h4>
                    <strong>About Me</strong>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <h4 class="mb-3">
                    <strong>Personal Info</strong>
                  </h4>
                  <div class="row">
                    <div class="col-6">
                      <div class="social-info">
                        <i class="fa mr-2">&#xf2bd;</i>
                        <span> {auth.user.firstname} {auth.user.lastname}</span>
                      </div>
                    </div>
                    
                    <div class="col-6">
                      <div class="social-info">
                        <i class="fa mr-2">&#xf041;</i>
                        <span> 
                        {auth.user.address} {auth.user.city}{" "}
                          {auth.user.country}{" "}
                        </span>
                      </div>
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="social-info">
                        <i class="fa mr-2">&#xf0e0;</i>
                        <span>{auth.user.email}</span>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="social-info">
                        <i class="fa mr-2">&#xf098;</i>
                        <span>{auth.user.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="social-info">
                        <i class="fa mr-2"> &#xf274;</i>
                        <span>{auth.user.date}</span>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </body>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Setting) ;
