import styled from "styled-components";
import {COLORS} from '../../constants'
export const CardStyle = {
    StyledCardContainer : styled.div`
        margin: 0 auto;
        padding: 0;
        border: 2px solid ${COLORS.secondary};
        width: 200px;
        height: 200px;
        background: ${COLORS.primary};
        border-radius: 18px;
        overflow: hidden;
    `,
    StyledImageContainer : styled.div`
        height: auto;
        width: auto;
    `,
    StyledIMG : styled.img`
        max-height: 100%;
        max-width: 100%;
    `,
    StyledDetails : styled.div`
        display:flex;
        flex-direction:column;
        color: white;
        align-items: center;
    `,
}