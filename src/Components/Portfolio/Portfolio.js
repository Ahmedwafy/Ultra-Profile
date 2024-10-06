import React, {useState , useEffect} from "react";
import {PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, Box, Image, OverLay, OverLaySpan} from "./PortfolioStyle.js";
import axios from "axios";

const Portfolio = () =>  {

  const [ images , setImages ] = useState([])

  useEffect ( () => {
    axios.get('/js/data.json').then( res => {setImages(res.data.portfolio)} )
    }, [])

    const PortfolioImages = images.map((Ele) => {
      return (
        <Box key={Ele.id}>   
          <Image src={Ele.image} alt=""/>
          <OverLay>
            <OverLaySpan>
              Show Image
            </OverLaySpan>
          </OverLay>
        </Box>
      )
    })

    return (
      <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        <div>{PortfolioImages}</div>
      </PortfolioSection>
    );
}
export default Portfolio;