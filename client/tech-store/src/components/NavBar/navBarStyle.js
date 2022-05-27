import styled from "styled-components";
import { COLORS } from "../../constants";
import { Link } from "react-router-dom";

export const NavBarStyle = {
    StyledNavContainer : styled.nav`
        border: 13px red;
        height: 40px;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        background: ${COLORS.primary};
        border-bottom: 4px solid ${COLORS.secondary};

    `,
    StyledSpan : styled.span`
        cursor:pointer;
        color: ${COLORS.secondary};
        margin: 10px;
        background: none;
    `,
    StyledLink : styled(Link)`
        margin-top: 10px;
        text-decoration: none;
        font-weight: bold;
    `,
}