import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navs from "../../Navigations/Navs";
import Footer from "../../Components/Footer";
import { URL } from "../../Config/Contants";
import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
toast.configure();
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      photo: this.props.auth.user.photo,
      City: this.props.auth.user.city,
      Country: this.props.auth.user.country,
      FirstName: this.props.auth.user.firstname,
      LastName: this.props.auth.user.lastname,
      Email: this.props.auth.user.email,
      address: this.props.auth.user.address,
      Phone: this.props.auth.user.phone,
      date: this.props.auth.user.date,
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

  handlesubmit = (e) => {
    e.preventDefault();
    axios
      .put(URL.Url + "updateuser/" + this.props.auth.user.userid, {
        firstname: this.state.FirstName,
        lastname: this.state.LastName,
        photo: this.state.photo,
        phone: this.state.Phone,
        address: this.state.address,
        city: this.state.City,
        country: this.state.Country,
        email: this.state.Email,
      })
      .then((response) => {
        toast("Successfully Edited", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
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

  emailChangeHandler = (val) => {
    this.setState({
      Email: val.target.value,
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
        <Navs></Navs>
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
            Edit Profile
          </h1>
          <Row>
            <Col className="col-sm-12">
              <div class="row">
                <div class="col-lg-5 centerword">
                  <h1 className="heading4white">Edit Profile</h1>

                  <h5 className="heading4white">Manage Your Profile</h5>
                </div>
                <div class="col-lg-7">
                  <div class="card" style={{ marginTop: 30 }}>
                    <div class="card-body info-card social-about">
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Edit Profile</u>
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
                            ></input>
                          </Col>

                          <Row>
                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">First Name:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  defaultValue={auth.user.firstname}
                                  onChange={this.fNameChangeHandler}
                                  name="username"
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">Last Name:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  defaultValue={auth.user.lastname}
                                  name="username"
                                  onChange={this.lNameChangeHandler}
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr"> Email:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  defaultValue={auth.user.email}
                                  name="username"
                                  onChange={this.emailChangeHandler}
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">Address:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  onChange={this.AddressChangeHandler}
                                  defaultValue={auth.user.address}
                                  name="username"
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">Phone Number:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  defaultValue={auth.user.phone}
                                  onChange={this.PhoneChangeHandler}
                                  name="username"
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group">
                                <label for="usr">Date Of Birth:</label>
                                <input
                                  type="date"
                                  class="form-control"
                                  id="usr"
                                  name="username"
                                  defaultValue={auth.user.date}
                                  onChange={this.DateChangeHandler}
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-6">
                              <div class="form-group ">
                                <label for="usr">City:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  name="username"
                                  defaultValue={auth.user.city}
                                  onChange={this.cityChangeHandler}
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-6">
                              <div class="form-group">
                                <label for="usr">Country:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  name="username"
                                  defaultValue={auth.user.country}
                                  onChange={this.countryChangeHandler}
                                />
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
                              Update
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

export default connect(mapStateToProps)(EditProfile);
