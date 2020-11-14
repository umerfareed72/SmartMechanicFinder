import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navs from "../../Navigations/Navs";
import Footer from "../../Components/Footer";
class Complaints extends Component {
  state = {};
  render() {
    return (
      <body
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("electric.jpg")',
        }}
      >
        <Navs></Navs>
        <Container fluid>
          <Row>
            <Col className="col-sm-12 ">
              <div class="row">
                <div class="col-lg-6 centerword">
                  <h1 className="heading4white">Smart Auto Mechanic Finder</h1>
                  <h3 className="heading4white">Feel Free!</h3>
                  <h5 className="heading4white">
                    (Solution of Your Problem is our priority)
                  </h5>
                </div>
                <div class="col-lg-6">
                  <div class="card" style={{ marginTop: 30 }}>
                    <div class="card-body info-card social-about">
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Register A Complaint</u>
                        </h3>
                      </Col>{" "}
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <form>
                          <div
                            class="form-group"
                            style={{ width: 500, margin: 30 }}
                          >
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                            />
                          </div>
                          <div
                            class="form-group"
                            style={{ width: 500, margin: 30 }}
                          >
                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter Subject"
                            />
                          </div>
                          <div
                            class="form-group"
                            style={{ width: 500, margin: 30 }}
                          >
                            <label for="comment">Describe Your Problem:</label>
                            <textarea
                              class="form-control"
                              rows="5"
                              id="comment"
                            ></textarea>
                          </div>
                          <div
                            class="form-group"
                            style={{ width: 400, margin: 30 }}
                          >
                            <button
                              type="submit"
                              class="btnSubmit  btn-primary "
                              value="Login"
                            >
                              Submit
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

export default Complaints;
