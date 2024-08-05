import React, {Component} from "react";
// import AppCss from "./App.css"

import Navbar from "./Components/Navbar/Navbar"
import ALLcomps from "./ALLcomps"
import Contact from "./Components/Contact/Contact"
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import Profile from "./Components/Profile/Profile";
import Portfolio from "./Components/Portfolio/Portfolio";
import SocialMedia from "./Components/SocialMedia/SocialMedia";

import { BrowserRouter, Route, Routes } from "react-router-dom";


class App extends Component  {
  render () {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ALLcomps/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Work" element={<Work/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/SocialMedia" element={<SocialMedia/>} />
          
        </Routes>    
      </BrowserRouter>
    );  
  }
}
export default App;
