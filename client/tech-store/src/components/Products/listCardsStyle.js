import styled from "styled-components";
import {COLORS} from "../../constants";
export const ListCardsStyle = {
    StyledCardsContainer : styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background: ${COLORS.background};
        column-gap: 12px;
        row-gap: 12px;
        height: 100vh;
        padding: 60px 0px;
    `,
    StyledButton : styled.button`
        cursor:pointer;
        border-color: ${COLORS.secondary};
        border-radius: 50%;
    `,
    StyledOptions : styled.div`
        margin-top: 10px;
        display: flex;
        justify-content: center;
    `,
}