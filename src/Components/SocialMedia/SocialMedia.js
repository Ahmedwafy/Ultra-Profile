import React, { Component } from "react";
import {Socialmedia, Social, Icon, SocialDesc, Span, SpanInfo} from "./SocialMediaa.js"
import axios from "axios";

class SocialMedia extends Component  {

  state = {
    social: []
  }

  componentDidMount() {
    axios.get("js/data.json")
    .then(res => {this.setState({social : res.data.social})})
  }



  render () {

    const {social} = this.state

    const socialList = social.map((Element) => {
      return (
        <Social items={Element.id} key={Element.id}>
          <Icon className = {Element.icon}></Icon>
          <SocialDesc>
            <Span>{Element.title}</Span>
            <SpanInfo>{Element.body}</SpanInfo>  
          </SocialDesc>
        </Social> 
      )
    })

    return (
      <Socialmedia>    
        {socialList}
      </Socialmedia>
    );
  }
}
export default SocialMedia;




// can use ths inside Social in styled sheet

// background: ${props => {
//   if (props.items === 1) return "#3b5998";
//   else if (props.items === 2) return "#3b5998";
//   else if (props.items === 3) return "#3b5998";
//   else return "transparent";
// }};