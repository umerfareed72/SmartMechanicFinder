import React, { Component } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navs from "../../Navigations/Navs";
import Footer from "../../Components/Footer";
class About extends Component {
  state = {};
  render() {
    return (
      <body style={{ backgroundColor: "whitesmoke" }}>
        <Navs></Navs>
        <Container fluid>
       <Row>
       <Col className="col-sm-12 Homeimg ">
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">You should Know</h4>
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
                    <p className="heading4white smokewhite">Who We Are?</p>
                  </Col>
                </Col>
              </Col>
            </Col>
          
          <Col className="col-lg-12" style={{ marginTop: 30 }}>
            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <h3 className="heading2">
                <u className="ub">Our Mission</u>
              </h3>
            </Col>
            <p>
              Our Mission is to faciliate mechanics.Our Project on Car mechanic
              finder is fully online application that can be accessed throughout
              the organization and by Users with proper login provided which
              will give better service to Users. There are two main entities,
              one is Mechanic and second is user. Anyone who wants to provide
              vehicle services is a Mechanic. Users select the car services
              which he wants to avail. User chooses the mechanic after analysis
              of his profile. This application is location base to find
              Mechanics near to user.
            </p>
           </Col>

          <Col className="col-lg-12" style={{ marginTop: 30 }}>
          <hr></hr>
         
            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <h3 className="heading2">
                <u className="ub">Our Objectives</u>
              </h3>
            </Col>
            <p>
              This project is highly beneficial for vehicle owners who need
              expert mechanics around their area in city.
              <ul>
                <li>
                  First objective is to help the vehicle owners to find out
                  expert mechanics around their area’ on the location base.
                </li>
                <li>
                  Second objective is to provide the business to the skilled
                  persons of our society. Because most of mechanics face
                  difficulty of shop rent and low frequency of customers.
                </li>
                <li>
                  Help user by providing skilful and expert mechanic after his
                  sentiment analysis.
                </li>
                <li>
                  Moreover, mechanics do not get many customers as they needed
                  for earning. They also pay rent of workshop.
                </li>
                <li>
                  This app helps them to locate the customers and find expert
                  mechanic in an easy way.
                </li>
                <li>
                  {" "}
                  Reduce user tension of buying items by providing item
                  services.
                </li>
              </ul>
            </p>
          </Col>
          <Col className="col-lg-12" style={{ marginTop: 30 }}>
          <hr></hr>
         
            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <h3 className="heading2">
                <u className="ub">Gallery</u>
              </h3>
            </Col>

            <div
              id="multi-item-example"
              class="carousel slide carousel-multi-item carousel-multi-item-2"
              data-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                        alt="Card"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                        alt="Card"
                      />
                    </div>
                  </div>

                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
                        alt="Card"
                      />
                    </div>
                  </div>

                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
                        alt="Card "
                      />
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                        alt="Card"
                      />
                    </div>
                  </div>

                  <div class="col-md-3 mb-3">
                    <div class="card">
                      <img
                        class="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(26).jpg"
                        alt="Card "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="controls-top Aligncenter">
                <a
                  class="black-text"
                  href="#multi-item-example"
                  data-slide="prev"
                >
                  <i class="fa fa-3x pr-3"> &#xf104;</i>
                </a>
                <a
                  class="black-text"
                  href="#multi-item-example"
                  data-slide="next"
                >
                  <i class="fa fa-3x pl-3">&#xf105;</i>
                </a>
              </div>
            </div>
          </Col>

          <Col className="col-lg-12" style={{ marginTop: 30 }}>
          <hr></hr>
         
            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <h3 className="heading2">
                <u className="ub">Team</u>
              </h3>
            </Col>

            <div style={{ width: "100%", marginBottom: 20 }}>
              <Row>
                <Col
                  className="col-md-6 "
                  style={{
                    textAlign: "center",
                    color: "gray",
                    alignSelf: "center",
                  }}
                >
                  <Col
                    className="col-sm-12 Aligncenter"
                    style={{ marginTop: 30, marginBottom: 30 }}
                  >
                    <h5 className="heading2">
                      <u className="ub">Special Thanks</u>
                    </h5>
                  </Col>
                  <p>
                    Special Thanks To Our Supervisor & Co-Supervisor. It would be unfair and
                    unkind not to acknowledge the guidance, intelligence and
                    patience Dr. Farooq Ahmad and Abdul Karim Shahid has shared
                    with us while working on this project. We are incredibly
                    grateful to our supervisor and co-supervisor for his vision
                    and his persistence upon the values of hard work, helping
                    others and not losing morale. We would also like to thank
                    our institute, COMSATS University Islamabad, Lahore Campus,
                    for their providing us a platform to work on as well as
                    helping us in any way possible. This would not have been
                    possible without it.
                  </p>
                </Col>
                <Col className="col-md-3">
                  <Card>
                    <Card.Img variant="top" src="assets/images/farooq.jpeg" alt='Cosupervisor' style={{height:250, objectFit:'cover'}} />
                    <Card.Body>
                      <Card.Title>Dr Farooq Ahmad</Card.Title>
                      <Card.Text style={{ fontSize: 14, color: "lightgray" }}>
                        Supervisor
                      </Card.Text>

                      <Card.Text style={{ fontSize: 16, color: "gray" }}>
                        HEC Approved PhD Supervisor, Associate Professor,
                        Computer Science
                        <br />
                        COMSATS University Islamabad, Lahore Campus, Pakistan
                        <br />
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="col-md-3">
                  <Card style={this.cards}>
                    <Card.Img variant="top" src="assets/images/dummy1.jpg" alt='Cosupervisor' style={{height:250, objectFit:'cover'}}/>
                    <Card.Body>
                      <Card.Title>Sir Abdul Kareem Shahid</Card.Title>
                      <Card.Text style={{ fontSize: 14, color: "lightgray" }}>
                        Co-Supervisor
                      </Card.Text>

                      <Card.Text style={{ fontSize: 16, color: "gray" }}>
                        Assistant Professor, Computer Science
                        <br />
                        COMSATS University Islamabad, Lahore Campus, Pakistan
                        <br />
                      </Card.Text>
                      <Button style={{ marginTop: 25 }} variant="primary">
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: 50 }}>
                <Col className="col-md-4">
                  <Card style={this.cards}>
                    <Card.Img variant="top" src="assets/images/dummy1.jpg" alt='Cosupervisor'  style={{height:350, objectFit:'cover'}} />
                    <Card.Body>
                      <Card.Title>Sir Zaheer Ahmad Gondal</Card.Title>
                      <Card.Text style={{ fontSize: 14, color: "lightgray" }}>
                        Project Manager
                      </Card.Text>

                      <Card.Text style={{ fontSize: 16, color: "gray" }}>
                        Lecturer, Computer Science
                        <br />
                        COMSATS University Islamabad, Lahore Campus, Pakistan
                        <br />
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="col-md-4">
                  <Card style={this.cards}>
                    <Card.Img variant="top" src="assets/images/Mian.jpg" alt='Cosupervisor'  style={{height:350, objectFit:'cover'}} />
                    <Card.Body>
                      <Card.Title>Muhammad Umer Fareed</Card.Title>
                      <Card.Text style={{ fontSize: 14, color: "lightgray" }}>
                        Developer
                      </Card.Text>

                      <Card.Text style={{ fontSize: 16, color: "gray" }}>
                        BS Student(Software Engineering)
                        <br />
                        COMSATS University Islamabad, Lahore Campus, Pakistan
                        <br />
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col-md-4">
                  <Card style={this.cards}>
                    <Card.Img variant="top" src="assets/images/Hassan.jpeg" alt='Cosupervisor' style={{height:350, objectFit:'cover'}}  />
                    <Card.Body>
                      <Card.Title>Hassan Ahmad</Card.Title>
                      <Card.Text style={{ fontSize: 14, color: "lightgray" }}>
                        Developer
                      </Card.Text>

                      <Card.Text style={{ fontSize: 16, color: "gray" }}>
                        BS Student(Software Engineering)
                        <br />
                        COMSATS University Islamabad, Lahore Campus, Pakistan
                        <br />
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </body>
    );
  }
}

export default About;
