import React, { Component } from "react";
import { Link } from "react-router-dom";
class AFooter extends Component {
  state = {};
  render() {
    return (
      <footer class="page-footer font-small  pt-4 " style={{backgroundColor:'rgba(0,0,0,0.7)'}}>
        <div class="container-fluid text-center text-md-left">
          <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Smart Auto Mechanic Finder</h6>
              <p>
                Help Customers and Mechanics for better solution of vehicle services. 
              </p>
            </div>
            <hr class="w-100 clearfix d-md-none"></hr>
         
            <hr class="w-100 clearfix d-md-none"></hr>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
           
           
               <p >
               <Link className="white" to='/ATermsandPolicy'>
              Terms & Policy
               </Link>
                 </p>

              <p >
               <Link className="white" to='/AServiceRates'>
           Service Rates
               </Link>
                 </p>
            
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">More Info</h6>
              <p >
               <Link className="white" to='/AContactUs'>
              Contact Us
               </Link>
                 </p>
                 <p >
               <Link className="white" to='/AAbout'>
            About
               </Link>
                 </p>
           
            </div>

            <hr class="w-100 clearfix d-md-none" />
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i class="fa mr-3"> &#xf124; </i> Muslim Town Lahore Pakistan
              </p>
              <p>
                <i class="fa mr-3"> &#xf1a0;</i> info@gmail.com
              </p>
              <p>
                <i class="fa mr-3"> &#xf095;</i> 03044228402
              </p>
              <p>
                <i class="fa mr-3"> &#xf095;</i> 03161440430
              </p>
            </div>
            <div class="row d-flex align-items-center ">
              <div class="col-md-7 col-lg-8 " style={{ marginLeft: 35 }}>
                <p>
                  © 2020 Copyright:
                  <a href="https://mdbootstrap.com/" className="white">
                    <strong> www.SmartAutoMechanicFinder.com</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default AFooter;
