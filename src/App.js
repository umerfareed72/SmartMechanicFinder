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
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
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
import PrivateRoute from "./PrivateRoute"
import TopMechanics from "./Views/Admin/TopMechanics";
const store=createStore(RootReducers,compose(applyMiddleware(thunk)))
if(localStorage.usertoken){
SetAuthorizationtoken(localStorage.getItem('usertoken'))
store.dispatch(set_CurrentUser(jwt.decode(localStorage.usertoken)))
}
class App extends React.Component {
  render() {
      let state=store.getState()
   let user=state.auth.user
   console.log(user)  
   
    return (
      <Provider store={store}>
      <Router>
        <Switch>
        <PrivateRoute exact path="/" component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Forgot" component={Forgot} />
          <Route path="/MForgot" component={MForgot} />
          <Route path="/AForgot" component={AForgot} />
          <Route path="/MechanicRegister" component={MechanicRegister} />
          <PrivateRoute path="/Dashboard" component={Dashboard} />
           <PrivateRoute path="/ContactUs" component={ContactUs} />
          <PrivateRoute path="/Setting" component={Setting} />
          <PrivateRoute path="/About" component= {About} />
          <PrivateRoute path="/ServiceRates" component={ServiceRates} />
          <PrivateRoute path="/Help" component={Help} />
          <PrivateRoute path="/EditProfile" component={EditProfile} />
          <PrivateRoute path="/TermsandPolicy" component={TermsandPolicy} />
          <PrivateRoute path="/UpdateRate" component={UpdateRate} />
         <PrivateRoute  path="/MechanicDashboard" component={MechanicDashboard} />
         
          <PrivateRoute path="/MAbout" component={MAbout} />
          <PrivateRoute path="/MHelp" component={MHelp} />
          <PrivateRoute path="/MServiceRates" component={MServiceRates} />
          <PrivateRoute path="/MContactUs" component={MConatctUs} />
          <PrivateRoute path="/MSetting" component={MSetting} />
          <PrivateRoute path="/MEditProfile" component={MEditProfile} />
          <PrivateRoute path="/MTermsandPolicy" component={MTermsandPolicy} /> 
          {/* Admin Routes */}
           <Route path="/AdminLogin" component={AdminLogin} />
          <PrivateRoute path="/AdminDashboard" component={AdminDashboard} />
          <PrivateRoute path="/AServiceRates" component={AServiceRates} />
          <PrivateRoute path="/Users" component={Users} />
          <PrivateRoute path="/Mechanics" component={Mechanics} />
          <PrivateRoute path="/ATermsandPolicies" component={ATermsandPolicies} />
          <PrivateRoute path="/AAbout" component={AAbout} />
          <PrivateRoute path="/AContactUs" component={AContactUs} />
         <PrivateRoute path='/TopMechanics' component={TopMechanics}></PrivateRoute>
          <PrivateRoute path="/UHelplist" component={UHelplist} />
          <PrivateRoute path="/MHelplist" component={MHelplist} /> 
          </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
