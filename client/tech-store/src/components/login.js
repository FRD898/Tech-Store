import React from "react";
import styled from "styled-components";
import {COLORS} from '../constants'

function Login(props){
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
        height: 300px;
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
    border: green 13px;
    border-radius: 3px;
    background: ${COLORS.secondary};
    cursor:pointer;
    `;
    const StyledLink = styled.a`
        font-color: red;
    `;

    function handleLogin(e){
        e.preventDefault();
        console.log("login")
    }
    return (
        <StyledContainer>
            <StyledTittle>TechStore</StyledTittle>
            <StyledForm onSubmit={handleLogin}>
                <h1>Login</h1>
                <StyledLabelInput>
                    <StyledLabel for="email">Email</StyledLabel>
                    <StyledInput type="email" id="email" defaultValue="freider8998@gmail.com"></StyledInput>
                    <StyledLabel for="password">Password</StyledLabel>
                    <StyledInput type="password" id="password" defaultValue="*********"></StyledInput>
                    <span> <a href="/">Forgot password?</a> </span>
                </StyledLabelInput>
                <StyledButton>Submit</StyledButton>
            </StyledForm>
        </StyledContainer>
    )
}

export default Login;