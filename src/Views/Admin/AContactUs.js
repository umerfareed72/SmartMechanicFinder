import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/AFooter";
class AContactUs extends Component {
  state = {};
  render() {
    return (
      <body     style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("electric.jpg")',
        color: "white",
      }}>
        <ANav></ANav>
        <Container fluid >
          <Row style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <Col className="col-sm-12 Homeimg "    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">How Can we Help?</h4>
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
                      We can connect you best Local Mechanics!
                    </p>
                  </Col>
                </Col>
              </Col>
            </Col>
          
              <Col className="col-sm-6 Center" style={{ marginTop: 30 }}>
                <h2>Contact Us</h2>
                <h5>Email Us At</h5>
                <p>Mianumerfareed72@gmail.com</p>
                <h5>Call Us</h5>
                <p>03044228402</p>
              </Col>
              <Col className="col-sm-6 Center" style={{ marginTop: 30 }}>
                <h2>Location</h2>
                <p> Mughal Plaza 2nd Floor Office # 25 Muslim Town Lahore </p>
              </Col>
       
          </Row>
        </Container>
        <AFooter></AFooter>
      </body>
    );
  }
}

export default AContactUs;
