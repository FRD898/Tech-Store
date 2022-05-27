import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { Link } from "react-router-dom";

export default function NavBar(props){
    const StyledNavContainer = styled.nav`
        border: 13px red;
        height: 40px;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        background: ${COLORS.primary};

    `;
    const StyledSpan = styled.span`
        cursor:pointer;
        color: ${COLORS.secondary};
        margin: 10px;
        background: none;
    `;
    const StyledLink = styled(Link)`
        margin-top: 10px;
        text-decoration: none;
        font-weight: bold;
    `;
    return(
    <StyledNavContainer>
        <StyledLink to="/" >
            <StyledSpan>
                Home
            </StyledSpan>
        </StyledLink>
        <StyledLink to ="/products" >
            <StyledSpan>
                Products
            </StyledSpan>
        </StyledLink>
        <StyledLink to="/login">
            <StyledSpan>
                Log out
            </StyledSpan>
        </StyledLink>
    </StyledNavContainer>)
}