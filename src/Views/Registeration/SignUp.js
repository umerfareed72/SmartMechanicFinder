import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../Navigations/Navbar";
import { connect } from "react-redux";
import { URL } from "../../Config/Contants";
import axios from "axios";
import { toast } from "react-toastify";
toast.configure();
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      photo: "assets/images/dummy1.jpg",
      City: "Select City",
      Country: "Select Country",
      FirstName: "First Name",
      LastName: "Last Name",
      Email: "Your Email",
      Password: "",
      CPassword: "",
      address: "",
      Phone: 0,
      date: "Date Of Birth",
      nickname: "",
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  uploadimage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "rjrthtdu");
    data.append("cloud_name", "dbkmbaxmk");
    this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbkmbaxmk/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    this.setState({ photo: file.secure_url });
    this.setState({ loading: false });
    console.log(file);
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    console.log(
      this.state.FirstName,
      this.state.LastName,
      this.state.photo,
      this.state.Email,
      this.state.Country,
      this.state.City
    );
    try {
      axios
        .post(URL.Url + "userregister", {
          firstname: this.state.FirstName,
          lastname: this.state.LastName,
          email: this.state.Email,
          nickname: this.state.nickname,
          password: this.state.Password,
          phone: this.state.Phone,
          address: this.state.address,
          photo: this.state.photo,
          city: this.state.City,
          country: this.state.Country,
          date: this.state.date,
        })
        .then((response) => {
          console.log(response.data);
          toast("Successfully Register", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          this.props.history.push("Login");
        });
    } catch (error) {
      alert("Error");
    }
  };
  componentDidMount() {
    const { auth } = this.props;
    if (auth.flag === true) {
      this.setState({ FirstName: auth.data.givenName });
      this.setState({ photo: auth.data.imageUrl });
      this.setState({ LastName: auth.data.familyName });
      this.setState({ Email: auth.data.email });
    }
  }
  fNameChangeHandler = (val) => {
    this.setState({
      FirstName: val.target.value,
    });
  };

  lNameChangeHandler = (val) => {
    this.setState({
      LastName: val.target.value,
    });
  };

  emailChangeHandler = (val) => {
    this.setState({
      Email: val.target.value,
    });
  };
  nicknameChangeHandler = (val) => {
    this.setState({
      nickname: val.target.value,
    });
  };

  passwordChangeHandler = (val) => {
    this.setState({
      Password: val.target.value,
    });
  };

  confirmpasswordChangeHandler = (val) => {
    this.setState({
      CPassword: val.target.value,
    });
  };

  AddressChangeHandler = (val) => {
    this.setState({
      address: val.target.value,
    });
  };

  DateChangeHandler = (val) => {
    this.setState({
      date: val.target.value,
    });
  };

  PhoneChangeHandler = (val) => {
    this.setState({
      Phone: val.target.value,
    });
  };

  cityChangeHandler = (val) => {
    this.setState({
      City: val.target.value,
    });
  };

  countryChangeHandler = (val) => {
    this.setState({
      Country: val.target.value,
    });
  };

  render() {
    const { auth } = this.props;
    return (
      <body
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("electric.jpg")',
        }}
      >
        <Navbar></Navbar>
        <Container fluid>
          <h1
            style={{
              color: "white",
              marginTop: 10,
              marginBottom: 20,
              fontFamily: "initial",
              borderBottom: "4px solid #00FA9A",
            }}
          >
            Register Now
          </h1>
          <Row>
            <Col className="col-sm-12 ">
              <div class="row">
                <div class="col-lg-5 centerword">
                  <h1 className="heading4white">Register Now</h1>

                  <h5 className="heading4white">(Register As a User)</h5>
                </div>
                <div class="col-lg-7">
                  <div class="card" style={{ marginTop: 30 }}>
                    <div class="card-body info-card social-about">
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Sign Up</u>
                        </h3>
                      </Col>{" "}
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <form onSubmit={this.handlesubmit} method="POST">
                          <Col className="col-sm-12 Aligncenter">
                            {this.state.loading ? (
                              <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <img
                                className="Circle"
                                src={this.state.photo}
                                alt="Circle"
                                style={{ objectFit:'cover'}}
                              ></img>
                            )}
                          </Col>
                          <Col className="col-sm-12 Aligncenter">
                            <input
                              style={{
                                margin: 10,
                                marginLeft: 60,
                                fontSize: 10,
                              }}
                              type="file"
                              name="file"
                              placeholder="Upload an Image"
                              onChange={this.uploadimage}
                              disabled={auth.flag}
                            ></input>
                          </Col>

                          <Row>
                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">First Name:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={this.fNameChangeHandler}
                                  placeholder="Enter First Name"
                                  name="username"
                                  readOnly={auth.flag}
                                  defaultValue={auth.data.givenName}
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">Last Name:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={this.lNameChangeHandler}
                                  placeholder="Enter Last Name"
                                  name="username"
                                  readOnly={auth.flag}
                                  defaultValue={auth.data.familyName}
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr"> Email:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="username"
                                  readOnly={auth.flag}
                                  defaultValue={auth.data.email}
                                  onChange={this.emailChangeHandler}
                                  placeholder="Enter Email Address"
                                  required
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">Nick Name:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="username"
                                  onChange={this.nicknameChangeHandler}
                                  placeholder="Enter Nick Name"
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="pwd">Password:</label>
                                <input
                                  type="password"
                                  class="form-control"
                                  name="password"
                                  onChange={this.passwordChangeHandler}
                                  placeholder="Enter Password"
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group">
                                <label for="pwd">Confirm Password:</label>
                                <input
                                  type="password"
                                  class="form-control"
                                  name="password"
                                  onChange={this.confirmpasswordChangeHandler}
                                  placeholder="Enter Confirm Password"
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">Phone Number:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="username"
                                  onChange={this.PhoneChangeHandler}
                                  placeholder="Enter Phone Number"
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group">
                                <label for="usr">Date Of Birth:</label>
                                <input
                                  type="date"
                                  class="form-control"
                                  name="username"
                                  onChange={this.DateChangeHandler}
                                  placeholder="Enter Date Of Birth"
                                  required
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-4">
                              <div class="form-group ">
                                <label for="usr">Address:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="username"
                                  onChange={this.AddressChangeHandler}
                                  placeholder="Address"
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div className="form-group ">
                                <label
                                  htmlFor="ussr"
                                  style={{ marginRight: 10 }}
                                >
                                  City:
                                </label>
                                <select
                                  onChange={this.cityChangeHandler}
                                  name="cars"
                                  style={{ width: 200, height: 30 }}
                                  required
                                >
                                  <option value="Select City">
                                    Select City
                                  </option>
                                  <option value="Lahore">Lahore</option>
                                  <option value="Karachi">Karachi</option>
                                  <option value="Islamabad">Islamabad</option>
                                  <option value="Multan">Multan</option>
                                </select>
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div className="form-group ">
                                <label
                                  htmlFor="ussr"
                                  style={{ marginRight: 10 }}
                                >
                                  Country:
                                </label>
                                <select
                                  onChange={this.countryChangeHandler}
                                  name="country"
                                  style={{ width: 200, height: 30 }}
                                  required
                                >
                                  <option value="Select Country">
                                    Select Country
                                  </option>
                                  <option value="Pakistan">Pakistan</option>
                                </select>
                              </div>
                            </Col>
                          </Row>

                          <div class="form-group">
                            <button
                              type="submit"
                              class="btnSubmit  btn-primary "
                              value="Login"
                              style={{
                                float: "right",
                                width: 200,
                                marginTop: 10,
                              }}
                            >
                              Register Now
                            </button>
                          </div>
                        </form>
                      </Col>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(SignUp);
