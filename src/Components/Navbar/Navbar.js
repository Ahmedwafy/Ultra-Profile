import React from "react";
// import { Link } from "react-router-dom";
// or 
// import { NavLink } from "react-router-dom";
//   بيعمل اكتف كلاس اوتوماتيك لما ادوس على اللينكNavLink الفرق بينهم ان 
import { NavbarSection, Logo, LogoText, UlList, ListItem, NavLinkStyled } from "./NavbarStyle"

//  used NavLinkStyled instead of NavLink AFTER make styled component to add new featchers

const Navbar = () =>  {
    return (
      <NavbarSection>
        <div className="container">
          
          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>

          <UlList>

            <ListItem>
              <NavLinkStyled style={{textDecoration:'none'}} exact to="/">
                <p>Home</p>
              </NavLinkStyled>
            </ListItem>

            <ListItem>
              <NavLinkStyled style={{textDecoration:'none'}} exact to="/Work">
              <p>Work</p>
              </NavLinkStyled>
            </ListItem>

            <ListItem>
              <NavLinkStyled style={{textDecoration:'none'}} exact to="/About">
              <p>About</p>
              </NavLinkStyled>
            </ListItem>

            <ListItem>
              <NavLinkStyled style={{textDecoration:'none'}} exact to="/Profile">
              <p>Profile</p>
              </NavLinkStyled>
            </ListItem>

            <ListItem>
              <NavLinkStyled style={{textDecoration:'none'}} exact to="/Portfolio">
              <p>Portfolio</p>
              </NavLinkStyled>
            </ListItem>

            <ListItem>
              <NavLinkStyled style={{textDecoration:'none'}} exact to="/SocialMedia">
              <p>SocialMedia</p>
              </NavLinkStyled>
            </ListItem>

            <ListItem>
              <NavLinkStyled style={{textDecoration:'none'}} exact to="/Contact">
                Contact
              </NavLinkStyled>
            </ListItem> 

          </UlList>
        </div>
      </NavbarSection>
    );
}
export default Navbar;
