import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import MNav from "../../Navigations/MNav";
import MFooter from "../../Components/MFooter";
import { connect } from "react-redux";
import axios from "axios";
import { URL } from "../../Config/Contants";
import { toast } from "react-toastify";
toast.configure();
class MEditProfile extends Component {
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
      carcompany: this.props.auth.user.carcompany,
      skilltype: this.props.auth.user.skilltype,
      vehicletype: this.props.auth.user.vehicletype,
      mechanicrate: this.props.auth.user.mechanicrate,
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit = (e) => {
    e.preventDefault();
    axios
      .put(URL.Url + "updatemechanic/" + this.props.auth.user.mechanicid, {
        firstname: this.state.FirstName,
        lastname: this.state.LastName,
        photo: this.state.photo,
        phone: this.state.Phone,
        address: this.state.address,
        city: this.state.City,
        country: this.state.Country,
        email: this.state.Email,
        vehicletype: this.state.vehicletype,
        skilltype: this.state.skilltype,
        carcompany: this.state.carcompany,
        mechanicrate: this.state.mechanicrate,
      })
      .then((response) => {
        console.log(response.data);
        toast("Successfully Edited", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
  };

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
  mechanicrateChangeHandler = (val) => {
    this.setState({
      mechanicrate: val.target.value,
    });
  };
  carcompanyChangeHandler = (val) => {
    this.setState({
      carcompany: val.target.value,
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
        <MNav></MNav>
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
            <Col className="col-sm-12 ">
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
                                style={{ objectFit:'cover'}}
                                alt="Circle"
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
                                  name="username"
                                  defaultValue={auth.user.firstname}
                                  onChange={this.fNameChangeHandler}
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
                                  defaultValue={auth.user.date}
                                  onChange={this.DateChangeHandler}
                                  name="username"
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-4">
                              <div class="form-group ">
                                <label for="usr">City:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  defaultValue={auth.user.city}
                                  onChange={this.cityChangeHandler}
                                  name="username"
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div class="form-group">
                                <label for="usr">Country:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="usr"
                                  defaultValue={auth.user.country}
                                  onChange={this.countryChangeHandler}
                                  name="username"
                                />
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div class="form-group">
                                <label for="usr">Mechanic Rate $:</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="rate"
                                  defaultValue={auth.user.mechanicrate}
                                  onChange={this.mechanicrateChangeHandler}
                                  name="rate"
                                />
                              </div>
                            </Col>

                            <Col className="col-sm-4">
                              <div class="form-group ">
                                <label for="usr" style={{ marginRight: 10 }}>
                                  Vehicle Type:
                                </label>
                                <select
                                  name="cars"
                                  id="cars"
                                  defaultValue={auth.user.vehicletype}
                                  onChange={this.vehicletypeChangeHandler}
                                  style={{ width: 200, height: 30 }}
                                >
                                  <option value="volvo">Cars</option>
                                  <option value="saab">Truck</option>
                                  <option value="opel">Bus</option>
                                  <option value="audi">Jeep</option>
                                </select>
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div class="form-group ">
                                <label for="usr" style={{ marginRight: 10 }}>
                                  Skill Type:
                                </label>
                                <select
                                  name="cars"
                                  id="cars"
                                  onChange={this.skillTypeChangeHandler}
                                  defaultValue={auth.user.skilltype}
                                  style={{ width: 200, height: 30 }}
                                >
                                  <option value="volvo">Engine</option>
                                  <option value="saab">Body</option>
                                  <option value="opel">Electric</option>
                                  <option value="audi">Painter</option>
                                </select>
                              </div>
                            </Col>
                            <Col className="col-sm-4">
                              <div class="form-group ">
                                <label for="usr" style={{ marginRight: 10 }}>
                                  Car Company:
                                </label>
                                <select
                                  name="cars"
                                  id="cars"
                                  defaultValue={auth.user.carcompany}
                                  onChange={this.carcompanyChangeHandler}
                                  style={{ width: 200, height: 30 }}
                                >
                                  <option value="HONDA">Honda</option>
                                  <option value="SUZUKI">Suzuki</option>
                                  <option value="TOTOTA">Toyota</option>
                                  <option value="AUDI">Audi</option>
                                  <option value="KIA">KIA</option>
                                  <option value="Mercedes">Merecedes</option>
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
        <MFooter></MFooter>
      </body>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(MEditProfile);
