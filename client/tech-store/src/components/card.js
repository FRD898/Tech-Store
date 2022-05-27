import React from "react";
import styled from "styled-components";

export default function Card(props){
    const StyledCardContainer = styled.div`
        margin: 0;
        border: 2px solid #D5E59C;
        width: 200px;
        height: 200px;
        background: #198152;
        border-radius: 18px;
    `;
    const StyledImageContainer = styled.div`
        height: auto;
        width: auto;
    `;
    const StyledIMG = styled.img`
        max-height: 100%;
        max-width: 100%;
    `;
    const StyledDetails = styled.div`
        display:flex;
        flex-direction:column;
        color: white;
    `;
    return(
        <StyledCardContainer>
            <StyledImageContainer >
                <StyledIMG src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen"></StyledIMG>
            </StyledImageContainer>
            <StyledDetails>
                <span>Product: {props.name}</span>
                <span>Price: $ {props.price}</span>
            </StyledDetails>
        </StyledCardContainer>
    )
}