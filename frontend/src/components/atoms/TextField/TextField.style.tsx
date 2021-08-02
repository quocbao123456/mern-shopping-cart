import styled from "styled-components";
import { borderColors, textFontSize } from "components/style";

interface StyleProps {
    verticalLabel?: boolean;
    fullWidth?: boolean;
}

const StyledTextField = styled.p<StyleProps>`
    font-size: ${textFontSize.re};
    border: 0;
    margin: 0;
    padding: 0;
    label {
        ${(props) =>
            props.verticalLabel
                ? `
                display: inline-block;
                width: 120px;
            `
                : `
                display: block;
                margin-bottom: 10px;
            `};
    }
    input {
        box-sizing: border-box;
        font-size: ${textFontSize.sm};
        height: 36px;
        width: 500px;
        border-radius: 3px;
        border: 1px solid ${borderColors.grey};
        padding-left: 10px;
        ${(props) =>
            props.fullWidth &&
            `
            width: 100%
        `}
    }
`;

export default StyledTextField;
