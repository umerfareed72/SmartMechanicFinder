import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/Footer";
import { URL } from "../../Config/Contants";
import axios from "axios";
import { connect } from "react-redux";

class UpdateRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      servicename: this.props.auth.users.servicename,
      serviceamount: this.props.auth.users.serviceamount,
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit = (e) => {
    e.preventDefault();
    axios
      .put(URL.Url + "updateServices/" + this.props.auth.users._id, {
        servicename: this.state.servicename,
        serviceamount: this.state.serviceamount,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  nameChangeHandler = (val) => {
    this.setState({
      servicename: val.target.value,
    });
  };

  amountChangeHandler = (val) => {
    this.setState({
      serviceamount: val.target.value,
    });
  };

  render() {
    const { auth } = this.props;
    return (
      <body
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url("electric.jpg")',
      
          }}
      >
        <ANav></ANav>
        <Container fluid>
         
          <Row style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
         <Col>
          <h1
            style={{
              color: "white",
              marginTop: 10,
              marginBottom: 20,
              fontFamily: "initial",
              borderBottom: "4px solid #00FA9A",
            }}
          >
            Edit Mechanic Service Rates
          </h1>
          </Col>
            <Col className="col-sm-12">
              <div class="row">
                <div class="col-lg-5 centerword">
                  <h1 className="heading4white">Edit Service Rates</h1>

                  <h5 className="heading4white">Manage Service Rates</h5>
                </div>
                <div class="col-lg-7">
                  <div class="card" style={{ marginTop: 30 }}>
                    <div class="card-body info-card social-about">
                      <Col
                        className="col-sm-12 Aligncenter"
                        style={{ marginTop: 30, marginBottom: 30 }}
                      >
                        <h3 className="heading2">
                          <u className="ub">Edit Service Rates</u>
                        </h3>
                      </Col>{" "}
                      <Col
                     
                     style={{ marginTop: 30, marginBottom: 30,padding:50 }}
                      >
                        <form onSubmit={this.handlesubmit} method="POST">
                          <div class="form-group ">
                            <label for="usr">Service Name:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="usr"
                              defaultValue={auth.users.servicename}
                              onChange={this.nameChangeHandler}
                              name="username"
                            />
                          </div>
                          <div class="form-group ">
                            <label for="usr">First Name:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="usr"
                              defaultValue={auth.users.serviceamount}
                              onChange={this.amountChangeHandler}
                              name="username"
                            />
                          </div>

                          <div class="form-group">
                            <button
                              type="submit"
                              class="btnSubmit  btn-primary "
                              value="Login"
                              style={{
                                float: "right",
                                width: 200,
                                marginTop: 10,
                              }}
                            >
                              Update
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
        <AFooter></AFooter>
      </body>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(UpdateRate);
