import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../Navigations/Navbar";
import { URL } from "../../Config/Contants";
import axios from "axios";
import { toast } from "react-toastify";
toast.configure();
class MechanicRegister extends Component {
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
      carcompany: "",
      skilltype: "",
      vehicletype: "",
      mechanicrate: 0,
      rating: 5,
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

  nicknameChangeHandler = (val) => {
    this.setState({
      nickname: val.target.value,
    });
  };
  emailChangeHandler = (val) => {
    this.setState({
      Email: val.target.value,
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

  skillTypeChangeHandler = (val) => {
    this.setState({
      skilltype: val.target.value,
    });
  };

  vehicletypeChangeHandler = (val) => {
    this.setState({
      vehicletype: val.target.value,
    });
  };

  carcompanyChangeHandler = (val) => {
    this.setState({
      carcompany: val.target.value,
    });
  };
  mechanicrateChangeHandler = (val) => {
    this.setState({
      mechanicrate: val.target.value,
    });
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(URL.Url + "mechanicregister", {
          firstname: this.state.FirstName,
          lastname: this.state.LastName,
          nickname: this.state.nickname,
          email: this.state.Email,
          password: this.state.Password,
          phone: this.state.Phone,
          address: this.state.address,
          photo: this.state.photo,
          city: this.state.City,
          country: this.state.Country,
          date: this.state.date,
          skilltype: this.state.skilltype,
          vehicletype: this.state.vehicletype,
          carcompany: this.state.carcompany,
          mechanicrate: this.state.mechanicrate,
          rating: this.state.rating,
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

  render() {
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
              <div className="row">
                <div className="col-lg-5 centerword">
                  <h1 className="heading4white">Register Now</h1>

                  <h5 className="heading4white">(Register As a Mechanic)</h5>
                </div>
                <div className="col-lg-7">
                  <div className="card" style={{ marginTop: 30 }}>
                    <div className="card-body info-card social-about">
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
                              <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
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
                            ></input>
                          </Col>

                          <Row>
                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="firstname">First Name:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  name="username"
                                  onChange={this.fNameChangeHandler}
                                  placeholder="Enter First Name"
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="lastname">Last Name:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastname"
                                  name="username"
                                  placeholder="Enter Last Name"
                                  onChange={this.lNameChangeHandler}
                                  required
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="father">Nick Name:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="father"
                                  onChange={this.nicknameChangeHandler}
                                  placeholder="Enter Nick Name"
                                  name="username"
                                  required
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="email"> Email:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  placeholder="Enter Email Address"
                                  name="username"
                                  onChange={this.emailChangeHandler}
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="passw">Password:</label>
                                <input
                                  type="password"
                                  placeholder="Enter Password"
                                  className="form-control"
                                  id="passw"
                                  name="password"
                                  onChange={this.passwordChangeHandler}
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="cpass">Confirm Password:</label>
                                <input
                                  type="password"
                                  placeholder="Enter Confirm Password"
                                  className="form-control"
                                  id="cpass"
                                  name="password"
                                  required
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="phone">Phone Number:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="username"
                                  placeholder="Enter Phone Number"
                                  onChange={this.PhoneChangeHandler}
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="date">Date Of Birth:</label>
                                <input
                                  onChange={this.DateChangeHandler}
                                  type="date"
                                  className="form-control"
                                  name="username"
                                  placeholder="Enter Date Of Birth"
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="rate">Mechanic Rate:</label>
                                <input
                                  type="text="
                                  className="form-control"
                                  id="mr"
                                  placeholder="Enter Mechanic Rate"
                                  onChange={this.mechanicrateChangeHandler}
                                  name="username"
                                  required
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div className="form-group ">
                                <label htmlFor="add">Address:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="add"
                                  placeholder="Enter Home Address"
                                  onChange={this.AddressChangeHandler}
                                  name="username"
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

                            <Col className="col-sm-4">
                              <div className="form-group ">
                                <label
                                  htmlFor="type"
                                  style={{ marginRight: 10 }}
                                >
                                  Vehicle Type:
                                </label>
                                <select
                                  name="cars"
                                  style={{ width: 200, height: 30 }}
                                  onChange={this.vehicletypeChangeHandler}
                                  required
                                >
                                  <option value="Select Vehicle Type">
                                    Select Vehicle Type
                                  </option>
                                  <option value="Cars">Cars</option>
                                  <option value="Truck">Truck</option>
                                  <option value="Bus">Bus</option>
                                  <option value="Jeep">Jeep</option>
                                </select>
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div className="form-group ">
                                <label
                                  htmlFor="ussr"
                                  style={{ marginRight: 10 }}
                                >
                                  Skill Type:
                                </label>
                                <select
                                  onChange={this.skillTypeChangeHandler}
                                  name="cars"
                                  style={{ width: 200, height: 30 }}
                                  required
                                >
                                  <option value="Select Skill Type">
                                    Select Skill Type
                                  </option>
                                  <option value="Engine">Engine</option>
                                  <option value="Body">Body</option>
                                  <option value="Electric">Electric</option>
                                  <option value="Painter">Painter</option>
                                </select>
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div className="form-group ">
                                <label
                                  htmlFor="user"
                                  style={{ marginRight: 10 }}
                                >
                                  Car Company:
                                </label>
                                <select
                                  onChange={this.carcompanyChangeHandler}
                                  name="cars"
                                  style={{ width: 200, height: 30 }}
                                  required
                                >
                                  <option value="Select Car Company">
                                    Select Car Company
                                  </option>
                                  <option value="Honda">Honda</option>
                                  <option value="Suzuki">Suzuki</option>
                                  <option value="Toyota">Toyota</option>
                                  <option value="Audi">Audi</option>
                                  <option value="KIA">KIA</option>
                                  <option value="Mercedes">Merecedes</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btnSubmit  btn-primary "
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

export default MechanicRegister;
