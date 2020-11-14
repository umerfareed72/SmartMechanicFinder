import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navs from "../../Navigations/Navs";
import Footer from "../../Components/Footer";
import axios from "axios";
import { URL } from "../../Config/Contants";
class ServiceRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: [],
    };
  }
  getProduct = () => {
    axios.get(URL.Url + "getServices").then((response) => {
      this.setState({ products: response.data, loading: true });
    });
  };
  componentDidMount() {
    this.getProduct();
  }

  render() {
    return (
      <body style={{ backgroundColor: "whitesmoke" }}>
        <Navs></Navs>
        <Container fluid>
          <Row>
            <Col className="col-sm-12 Homeimg ">
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">Sericve Rates</h4>
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
                    <p className="heading4white smokewhite">Defined by Admin</p>
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col className="col-lg-8" style={{ marginTop: 30 }}>
              <Col
                className="col-sm-12 Aligncenter"
                style={{ marginTop: 30, marginBottom: 30 }}
              >
                <h3 className="heading2">
                  <u className="ub">How I Manage Service Rates?</u>
                </h3>
              </Col>
              <p>
                Auto repair labor rates vary widely across the country, and even
                within the same city.Auto Repair network charged between $5 and
                $20 per hour, based primarily on the shop’s cost of doing
                business. Though many people think auto repair shops' rates are
                very high, most are actually close to industry averages. To help
                you better understand auto repair labor rates, and so that you
                feel more comfortable handing over your hard-earned money, here
                are some of the factors auto shops use to establish car repair
                labor rates:
                <ul>
                  <li>
                    Local labor and benefit costs (rural vs. urban location)
                  </li>
                  <li>
                    Vehicle makes and models serviced (mainstream vs.
                    luxury/exotic) Repair shop type (dealership, independent,
                    etc.)
                  </li>
                  <li>
                    Facility overhead (mortgage or rent, upkeep, utilities,
                    etc.)
                  </li>
                  <li>
                    Business overhead (tools, auto repair technician training,
                    equipment, advertising, taxes, etc.)
                  </li>
                  <li>
                    Skill levels and certifications of auto repair technicians
                  </li>
                </ul>
              </p>
            </Col>
            <Col className="col-lg-4" style={{ marginTop: 30 }}>
              <img
                src="assets/images/rates.jpg"
                alt="rates"
                style={{ height: 350, width: 400 }}
              ></img>
            </Col>

            <Col>
              <hr style={{ marginTop: 30, marginBottom: 30 }}></hr>
              <Col
                className="col-sm-12 Aligncenter"
                style={{ marginTop: 30, marginBottom: 30 }}
              >
                <h3 className="heading2">
                  <u className="ub">Mechanic Service Rates</u>
                </h3>
              </Col>
              {this.state.loading ? (
                <table class="table" style={{ backgroundColor: "white" }}>
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Service Name</th>
                      <th scope="col">Service Rate</th>
                    </tr>
                  </thead>
                  {this.state.products.map((data, index) => {
                    return (
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            style={{
                              backgroundColor: "rgba(0,0,0,0.5)",
                              color: "white",
                            }}
                          >
                            {index++}
                          </th>
                          <td>{data.servicename}</td>
                          <td>{data.serviceamount}$</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              ) : (
                <div className="Aligncenter" style={{ padding: 50 }}>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </body>
    );
  }
}

export default ServiceRates;
