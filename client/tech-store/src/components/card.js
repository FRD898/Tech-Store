import React from "react";
import styled from "styled-components";
import {COLORS} from '../constants'

export default function Card(props){
    const StyledCardContainer = styled.div`
        margin: 0 auto;
        padding: 0;
        border: 2px solid ${COLORS.secondary};
        width: 200px;
        height: 200px;
        background: ${COLORS.primary};
        border-radius: 18px;
        overflow: hidden;
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
                <StyledIMG src={props.card.image} alt="Product image"></StyledIMG>
            </StyledImageContainer>
            <StyledDetails>
                <span>Product: {props.card.name}</span>
                <span>Price: $ {props.card.price}</span>
            </StyledDetails>
        </StyledCardContainer>
    )
}