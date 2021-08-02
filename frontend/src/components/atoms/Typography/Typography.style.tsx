import React from "react";
import styled from "styled-components";
import { FontSize, textFontSize } from "components/style";
import { TypographyProps } from "./Typography";

// const StyledText = styled.span<StyledTextProps>`
//     font-size: ${(props) => props.fontSize && textFontSize[props.fontSize]};
//     color: ${(props) => props.color || "inherit"};
// `;

const StyledText = styled(
    ({ onClick, children, className }: TypographyProps) => (
        <span onClick={onClick} className={className}>
            {children}
        </span>
    )
)`
    ${({ onClick, fontSize, color }) => `
        font-size: ${fontSize && textFontSize[fontSize]};
        color: ${color || "inherit"};
        ${
            onClick &&
            `
            cursor: pointer;
            text-decoration: underline;
        `
        }
    `}
`;

export default StyledText;
