import React from "react";
// import { Link } from "react-router-dom";
// or 
import { NavLink } from "react-router-dom";
//   بيعمل اكتف كلاس اوتوماتيك لما ادوس على اللينكNavLink الفرق بينهم ان 
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from "./NavbarStyle"


const Navbar = () =>  {
    return (
      <NavbarSection>
        <div className="container">
          
          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>

          <UlList>

            <ListItem>
              <NavLink style={{textDecoration:'none'}} exact to="/">
                <p>Home</p>
              </NavLink>
            </ListItem>

            <ListItem>
              <Anchor href="/Work">Work</Anchor>
            </ListItem>

            <ListItem>
              <Anchor href="/About">About</Anchor>
            </ListItem>

            <ListItem>
              <Anchor href="/Profile">Profile</Anchor>
            </ListItem>

            <ListItem>
              <Anchor href="/Portfolio">Portfolio</Anchor>
            </ListItem>

            <ListItem>
              <Anchor href="/SocialMedia">SocialMedia</Anchor>
            </ListItem>


            <ListItem><NavLink  style={{textDecoration:'none'}} exact to="/Contact">Contact</NavLink></ListItem> 
          </UlList>
        </div>
      </NavbarSection>
    );
}
export default Navbar;
