import React, { Component } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";

import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/AFooter";
import axios from "axios";
import { URL } from "../../Config/Contants";
import { toast } from "react-toastify";
toast.configure();
function searchingFor(term) {
  return function (x) {
    return x.firstname.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
class TopMechanics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      search: "",
      show: false,
      userdata: [],
      message: "",
    };
  }
  getUser = () => {
    axios.get(URL.Url + "topmechanics").then((res) => {
      this.setState({ users: res.data, loading: true });
    });
  };

  deleteUser = (id) => {
    axios
      .delete(URL.Url + "deletemechanic/" + this.state.users[id]._id)
      .then((del) => {
        toast("Mechanic Deleted", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        window.location.reload(false);
      });
  };
  userChangeHandler = (val) => {
    this.setState({
      search: val.target.value,
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  MessageChangeHandler = (val) => {
    this.setState({
      message: val.target.value,
    });
  };

  showdetail = (id) => {
    axios
      .get(URL.Url + "topmechanic/" + this.state.users[id]._id)
      .then((res) => {
        this.setState({ show: true, userdata: res.data });
      });
  };

  componentDidMount() {
    this.getUser();
  }
  render() {
    const { users, loading, search, userdata } = this.state;

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
                  <h4 className="heading4white orange">Mechanics</h4>
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
                    Top Mechanic Profiles
                    </p>
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col className="col-sm-12" style={{ padding: 50, color: "black" }}>
              <div className="card">
                <div className="card-body">
                  <Col className="col-sm-12">
                    <Row>
                      <Col
                        className="col-sm-8"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Top Mechanics Profiles</u>
                        </h3>
                      </Col>
                      <Col
                        className="col-sm-4"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <form>
                          <div class="row">
                            <div class="input-group mb-3 col-sm-12">
                              <input
                                value={search}
                                onChange={this.userChangeHandler}
                                type="text"
                                class="form-control border-right-0"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                              <div class="input-group-prepend bg-white">
                                <span
                                  class="input-group-text border-left-0 rounded-right bg-white"
                                  id="basic-addon1"
                                >
                                  <i className="fa">&#xf002;</i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </Col>
                    </Row>

                    {loading ? (
                      <Col>
                        <Row>
                          {users
                            .filter(searchingFor(search))
                            .map((data, index) => {
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
                                  </Card.Body>
                                  <Button
                                    onClick={() => {
                                      this.showdetail(index);
                                    }}
                                    className="btn btn-sm"
                                    variant="btn btn-info"
                                  >
                                    View Profile
                                  </Button>
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
                  </Col>
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

export default TopMechanics;
