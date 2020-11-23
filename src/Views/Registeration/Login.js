import React, { Component } from "react";
import Navbar from "../../Navigations/Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { connect } from "react-redux";
import { login, userlogin, googlelogin } from "../../actions/index";
toast.configure();
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      password: "",
      uemail: "",
      upassword: "",
    };
    this.handlesubmit = this.handlesubmit.bind(this);
    this.Userhandlesubmit = this.Userhandlesubmit.bind(this);
  }

  emailChangeHandler = (val) => {
    this.setState({
      email: val.target.value,
    });
  };

  passwordChangeHandler = (val) => {
    this.setState({
      password: val.target.value,
    });
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    this.props
      .login(this.state)
      .then((res) => {
        this.props.history.push("MechanicDashboard");
      })
      .catch((er) => {
        toast("Invalid  Credentials", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
  };

  uemailChangeHandler = (val) => {
    this.setState({
      uemail: val.target.value,
    });
  };

  upasswordChangeHandler = (val) => {
    this.setState({
      upassword: val.target.value,
    });
  };

  Userhandlesubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: this.state.uemail,
      password: this.state.upassword,
    };
    this.props
      .userlogin(data)
      .then((res) => {
        this.props.history.push("Dashboard");
        toast("Successfully Login", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      })
      .catch((er) => {
        toast("Invalid  Credentials", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
  };

  responseFacebook = (response) => {
    this.props.history.push("SignUp");
  };
  responseGoogle = (response) => {
    const data = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      familyName: response.profileObj.familyName,
      givenName: response.profileObj.givenName,
      imageUrl: response.profileObj.imageUrl,
    };
    this.props.googlelogin(data);
    // console.log(response);
    this.props.history.push("SignUp");
  };

  render() {
    return (
      <body>
        <Navbar></Navbar>
        <div class="container login-container">
          <div class="row">
            <div class="col-md-6 login-form-1">
              <h3>Login for (Mechanics)</h3>
              <form onSubmit={this.handlesubmit} method="POST">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.emailChangeHandler}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                    onChange={this.passwordChangeHandler}
                    required
                  />
                </div>
                <div class="form-group">
                  {/* <Link to='MechanicDashboard'> */}
                  <button type="submit" class="btnSubmit" value="Login">
                    Login
                  </button>
                  {/* </Link> */}
                </div>
                <div class="form-group">
                  <Link to="/MForgot" class="ForgetPwd">
                    Forget Password?
                  </Link>
                </div>
                <div class="form-group mt-5" style={{ textAlign: "center" }}>
                  <h6 href="Regiseter" value="Login">
                    Have You An Account?
                  </h6>
                  <Link to="/MechanicRegister">
                    <p>Register Now</p>
                  </Link>
                </div>
              </form>
            </div>
            <div class="col-md-6 login-form-2">
              <h3>Login for (Users)</h3>
              <form onSubmit={this.Userhandlesubmit} method="POST">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.uemailChangeHandler}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                    onChange={this.upasswordChangeHandler}
                    required
                  />
                </div>
                <div class="form-group">
                  {/* <Link to='/Dashboard'> */}
                  <button type="submit" class="btnSubmit" value="Login">
                    Login
                  </button>
                  {/* </Link> */}
                </div>
                <div class="form-group">
                  <Link to="/Forgot" class="ForgetPwd" value="Login">
                    Forget Password?
                  </Link>
                </div>
                <div class="form-group mt-2" style={{ textAlign: "center" }}>
                  <h6 style={{ color: "lightgray" }} value="Login">
                    Register With
                  </h6>
                  <Link>
                    <GoogleLogin
                      clientId="302956113171-1rl3tp45gtebsd42vv89quicm6jll35m.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          style={{ backgroundColor: "#0062cc", border: "none" }}
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <i
                            class="fa mr-3"
                            style={{ color: "white", fontSize: 20 }}
                          >
                            {" "}
                            &#xf1a0;
                          </i>
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                    <FacebookLogin
                      appId="1445795758949492"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      render={(renderProps) => (
                        <button
                          style={{ backgroundColor: "#0062cc", border: "none" }}
                          onClick={renderProps.onClick}
                        >
                          {" "}
                          <i
                            class="fa fa-facebook-f"
                            style={{ fontSize: 20, color: "white" }}
                          ></i>
                        </button>
                      )}
                    />
                  </Link>
                </div>

                <div class="form-group mt-2" style={{ textAlign: "center" }}>
                  <h6
                    style={{ color: "lightgray" }}
                    href="Account"
                    value="Login"
                  >
                    Have You An Account?
                  </h6>
                  <Link to="/SignUp">
                    <p style={{ color: "white" }}>Register Now</p>
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

export default connect(null, { login, userlogin, googlelogin })(Login);
