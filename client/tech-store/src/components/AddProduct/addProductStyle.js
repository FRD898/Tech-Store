
import styled from "styled-components";
import {COLORS} from "../../constants";
export const AddProductStyle={
    StyledTittle : styled.h1`
        font-size: 40px;
        color: white;
    `,
    StyledContainer : styled.div`
        padding: 100px;
        background: ${COLORS.background};
        height: 100vh;
        margin:0;
        padding: 0;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
    StyledForm : styled.form`
        height: 400px;
        width: 300px;
        border: 2px solid ${COLORS.secondary};
        border-radius: 12px;
        background: ${COLORS.primary};
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    StyledLabelInput : styled.div`
        margin:22px;
    `,
    StyledLabel : styled.label`
        margin: 6px;
        border: green 13px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
    `,
    StyledInput : styled.input`
        margin: 6px;
        border: green 13px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
    `,
    StyledButton : styled.button`
        cursor:pointer;
        border-color: black;
        border-radius: 50%;
        background: ${COLORS.secondary};
    `,
    StyledLink : styled.a`
        font-color: red;
    `,
}