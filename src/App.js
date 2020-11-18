import React from "react";
import Login from "../src/Views/Registeration/Login";
import SignUp from "../src/Views/Registeration/SignUp";

import MechanicRegister from "../src/Views/Registeration/MechanicRegister";
import Dashboard from "../src/Views/User/Dashboard";
import ContactUs from "../src/Views/User/ContactUs";
import EditProfile from "../src/Views/User/EditProfile";
import "bootstrap/dist/css/bootstrap.css";
import Setting from "../src/Views/User/Setting";
import ServiceRates from "../src/Views/User/ServiceRates";
import Help from "./Views/User/Help";
import TermsandPolicy from "./Views/User/TermsandPolicy";
import Forgot from "./Views/Registeration/Forgot";


//Mechanic Improts
import MechanicDashboard from "../src/Views/Mechanic/MechanicDashboard";
import MAbout from "../src/Views/Mechanic/MAbout";
import MConatctUs from "../src/Views/Mechanic/MContactUs";
import MHelp from "../src/Views/Mechanic/MHelp";
import MEditProfile from "../src/Views/Mechanic/MEditProfile";
import MServiceRates from "../src/Views/Mechanic/MServiceRates";
import MSetting from "../src/Views/Mechanic/MSetting";
import MTermsandPolicy from "../src/Views/Mechanic/MTermsandPolicy";
import MForgot from "./Views/Registeration/MForgot";
import UpdateRate from "./Views/Admin/UpdateRate";
import 'react-toastify/dist/ReactToastify.css';  
//Admin Imports
import AdminDashboard from "../src/Views/Admin/AdminDashboard";
import AdminLogin from "./Views/Registeration/AdminLogin";
import AServiceRates from "./Views/Admin/AServiceRates";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Mechanics from "./Views/Admin/Mechanics";
import About from "./Views/User/About";
import Users from "./Views/Admin/Users";
import ATermsandPolicies from "./Views/Admin/ATermsandPolicies";
import UHelplist from "./Views/Admin/UHelplist";
import MHelplist from "./Views/Admin/MHelplist";
import AForgot from "./Views/Registeration/AForgot";


//Redux
import {Provider} from "react-redux"
import {  createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import SetAuthorizationtoken from "../src/Config/SetAututhorizationtoken"
import jwt from "jsonwebtoken"
import {set_CurrentUser} from "./actions/index"
import RootReducers from "./reducers/RootReducers"
import AAbout from "./Views/Admin/AAbout";
import AContactUs from "./Views/Admin/AContactUs";
const store=createStore(RootReducers,compose(applyMiddleware(thunk)))
if(localStorage.usertoken){
SetAuthorizationtoken(localStorage.getItem('usertoken'))
store.dispatch(set_CurrentUser(jwt.decode(localStorage.usertoken)))
}


class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
         
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Forgot" component={Forgot} />
          <Route path="/MForgot" component={MForgot} />
          <Route path="/AForgot" component={AForgot} />
          
          <Route path="/MechanicRegister" component={MechanicRegister} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Setting" component={Setting} />
          <Route path="/About" component={About} />
          <Route path="/ServiceRates" component={ServiceRates} />
          <Route path="/Help" component={Help} />
          <Route path="/EditProfile" component={EditProfile} />
          <Route path="/TermsandPolicy" component={TermsandPolicy} />
          <Route path="/UpdateRate" component={UpdateRate} />
         
          {/* Mechanic Routes */}
          <Route path="/MechanicDashboard" component={MechanicDashboard} />
          <Route path="/MAbout" component={MAbout} />
          <Route path="/MHelp" component={MHelp} />
          <Route path="/MServiceRates" component={MServiceRates} />
          <Route path="/MContactUs" component={MConatctUs} />
          <Route path="/MSetting" component={MSetting} />
          <Route path="/MEditProfile" component={MEditProfile} />
          <Route path="/MTermsandPolicy" component={MTermsandPolicy} />
          {/* Admin Routes */}
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/AServiceRates" component={AServiceRates} />
          <Route path="/Users" component={Users} />
          <Route path="/Mechanics" component={Mechanics} />
          <Route path="/ATermsandPolicies" component={ATermsandPolicies} />
          <Route path="/AAbout" component={AAbout} />
          <Route path="/AContactUs" component={AContactUs} />
         
          <Route path="/UHelplist" component={UHelplist} />
          <Route path="/MHelplist" component={MHelplist} />
          </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
