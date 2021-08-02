import {
    backgroundColors,
    borderColors,
    textColors,
    textFontSize,
} from "components/style";
import styled from "styled-components";

const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    button {
        font-size: ${textFontSize.sm};
        height: 36px;
        border-radius: 3px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
        margin-left: -2px;
        border: 0;
        background-color: ${backgroundColors.orange};
        color: ${textColors.white};
    }
`;

export default StyledSearchBar;
