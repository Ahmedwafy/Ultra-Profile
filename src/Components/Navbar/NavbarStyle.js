import styled from "styled-components";

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
    font-weight: bold;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        color: #eb5424
    }
`

