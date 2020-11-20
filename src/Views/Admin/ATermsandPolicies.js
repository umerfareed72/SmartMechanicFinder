import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/AFooter";
// import { Link } from "react-router-dom";
class ATermsandPolicies extends Component {
  state = {};
  render() {
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
          <Row style={{ backgroundColor: "rgba(0,0,0,0.7)" }} >
            <Col
              className="col-sm-12 Homeimg "
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">Terms & Policies</h4>
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
                      Manage Terms & Policies
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
                          <u className="ub">Terms and Policies for (User)</u>
                        </h3>
                      </Col>{" "}
                      <div class="card">
                      
                        <div class="card-header">Terms & Policies</div>
                       
                        <div class="card-body">
                          <h5 class="card-title">Special title treatment</h5>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                        </div>
                          
                      </div>
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Terms and Policies for (Mechanics)</u>
                        </h3>
                      </Col>{" "}
                      <div class="card">
                      
                        <div class="card-header">Terms & Policies</div>
                       
                        <div class="card-body">
                          <h5 class="card-title">Special title treatment</h5>
                          <p class="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                        </div>
                          
                      </div>
                    
                       </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <AFooter></AFooter>
      </body>
    );
  }
}

export default ATermsandPolicies;
