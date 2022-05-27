import React from "react";
import { CardStyle as S } from "./cardStyle";

export default function Card(props){
    return(
        <S.StyledCardContainer>
            <S.StyledImageContainer >
                <S.StyledIMG src={props.card.image} alt="Product image"></S.StyledIMG>
            </S.StyledImageContainer>
            <S.StyledDetails>
                <span>Product: {props.card.name}</span>
                <span>Price: $ {props.card.price}</span>
            </S.StyledDetails>
        </S.StyledCardContainer>
    )
}