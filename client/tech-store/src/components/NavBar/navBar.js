import React from "react";
import { NavBarStyle as S} from "./navBarStyle";

export default function NavBar(props){
    const handleLogOut = ()=>{
        localStorage.removeItem('logged');
        props.setStatus({authenticated:false});
    }
    return(
    <S.StyledNavContainer>
        <S.StyledLink to="/" >
            <S.StyledSpan>
                Home
            </S.StyledSpan>
        </S.StyledLink>
        <S.StyledLink to ="/products" >
            <S.StyledSpan>
                Products
            </S.StyledSpan>
        </S.StyledLink>
        <S.StyledLink to ="/add" >
            <S.StyledSpan>
                Add product
            </S.StyledSpan>
        </S.StyledLink>
        <S.StyledLink to="/login">
            <S.StyledSpan onClick={handleLogOut}>
                Log out
            </S.StyledSpan>
        </S.StyledLink>
    </S.StyledNavContainer>)
}