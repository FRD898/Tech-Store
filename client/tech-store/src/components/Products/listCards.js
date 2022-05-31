import React, { useEffect, useState } from "react";
import Card from "./card";
import { ListCardsStyle as L } from "./listCardsStyle";
import {getProducts,removeProduct } from "../../services/productService";

export default function ListCards(props){
    const [cards, setCards] = useState([])
    useEffect(()=>{
        getProducts().then((res)=>{
            setCards(res);
        }).catch((e)=>{
            console.error(e);
        })
    },[])
    const handleDelete = (e,cardID)=>{
        //window.alert(cardID)
        e.preventDefault()
        console.log("delete",cardID);
        removeProduct(cardID).then((res)=>{
            if (res=='ok'){
                setCards(cards.filter((card)=>{
                    return (card.id!==cardID? true: false);
                }))
            }
        }).catch((e)=>{
            console.error(e);
        })
    }
    const Cards = cards.map((card)=>
        <div key={card.id}>
            <Card card={card}></Card>
            <L.StyledOptions>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <L.StyledButton onClick={(e)=>handleDelete(e,card.id)}>
                    <span className="material-symbols-outlined">
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