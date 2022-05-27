import React, { useState } from "react";
import Card from "./card";
import { ListCardsStyle as L } from "./listCardsStyle";

export default function ListCards(props){
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
            <L.StyledOptions>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <L.StyledButton onClick={(e)=>handleDelete(e,card.id)}>
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </L.StyledButton>
            </L.StyledOptions>
        </div>
    );
    return(
        <L.StyledCardsContainer>{Cards}</L.StyledCardsContainer>
    )
}