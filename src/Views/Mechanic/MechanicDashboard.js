import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MNav from "../../Navigations/MNav";

import { Link } from "react-router-dom";
import MFooter from "../../Components/MFooter";
class MechanicDashboard extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  
  render() {
    return (

<body style={{ backgroundColor: "whitesmoke" }}>
        <MNav data={this.state.data}></MNav>

        <Container fluid>
          <Row>
            <div id="demo" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
              </ul>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="engine.jpg"
                    alt="Los Angeles"
                    width="100%"
                    height="500"
                    style={{ objectFit:'cover'}}
                  />
                  <div class="carousel-caption">
                    <h3>Engine</h3>
                    <p>We had such a great time in LA!</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="paint.jpg"
                    alt="Chicago"
                    width="100%"
                    height="500"
                    style={{ objectFit:'cover'}}
                  />
                  <div class="carousel-caption">
                    <h3>Painter</h3>
                    <p>Thank you,Painters!</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="electric.jpg"
                    alt="New York"
                    width="100%"
                    height="500"
                    style={{ objectFit:'cover'}}
                  />
                  <div class="carousel-caption">
                    <h3>Electrician</h3>
                    <p>We love experienced electricians!</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="body.jpg"
                    alt="New York"
                    width="100%"
                    height="500"
                    style={{ objectFit:'cover'}}
                  />
                  <div class="carousel-caption">
                    <h3>Body</h3>
                    <p>We love experienced Denters!</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>

            <Col className="col-lg-6" style={{ marginTop: 30 }}>
              <Col
                className="col-sm-12 Aligncenter"
                style={{ marginTop: 30, marginBottom: 30 }}
              >
                <h3 className="heading2">
                  <u className="ub">Some Basic Intro</u>
                </h3>
              </Col>
              <p>
                
                Smart Auto Mechanic Finder is an mobile application based on
                finding Mechanics that will near to your current location. All
                the details of tuning and repairing of vehicles used to be
                maintained manually. This is not advisable because maintenance
                and retrieval of information become tedious.There are two main
                entities, one is Mechanic and second is user. Anyone who wants
                to provide vehicle services is a Mechanic. He provides his bio
                data, skills and experience for the sake of making portfolio.
                This portfolio is viewing by user. User can be vehicle owner who
                selects the car services which he wants to avail. User chooses
                the mechanic by view his profile and profile has detail
                information about Mechanic. Bio information, Comments and rating
                should be visible on his profile. This application is location
                base to find Mechanic as near to user for convince for both
                entities (Mechanic and Vehicle Owner).
              </p>
            </Col>
            <Col className="col-lg-6 " style={{ height: 300, marginTop: 30 }}>
              <Col
                className="col-sm-12 Aligncenter "
                style={{ marginTop: 30, marginBottom: 30 }}
              >
                <h3 className="heading2">
    <u className="ub">Smart Auto Mechanic Finder</u>
                </h3>
              </Col>
              <h5 style={{ textAlign: "center" }}>Know Before You Leave</h5>
              <h6
                style={{ textAlign: "center", marginTop: 50, marginBottom: 20 }}
              >
                Make Smart Decisons
              </h6>
              <div class="d-flex justify-content-center">
                <a href="Home.html" target="_blank">
                  <img src="assets/images/playStore.png" alt="playstore" style={{ objectFit:'cover'}}/>
                </a>
                <a href="Home.html" target="_blank">
                  <img src="assets/images/appStore.png" alt="appstore" style={{ objectFit:'cover'}} />
                </a>
              </div>
            </Col>
            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <h3 className="heading2">
                <u className="ub">Must Watch Video</u>
              </h3>
            </Col>
            <Col
              className="col-lg-6"
              style={{ marginTop: 50, marginBottom: 100 }}
            >
              <iframe
                Title="vodeo"
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
            </Col>
            <Col
              className="col-lg-6"
              style={{ marginTop: 50, marginBottom: 100 }}
            >
              <iframe
                Title="vodeo"
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              />
            </Col>
            <Col className="col-sm-12">
              <hr></hr>
            </Col>

            <Col className="col-lg-4 ">
              <h2>Latest News</h2>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
                <Link to="/News">See More</Link>
              </p>
            </Col>
            <Col className="col-lg-4 ">
              <h2>Latest Events</h2>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
                <Link to="/LProvider">See More</Link>
              </p>
            </Col>
            <Col className="col-lg-4 ">
              <h2>Latest Dealers</h2>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
                <Link to="/LBlood">See More</Link>
              </p>
            </Col>

            <MFooter></MFooter>
          </Row>
        </Container>
      </body>
    );
  }
}


export default MechanicDashboard;
