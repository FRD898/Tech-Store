import React, { useState } from "react";
import styled from "styled-components";
import Card from "./card";
import {COLORS} from '../constants'

export default function ListCards(props){
    const StyledCardsContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background: ${COLORS.background};
        column-gap: 12px;
        row-gap: 12px;
        height: 100vh;
        padding: 60px 0px;
    `;
    const StyledButton = styled.button`
        cursor:pointer;
        border-color: ${COLORS.secondary};
        border-radius: 50%;
    `;
    const StyledOptions = styled.div`
        margin-top: 10px;
        display: flex;
        justify-content: center;
    `;
    const initial_cards = [{
        id: "1232131",
        name: "Laptop",
        price: 2300,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: "232324",
        name: "Laptop",
        price: 2301,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: "3432444",
        name: "Laptop",
        price: 2302,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: "3532444",
        name: "Laptop",
        price: 2303,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: "34752444",
        name: "Laptop",
        price: 2304,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }]
    const [cards, setCards] = useState(initial_cards)
    const handleDelete = (e,cardID)=>{
        //window.alert(cardID)
        setCards(cards.filter((card)=>{
            return (card.id!==cardID? true: false);
        }))
    }
    const Cards = cards.map((card)=>
        <div>
            <Card key={card.id} card={card}></Card>
            <StyledOptions>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <StyledButton onClick={(e)=>handleDelete(e,card.id)}>
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </StyledButton>
            </StyledOptions>
        </div>
    );
    return(
        <StyledCardsContainer>{Cards}</StyledCardsContainer>
    )
}