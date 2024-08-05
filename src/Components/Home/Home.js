import React from "react";
import "./HomeStyle.js"
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, HomeButton} from "./HomeStyle.js"

const Home = () =>  {
    return (
      <HomeSection>
        <div className="container">
          <HomeInformation>
            <HomeTitle>Ahmed Ahmed</HomeTitle>
            <HomeInfo>Creative Director</HomeInfo>
            <HomeDesc>
              Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </HomeDesc>
            <HomeButton>Let's Begin</HomeButton>
          </HomeInformation>
        </div>
      </HomeSection>
    );
}
export default Home;