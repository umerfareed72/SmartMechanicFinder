import React, { Component } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/AFooter";
// import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../Config/Contants";
import { toast } from "react-toastify";
toast.configure();
class UHelplist extends Component {
  state = { dataSource: [], loading: false, show: false, userdata: [] };

  handleClose = () => {
    this.setState({ show: false });
  };
  deletehelp = (id) => {
    axios
      .delete(URL.Url + "udeletehelp/" + this.state.dataSource[id]._id)
      .then((res) => {
        toast("Successfully Deleted", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        window.location.reload(false);
      });
  };
  showreports = async () => {
    await axios
      .get(URL.Url + "cgethelp")
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }
        this.setState({ dataSource: response.data, loading: true });
        console.log(this.state.dataSource);
      })
      .catch((error) => {
        console.log("ye lo 1", error);
      });
  };
  showdetail = (id) => {
    axios
      .get(URL.Url + "user/" + this.state.dataSource[id].userid)
      .then((res) => {
        this.setState({ show: true, userdata: res.data });
      });
  };
  componentDidMount() {
    this.showreports();
  }
  render() {
    const { dataSource, loading, userdata } = this.state;
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
              <Modal.Title>Profile Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Name:</h5>
              {userdata.firstname} {userdata.lastname}
              <hr></hr>
              <h5>Email:</h5>
              {userdata.email}
              <hr></hr>
              <h5>Phone Number:</h5>
              {userdata.phone}
              <hr></hr>
              <h5>address:</h5>
              {userdata.address} {userdata.city} {userdata.country}
          
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Row style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <Col
              className="col-sm-12 Homeimg "
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">Help</h4>
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
                    User Need Your Help
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
                          <u className="ub">Helps</u>
                        </h3>
                      </Col>{" "}
                      {loading ? (
                        <div>
                          {dataSource.map((data, index) => {
                            return (
                              <div class="card">
                                <div class="card-header">Help</div>
                                <div class="card-body">
                                  <Row style={{ alignItems: "center" }}>
                                    <Col className="col-sm-1">
                                    
                                      <img
                                    alt='help'
                                    style={{
                                          height: 100,
                                          width: 100,
                                          borderRadius: 100,
                                          objectFit:'cover'
                                        }}
                                        src={data.userimage}
                                      ></img>
                                    </Col>
                                    <Col
                                      className="col-sm-9"
                                      style={{ marginLeft: 20 }}
                                    >
                                      <h5 class="card-title">
                                        {data.question}
                                      </h5>
                                      <p class="card-text">{data.message}</p>
                                    </Col>
                                    <Button
                                      variant="info"
                                      className="btn-sm "
                                      style={{ marginRight: 10 }}
                                      onClick={() => this.showdetail(index)}
                                    >
                                      View Profile
                                    </Button>
                                    <Button
                                      variant="danger"
                                      className="btn-sm "
                                      onClick={() => this.deletehelp(index)}
                                    >
                                      Delete
                                    </Button>
                                  </Row>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="Aligncenter" style={{ padding: 50 }}>
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      )}
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

export default UHelplist;
