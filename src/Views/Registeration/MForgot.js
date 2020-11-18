import React, { Component } from "react";
import Navbar from "../../Navigations/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../Config/Contants";
import {toast} from "react-toastify"
toast.configure()
class MForgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // params: params,
      nickname: "",
      npassword: "",
      email: "",
      cpassword: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault()
    axios
      .put(URL.Url + "mforgetpass/", {
        nickname: this.state.nickname,
        npassword: this.state.npassword,
        email: this.state.email,
      })
      .then(async (res) => {
        console.log(res.data);
        toast("Successfully Password Changed", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
     
      })
      .catch((error) => {
        console.log(error);
        toast("Error Password Not Changed", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
     
      });
  };

  nicknameChangeHandler = (val) => {
    this.setState({
      nickname: val.target.value,
    });
  };
  cpasswordChangeHandler = (val) => {
    this.setState({
      cpassword: val.target.value,
    });
  };

  npasswordChangeHandler = (val) => {
    this.setState({
      npassword: val.target.value,
    });
  };

  emailChangeHandler = (val) => {
    this.setState({
      email: val.target.value,
    });
  };

  render() {
    return (
      <body>
        <Navbar></Navbar>
        <div class="container login-container" style={{ marginTop: 100 }}>
          <div class="row">
            <div
              class="col-md-6 login-form-1 "
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("electric.jpg")',
                textAlign: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div class="col-lg-12">
                <h1 className="heading4white">Smart Auto Mechanic Finder</h1>
                <h5 className="heading4white">
                  (Solution of Your Problem is our priority)
                </h5>
                <p className="heading4white">Create Your New Password</p>
              </div>
            </div>
            <div class="col-md-6 login-form-1">
              <h3>Forgot Password</h3>
              <form onSubmit={this.onSubmit} method="PUT">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    onChange={this.emailChangeHandler}
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="nick"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Nick Name"
                    onChange={this.nicknameChangeHandler}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="pass"
                    onChange={this.npasswordChangeHandler}
                    aria-describedby="emailHelp"
                    placeholder="New Password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="Father"
                    aria-describedby="emailHelp"
                    placeholder="Confirm Password"
                    onChange={this.cpasswordChangeHandler}
                  />
                </div>

                <div class="form-group">
                  <button type="submit" class="btnSubmit" value="Login">
                    Submit
                  </button>
                </div>
                <div class="form-group">
                  <Link to="/Login" class="ForgetPwd" value="Login">
                    Login Now?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default MForgot;
