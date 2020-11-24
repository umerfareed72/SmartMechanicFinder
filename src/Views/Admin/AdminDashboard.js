import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/AFooter";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL } from "../../Config/Contants";
import StarRatings from "react-star-ratings";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
// const COLORS = [
//   "GoldenRod",
//   "rgba(255,255,255,0.5)",
//   "black",
//   "Grey",
//   "#000000",
// ];

// const mechanicraingdata = [
//   { name: "5 Star", value: 400 },
//   { name: "4 Star", value: 300 },
//   { name: "3 Star", value: 200 },
//   { name: "2 Star", value: 20 },
//   { name: "1 Star", value: 50 },
// ];

class AdminDashboard extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  constructor(props) {
    super(props);
    this.state = {
      painter: "",
      engine: "",
      body: "",
      electric: "",
      electricissue: "",
      engineissue: "",
      bodyissue: "",
      registereduser: "",
      paintissue: "",
      bookedmcount: "",
      mechaniccount: "",
      topmechanics: [],
      userdata: [],
      loading: false,
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  showdetail = (id) => {
    axios
      .get(URL.Url + "topmechanic/" + this.state.topmechanics[id]._id)
      .then((res) => {
        this.setState({ show: true, userdata: res.data });
      });
  };
  getUser = () => {
    axios.get(URL.Url + "topmechanics").then((res) => {
      console.log(res.data);
      this.setState({ topmechanics: res.data, loading: true });
    });
  };

  async componentDidMount() {
    this.getmechanicdata();
    this.getissuedata();
    this.getUser();
  }

  getmechanicdata = () => {
    console.log("IN ADMINDASH PAINTERCOUNT");
    axios
      .get(URL.Url + "paintercount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ painter: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "enginecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ engine: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "bodycount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ body: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "electriccount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ electric: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(URL.Url + "usercount")
      .then((response) => {
        if (response) {
          console.log("regsteru", response.data);
          this.setState({ registereduser: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(URL.Url + "mechaniccount")
      .then((response) => {
        if (response) {
          this.setState({ mechaniccount: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getissuedata = () => {
    console.log("in admin issue data");
    axios
      .get(URL.Url + "electricissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ electricissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "engineissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ engineissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "bodyissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ bodyissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(URL.Url + "painterissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ paintissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(URL.Url + "bookedmcount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ bookedmcount: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { topmechanics, loading, userdata } = this.state;
    const data = [
      {
        name: "Engine",
        uv: this.state.engine,
      },
      {
        name: "Electrician",
        uv: this.state.electric,
      },
      {
        name: "Painter",
        uv: this.state.painter,
      },
      {
        name: "Body",
        uv: this.state.body,
      },
    ];
    const data1 = [
      {
        name: "Engine",
        uv: this.state.engineissue,
      },
      {
        name: "Electric",
        uv: this.state.electricissue,
      },
      {
        name: "Painter",
        uv: this.state.paintissue,
      },
      {
        name: "Body",
        uv: this.state.bodyissue,
      },
    ];

    return (
      <body
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("electric.jpg")',
          color: "white",
        }}
      >
        <ANav></ANav>
        <Container fluid>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>View Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {userdata.firstname} {userdata.lastname}
              <hr></hr>
              {userdata.email}
              <hr></hr>
              {userdata.phone}
              <hr></hr>
              {userdata.address} {userdata.city} {userdata.country}
              <hr></hr>
              <div class="form-group" style={{ padding: 10, float: "right" }}>
                <button
                  onClick={this.handleClose}
                  type="submit"
                  class="btnSubmit  btn-danger "
                  value="Login"
                  style={{ width: 100 }}
                >
                  Close
                </button>
              </div>
            </Modal.Body>
          </Modal>

          <Row style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <Col
              className="col-sm-12 Homeimg "
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">Admin Dashboard</h4>
                </Col>
                <Col className="col-sm-12">
                  <Col className="Aligncenter">
                    <h2 className="heading2 white">
                      Smart Auto Mechanic Finder
                    </h2>
                  </Col>
                </Col>
                <Col className="col-sm-12">
                  <Col className="Aligncenter">
                    <p className="heading4white smokewhite">Admin Panel</p>
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col className="col-sm-6 Aligncenter">
              <AreaChart
                style={{ marginTop: 100, marginBottom: 50 }}
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </Col>

            <Col className="col-sm-6">
              <Col
                className="col-sm-12  Aligncenter"
                style={{ marginTop: 30, marginBottom: 50 }}
              >
                <h5 className="heading2">
                  <u className="ub" style={{ fontSize: 30 }}>
                    Statistics
                  </u>
                </h5>
              </Col>
              Mechanic Rating is totally depennd on user response.Every User
              Provide response after taking services from admin.Excellent
              Mechanics have 5 Star Rating ,Good Mechanics have 4 Star
              Rating,Normal Mechanics Have 3 Star Rating,Bad Mechanics Have 2
              and very bad Mechanics have 1 Star Rating.But In Pie Chart only
              overall analysis defined that tell you application have how much
              type of mechanics that tell behaviour and analysis of all
              mechanics present in application.
            </Col>

            <Col className="col-sm-6">
              <Col
                className="col-sm-12  Aligncenter"
                style={{ marginTop: 30, marginBottom: 50 }}
              >
                <h5 className="heading2">
                  <u className="ub" style={{ fontSize: 30 }}>
                    Statistics
                  </u>
                </h5>
              </Col>
              Mechanic Rating is totally depennd on user response.Every User
              Provide response after taking services from admin.Excellent
              Mechanics have 5 Star Rating ,Good Mechanics have 4 Star
              Rating,Normal Mechanics Have 3 Star Rating,Bad Mechanics Have 2
              and very bad Mechanics have 1 Star Rating.But In Pie Chart only
              overall analysis defined that tell you application have how much
              type of mechanics that tell behaviour and analysis of all
              mechanics present in application.
            </Col>

            <Col className="col-sm-6 Aligncenter">
              <AreaChart
                style={{ marginTop: 100, marginBottom: 50 }}
                width={500}
                height={300}
                data={data1}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </Col>

            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <h3 className="heading2">
                <u className="ub">Top Rated Mechanics</u>
              </h3>
            </Col>
            {loading ? (
              <Col>
                <Row>
                  {topmechanics.map((data, index) => {
                    if (index < 5) {
                      return (
                        <Card
                          className="card"
                          style={{
                            height: 350,
                            width: 200,
                            margin: 10,
                            backgroundColor: "rgba(255,255,255,0.1)",
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={data.photo}
                            style={{
                              height: 220,
                              width: 200,
                              objectFit: "cover",
                            }}
                            alt="Cosupervisor"
                          />
                          <Card.Body>
                            <Card.Title>{data.firstname}</Card.Title>
                            <StarRatings
                              rating={data.rating}
                              starRatedColor="gold"
                              numberOfStars={5}
                              name="rating"
                              starDimension="15px"
                              starSpacing="2px"
                            ></StarRatings>
                            <Button
                              variant="btn btn-light"
                              className="btn btn-sm"
                              style={{ marginLeft: -3, marginTop: 5 }}
                              onClick={() => this.showdetail(index)}
                            >
                              View Profile
                            </Button>
                          </Card.Body>
                        </Card>
                      );
                    }
                  })}
                  <Card
                    className="card"
                    style={{
                      height: 350,
                      width: 200,
                      margin: 10,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <Card.Header style={{ backgroundColor: "lightgrey" }}>
                      <Card.Text style={{ textAlign: "center" }}>
                        {" "}
                        Want To See Top Mechanics
                      </Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        What we are?
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: 14,
                          color: "whitesmoke",
                        }}
                      >
                        Our Top Mechanics provide great services to our
                        customers.Top Mechanics profile are analyzed after a
                        complete analysis of user feedback.For viewing more top
                        rated and good mechanics.{" "}
                        <Link to="TopMechanics">Go To View All</Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Col>
            ) : (
              <div className="Aligncenter" style={{ padding: 50 }}>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 50, marginBottom: 50 }}
            >
              <h5 className="heading2">
                <u className="ub" style={{ fontSize: 30 }}>
                  Achievements
                </u>
              </h5>
            </Col>

            <Col className="col-sm-3 ">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Satisfied Mechanics
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.mechaniccount}+
                  </p>
                </div>
              </div>
            </Col>

            <Col className="col-sm-3">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Satisfied Users
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.registereduser}+
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-sm-3">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Online Users
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.bookedmcount}+
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-sm-3">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Online Mechanics
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.bookedmcount}+
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-sm-12">
              <hr style={{ backgroundColor: "white" }}></hr>
            </Col>
          </Row>
        </Container>

        <AFooter></AFooter>
      </body>
    );
  }
}

export default AdminDashboard;
