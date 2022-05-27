import React from "react";
import {AddProductStyle as S} from "./addProductStyle";

export default function AddProduct(props){
    function handleLogin(e){
        e.preventDefault();
        console.log("Saved")
    }
    return (
        <S.StyledContainer>
            <S.StyledTittle>TechStore</S.StyledTittle>
            <S.StyledForm onSubmit={handleLogin}>
                <h1>Add Product</h1>
                <S.StyledLabelInput>
                    <S.StyledLabel for="name">Product Name</S.StyledLabel>
                    <S.StyledInput type="text" id="name"></S.StyledInput>
                    <S.StyledLabel for="price">Price</S.StyledLabel>
                    <S.StyledInput type="number" id="price"></S.StyledInput>
                    <S.StyledLabel for="image">Image(URL)</S.StyledLabel>
                    <S.StyledInput type="text" id="image"></S.StyledInput>
                </S.StyledLabelInput>
                <S.StyledButton>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span class="material-symbols-outlined">
                        save
                    </span>
                </S.StyledButton>
            </S.StyledForm>
        </S.StyledContainer>
    )
}
