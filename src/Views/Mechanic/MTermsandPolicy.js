import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MNav from "../../Navigations/MNav";
import MFooter from "../../Components/MFooter";
class MTermsofServices extends Component {
  state = {};
  render() {
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
            Terms & Policies
          </h1>

          <Row>
            <Col className="col-sm-12 ">
              <div class="row ">
                <div class="col-lg-12 Aligncenter">
                  <div class="card" style={{ marginTop: 30, width: 1000 }}>
                    <div class="card-body info-card social-about">
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Refund Policy</u>
                        </h3>
                      </Col>{" "}
                      <Col
                        className="col-sm-12 "
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <p>
                          Your Cash Should be refund in case of:
                          <ul>
                            <li>Mechanic Charge extra Service Rate </li>
                            <li>Mechanic Provide No Service.</li>
                            <li>Mechanic doing unlawful movements.</li>
                          </ul>
                        </p>
                      </Col>
                      <hr></hr>
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Cancel Booking Policy</u>
                        </h3>
                      </Col>{" "}
                      <Col
                        className="col-sm-12 "
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <p>
                          Your can cancel booking before:
                          <ul>
                            <li>Mechanic not reach in your area.</li>
                            <li>Mechanic not reach in your range of 10km.</li>
                            <li>Mechanic not reach on Time.</li>
                            <li>Mechanic not doing contact with you.</li>
                          </ul>
                        </p>
                      </Col>
                      <hr></hr>
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Payment Method Policy</u>
                        </h3>
                      </Col>{" "}
                      <Col
                        className="col-sm-12 "
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <p>Only Cash Payment are accepted.</p>
                      </Col>
                      <hr></hr>
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Terms & Conditions</u>
                        </h3>
                      </Col>{" "}
                      <Col
                        className="col-sm-12 "
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <p>All Policy Applied in case of guniune reason.</p>
                      </Col>
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

export default MTermsofServices;
