import {React, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {LoginStyle as L} from "./loginStyle"
import userLogin from "../../services/loginService";

function Login(props){
    const [status,setStatus] = useState(false)
    let navigate = useNavigate();
    const [user,setUser] = useState({
        email:"test@gmail.com",
        password:"********",
    })

    function handleLogin(e){
        e.preventDefault();
        userLogin(user).then((res)=>{
                setStatus(res)
                localStorage.setItem('logged',res);
            }
        )
        console.log("login",status)
    }
    useEffect(()=>{
        if(status){
            navigate("/");
            props.setStatus({authenticated:true});
        }
    },[status])

    function handleChange(e){
        e.preventDefault()
        let target = e.target.id
        target === 'email'?setUser({...user, email:e.target.value}):setUser({...user, password:e.target.value});
    }
    return (
        <L.StyledContainer>
            <L.StyledTittle>TechStore</L.StyledTittle>
            <L.StyledForm onSubmit={handleLogin}>
                <h1>Login</h1>
                <L.StyledLabelInput>
                    <L.StyledLabel for="email">Email</L.StyledLabel>
                    <L.StyledInput type="email" id="email" value={user.email} onChange={handleChange}></L.StyledInput>
                    <L.StyledLabel for="password">Password</L.StyledLabel>
                    <L.StyledInput type="password" id="password" value={user.password} onChange={handleChange}></L.StyledInput>
                    <span> <a href="/">Forgot password?</a> </span>
                </L.StyledLabelInput>
                <L.StyledButton>Submit</L.StyledButton>
            </L.StyledForm>
        </L.StyledContainer>
    )
}

export default Login;