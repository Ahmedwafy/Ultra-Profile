import React, {Component} from "react";

import Home from "./Components/Home/Home"
import Work from "./Components/Work/Work"
import About from "./Components/About/About"
import Profile from "./Components/Profile/Profile"
import Portfolio from "./Components/Portfolio/Portfolio"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
import Footer from "./Components/Footer/Footer"

class ALLcomps extends Component  {
  render () {
    return (
      <div className="ALLcomps">
          <Home/>
          <Work/>
          <About/>
          <Profile/>
          <Portfolio/>
          <SocialMedia/>
          <Footer/>
      </div>
    );
  }
}
export default ALLcomps;

