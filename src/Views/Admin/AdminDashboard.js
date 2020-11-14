import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ANav from "../../Navigations/ANav";
import AFooter from "../../Components/AFooter";
import axios from "axios";
import { URL } from "../../Config/Contants";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const COLORS = [
  "GoldenRod",
  "rgba(255,255,255,0.5)",
  "black",
  "Grey",
  "#000000",
];

const mechanicraingdata = [
  { name: "5 Star", value: 400 },
  { name: "4 Star", value: 300 },
  { name: "3 Star", value: 200 },
  { name: "2 Star", value: 20 },
  { name: "1 Star", value: 50 },
];

class AdminDashboard extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  constructor(props) {
    super(props);
    this.state = {
      painter: "",
      engine: "",
      body: "",
      electric: "",
      electricissue: "",
      engineissue: "",
      bodyissue: "",
      registereduser: "",
      paintissue: "",
      bookedmcount: "",
      mechaniccount:''
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    this.getmechanicdata();
    this.getissuedata();
  }

  getmechanicdata = () => {
    console.log("IN ADMINDASH PAINTERCOUNT");
    axios
      .get(URL.Url + "paintercount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ painter: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "enginecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ engine: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "bodycount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ body: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "electriccount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ electric: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(URL.Url + "usercount")
      .then((response) => {
        if (response) {
          console.log("regsteru", response.data);
          this.setState({ registereduser: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(URL.Url + "mechaniccount")
      .then((response) => {
        if (response) {
          this.setState({ mechaniccount: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getissuedata = () => {
    console.log("in admin issue data");
    axios
      .get(URL.Url + "electricissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ electricissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "engineissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ engineissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(URL.Url + "bodyissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ bodyissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(URL.Url + "painterissuecount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ paintissue: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(URL.Url + "bookedmcount")
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.setState({ bookedmcount: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const data = [
      {
        name: "Engine",
        uv: this.state.engine,
      },
      {
        name: "Electrician",
        uv: this.state.electric,
      },
      {
        name: "Painter",
        uv: this.state.painter,
      },
      {
        name: "Body",
        uv: this.state.body,
      },
    ];
    const data1 = [
      {
        name: "Engine",
        uv: this.state.engineissue,
      },
      {
        name: "Electric",
        uv: this.state.electricissue,
      },
      {
        name: "Painter",
        uv: this.state.paintissue,
      },
      {
        name: "Body",
        uv: this.state.bodyissue,
      },
    ];

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
          <Row style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <Col
              className="col-sm-12 Homeimg "
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">Admin Dashboard</h4>
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
                    <p className="heading4white smokewhite">Admin Panel</p>
                  </Col>
                </Col>
              </Col>
            </Col>
            <Col className="col-sm-6 Aligncenter">
              <AreaChart
                style={{ marginTop: 100, marginBottom: 50 }}
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </Col>

            <Col className="col-sm-6">
              <Col
                className="col-sm-12  Aligncenter"
                style={{ marginTop: 30, marginBottom: 50 }}
              >
                <h5 className="heading2">
                  <u className="ub" style={{ fontSize: 30 }}>
                    Statistics
                  </u>
                </h5>
              </Col>
              Mechanic Rating is totally depennd on user response.Every User
              Provide response after taking services from admin.Excellent
              Mechanics have 5 Star Rating ,Good Mechanics have 4 Star
              Rating,Normal Mechanics Have 3 Star Rating,Bad Mechanics Have 2
              and very bad Mechanics have 1 Star Rating.But In Pie Chart only
              overall analysis defined that tell you application have how much
              type of mechanics that tell behaviour and analysis of all
              mechanics present in application.
            </Col>
            <Col className="col-sm-12">
              <hr style={{ backgroundColor: "white" }}></hr>
            </Col>

            <Col className="col-sm-6">
              <Col
                className="col-sm-12  Aligncenter"
                style={{ marginTop: 30, marginBottom: 50 }}
              >
                <h5 className="heading2">
                  <u className="ub" style={{ fontSize: 30 }}>
                    Statistics
                  </u>
                </h5>
              </Col>
              Mechanic Rating is totally depennd on user response.Every User
              Provide response after taking services from admin.Excellent
              Mechanics have 5 Star Rating ,Good Mechanics have 4 Star
              Rating,Normal Mechanics Have 3 Star Rating,Bad Mechanics Have 2
              and very bad Mechanics have 1 Star Rating.But In Pie Chart only
              overall analysis defined that tell you application have how much
              type of mechanics that tell behaviour and analysis of all
              mechanics present in application.
            </Col>

            <Col className="col-sm-6 Aligncenter">
              <AreaChart
                style={{ marginTop: 100, marginBottom: 50 }}
                width={500}
                height={300}
                data={data1}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: "white" }} />
                <YAxis tick={{ fill: "white" }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </Col>
            <Col className="col-sm-12">
              <hr style={{ backgroundColor: "white" }}></hr>
            </Col>
            <Col
              className="col-sm-12 Aligncenter"
              style={{ marginTop: 50, marginBottom: 50 }}
            >
              <h5 className="heading2">
                <u className="ub" style={{ fontSize: 30 }}>
                  Achievements
                </u>
              </h5>
            </Col>

            <Col className="col-sm-3 ">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Satisfied Mechanics
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.mechaniccount}+
                  </p>
                </div>
              </div>
            </Col>

            <Col className="col-sm-3">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Satisfied Users
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.registereduser}+
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-sm-3">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Online Users
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.bookedmcount}+
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-sm-3">
              <div class="card mb-3 " style={{ margin: 50 }}>
                <div class="card-body  Center">
                  <h5
                    class="card-title "
                    style={{
                      color: "blueviolet",
                      fontFamily: "initial",
                    }}
                  >
                    Online Mechanics
                  </h5>
                  <hr></hr>
                  <p
                    class="card-text"
                    style={{
                      color: "greenyellow",
                      fontFamily: "initial",
                      fontSize: 30,
                    }}
                  >
                    {this.state.bookedmcount}+
                  </p>
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

export default AdminDashboard;
