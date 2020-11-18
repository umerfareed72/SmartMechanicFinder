import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
class Mechanics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      search: "",
    };
  }
  getUser = () => {
    axios.get(URL.Url + "mechanics").then((res) => {
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
        })
        window.location.reload(false)
      });
  };
  userChangeHandler = (val) => {
    this.setState({
      search: val.target.value,
    });
  };

  componentDidMount() {
    this.getUser();
  }
  render() {
    const { users, loading, search } = this.state;

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
                      Manage Mechanics Profiles
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
                          <u className="ub">Manage Mechanics Profile</u>
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
                                  }}
                                >
                                  <Card.Img
                                    variant="top"
                                    src={data.photo}
                                    style={{ height: 180, width: 200, objectFit:'cover' }}
                                    alt="Cosupervisor"
                                  />
                                  <Card.Body>
                                    <Card.Title>{data.firstname}</Card.Title>
                                    <Card.Text
                                      style={{
                                        fontSize: 14,
                                        color: "lightblue",
                                      }}
                                    >
                                     {data._id}
                                    </Card.Text>
                                    <button
                                      type="button"
                                      class="btn btn-danger btn-sm"
                                      onClick={() => this.deleteUser(index)}
                                    >
                                      Delete
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-warning btn-sm"
                                      style={{ marginLeft: 15, color: "white" }}
                                    >
                                      Warn User
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

export default Mechanics;
