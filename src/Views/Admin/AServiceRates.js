import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/AFooter";
// import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../Config/Contants";
import { connect } from "react-redux";
import { SetRate } from "../../actions/index";
import { toast } from "react-toastify";
toast.configure();
class AServiceRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      servicename: "",
      serviceamount: "",
    };
  }
  getUser = () => {
    axios.get(URL.Url + "getServices").then((res) => {
      this.setState({ users: res.data, loading: true });
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL.Url + "addServices/", {
        servicename: this.state.servicename,
        serviceamount: this.state.serviceamount,
      })
      .then((response) => {
        toast("Service Added", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        window.location.reload(false);
      });
  };

  deleteUser = (id) => {
    axios
      .delete(URL.Url + "deleteServices/" + this.state.users[id]._id)
      .then((del) => {
        toast("Service Deleted", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        window.location.reload(false);
      });
  };

  nameChangeHandler = (val) => {
    this.setState({
      servicename: val.target.value,
    });
  };

  amountChangeHandler = (val) => {
    this.setState({
      serviceamount: val.target.value,
    });
  };

  SelectUser = (id) => {
    axios
      .get(URL.Url + "getService/" + this.state.users[id]._id)
      .then((res) => {
        const data = {
          _id: res.data._id,
          servicename: res.data.servicename,
          serviceamount: res.data.serviceamount,
        };
        this.props.SetRate(data);
        this.props.history.push("UpdateRate");
      });
  };

  componentDidMount() {
    this.getUser();
  }
  render() {
    const { users, loading } = this.state;
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
          <Row style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <Col
              className="col-sm-12 Homeimg "
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">Service Rate</h4>
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
                    <p className="heading4white smokewhite">
                      Manage Mechanic Service Rates
                    </p>
                  </Col>
                </Col>
              </Col>
            </Col>

            <Col className="col-sm-12" style={{ color: "black" }}>
              <div class="row ">
                <div class="col-lg-12 ">
                  <div class="card" style={{ margin: 50, padding: 20 }}>
                    <div class="card-body info-card social-about">
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Service Rates</u>
                        </h3>
                      </Col>{" "}
                      {loading ? (
                        <Col>
                          <Row>
                            {users.map((data, index) => {
                              return (
                                <Card style={{ width: "10rem", margin: 20 }}>
                                  <Card.Body>
                                    <Card.Title> {data.servicename}</Card.Title>
                                    <Card.Text style={{ color: "goldenrod" }}>
                                      {data.serviceamount}
                                    </Card.Text>
                                    <button
                                      class="btn btn-danger btn-sm"
                                      onClick={() => this.deleteUser(index)}
                                    >
                                      Delete
                                    </button>
                                    <button
                                      onClick={() => this.SelectUser(index)}
                                      class="btn btn-primary btn-sm"
                                      style={{ marginLeft: 10, width: 50 }}
                                    >
                                      Edit
                                    </button>
                                  </Card.Body>
                                </Card>
                              );
                            })}
                          </Row>
                        </Col>
                      ) : (
                        <div className="Aligncenter" style={{ padding: 50 }}>
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      )}
                      <hr></hr>
                      <Row>
                        <Col className="col-sm-6">
                          <Col
                            className="col-sm-12 Aligncenter"
                            style={{ marginTop: 30, marginBottom: 30 }}
                          >
                            <h3 className="heading2">
                              <u className="ub">Add Terms & Policies</u>
                            </h3>
                          </Col>{" "}
                          <form onSubmit={this.handlesubmit} method="POST">
                            <div class="form-group ">
                              <label for="usr">Service Name:</label>
                              <input
                                type="text"
                                class="form-control"
                                id="usr"
                                onChange={this.nameChangeHandler}
                                name="username"
                                placeholder="Enter Title "
                              />
                            </div>

                            <div class="form-group ">
                              <label for="usr">Service Rate:</label>

                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={this.amountChangeHandler}
                                placeholder="Edit Service Amount"
                              />
                            </div>
                            <div class="form-group">
                              <button
                                type="submit"
                                class="btnSubmit  btn-primary "
                                value="Login"
                                style={{
                                  width: 100,
                                  height: 40,
                                  marginTop: 20,
                                }}
                              >
                                Add
                              </button>
                            </div>
                          </form>
                        </Col>
                        <Col className="col-sm-6 centerword">
                          <img
                            src="assets/images/appicon.png"
                            style={{ height: 300, width: 300, float: "right" }}
                            alt="app"
                          ></img>
                        </Col>
                      </Row>
                    </div>
                  </div>
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

export default connect(null, { SetRate })(AServiceRates);
