import React, { Component } from "react";
import Navbar from "../../Navigations/Navbar";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { adminlogin } from "../../actions/index";
import { toast } from "react-toastify";
toast.configure();
class AdminLogin extends Component {
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
      .adminlogin(this.state)
      .then((res) => {
        this.props.history.push("AdminDashboard");
        toast("Successfully Login", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      })
      .catch((err) => {
        toast("Invalid  Credentials", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
  };
  render() {
    return (
      <body>
        <Navbar></Navbar>
        <div class="container login-container" style={{ marginTop: 100 }}>
          <div class="row">
            <div
              class="col-md-6 login-form-1"
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
                  (Admin have access to manage Userd & Mechanics)
                </h5>
                <p className="heading4white">Login To Get Access</p>
              </div>
            </div>
            <div class="col-md-6 login-form-1">
              <h3>Login for (Admin)</h3>
              <form onSubmit={this.handlesubmit} method="POST">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="umer@gmail.com"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    onChange={this.emailChangeHandler}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="Father"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                    onChange={this.passwordChangeHandler}
                    required
                  />
                </div>

                <div class="form-group">
                  {/* <Link to="/AdminDashboard"> */}
                  <button type="submit" class="btnSubmit" value="Login">
                    Login
                  </button>
                  {/* </Link> */}
                </div>
                {/* <div class="form-group">
                  <Link to="/AForgot" class="ForgetPwd" value="Login">
                    Forgot Password?
                  </Link>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default connect(null, { adminlogin })(AdminLogin);
