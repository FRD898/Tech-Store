import React from "react";
import { useNavigate } from "react-router-dom";
import {LoginStyle as L} from "./loginStyle"

function Login(props){
    let navigate = useNavigate();

    function handleLogin(e){
        navigate("/")
        e.preventDefault();
        console.log("login")

    }
    return (
        <L.StyledContainer>
            <L.StyledTittle>TechStore</L.StyledTittle>
            <L.StyledForm onSubmit={handleLogin}>
                <h1>Login</h1>
                <L.StyledLabelInput>
                    <L.StyledLabel for="email">Email</L.StyledLabel>
                    <L.StyledInput type="email" id="email" defaultValue="freider8998@gmail.com"></L.StyledInput>
                    <L.StyledLabel for="password">Password</L.StyledLabel>
                    <L.StyledInput type="password" id="password" defaultValue="*********"></L.StyledInput>
                    <span> <a href="/">Forgot password?</a> </span>
                </L.StyledLabelInput>
                <L.StyledButton>Submit</L.StyledButton>
            </L.StyledForm>
        </L.StyledContainer>
    )
}

export default Login;