import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`
export const Logo = styled.div`
    width: 30%;
    float: left;
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`
export const UlList = styled.ul`
    width: 70%;
    float: left;
    list-style: none;
    padding: 0;
    text-decoration: none;

`
export const ListItem = styled.li`
    display: inline-block;
    text-decoration: none; 
    padding: 0px 10px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: inherit;          // Make sure to inherit color from ListItem

    &:hover {
        color: #EB5424;      // Add hover color for NavLink
    }

    &.active {
        font-weight: bold;   // Style for active link
        color: #EB5424;      // Different color for active link
    }
`

