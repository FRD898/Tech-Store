import React from "react";
import styled from "styled-components";
import {COLORS} from '../constants'

export default function AddProduct(props){
    const StyledTittle = styled.h1`
        font-size: 40px;
        color: white;
    `

    const StyledContainer = styled.div`
        padding: 100px;
        background: ${COLORS.background};
        height: 100vh;
        margin:0;
        padding: 0;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;
    const StyledForm = styled.form`
        height: 400px;
        width: 300px;
        border: 2px solid ${COLORS.secondary};
        border-radius: 12px;
        background: ${COLORS.primary};
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    const StyledLabelInput = styled.div`
        margin:22px;
    `;
    const StyledLabel = styled.label`
        margin: 6px;
        border: green 13px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
    `;
    const StyledInput = styled.input`
        margin: 6px;
        border: green 13px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
    `;
    const StyledButton = styled.button`
        cursor:pointer;
        border-color: black;
        border-radius: 50%;
        background: ${COLORS.secondary};
    `;
    const StyledLink = styled.a`
        font-color: red;
    `;

    function handleLogin(e){
        e.preventDefault();
        console.log("Saved")
    }
    return (
        <StyledContainer>
            <StyledTittle>TechStore</StyledTittle>
            <StyledForm onSubmit={handleLogin}>
                <h1>Add Product</h1>
                <StyledLabelInput>
                    <StyledLabel for="name">Product Name</StyledLabel>
                    <StyledInput type="text" id="name"></StyledInput>
                    <StyledLabel for="price">Price</StyledLabel>
                    <StyledInput type="number" id="price"></StyledInput>
                    <StyledLabel for="image">Image(URL)</StyledLabel>
                    <StyledInput type="text" id="image"></StyledInput>
                </StyledLabelInput>
                <StyledButton>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span class="material-symbols-outlined">
                        save
                    </span>
                </StyledButton>
            </StyledForm>
        </StyledContainer>
    )
}
