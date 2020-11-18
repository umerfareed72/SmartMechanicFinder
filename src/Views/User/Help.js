import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navs from "../../Navigations/Navs";
import Footer from "../../Components/Footer";
import axios from "axios"
import { URL} from '../../Config/Contants';
import {toast} from "react-toastify"
import { connect } from "react-redux";

toast.configure();
class Help extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state={
      message:'',
      question:'',
         }
  }
  submithelp = (e) => {
    e.preventDefault()
    axios
      .post(URL.Url + 'uhelp', {
        question: this.state.question,
        message: this.state.message,
        userid:this.props.auth.user.userid,
        userimage:this.props.auth.user.photo
      })
      .then(async (res) => {
        console.log(res);
        console.log(res.data);
        try {
          toast("Submit Help Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
         } catch (e) {
          console.log('error hai', e);
          toast("Invalid Credentials", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
  
        }
      })
      .catch((error) => {

        console.log(error);
        toast("Network Error", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
  
      });
  };
  QuestionChangeHandler = (val) => {
    this.setState({
      question: val.target.value,
    });
  };

  MessageChangeHandler = (val) => {
    this.setState({
      message: val.target.value,
    });
  };


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
                        <form onSubmit={this.submithelp} method='POST'>
                          <div
                            class="form-group"
                            style={{ width: 500, margin: 30 }}
                          >
                            <label for="comment">Enter Question:</label>

                            <input
                              type="text"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter Question"
                              onChange={this.QuestionChangeHandler}
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
                              placeholder="Explain your problem"
                              onChange={this.MessageChangeHandler}
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
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Help);