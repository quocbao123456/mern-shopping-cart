import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";
import { PrimaryButtonProps } from "./PrimaryButton";

const StyledPrimaryButton = styled(
    ({ onClick, children, className }: PrimaryButtonProps) => (
        <BaseButton onClick={onClick} className={className}>
            {children}
        </BaseButton>
    )
)`
    ${({
        backgroundColor,
        border,
        textColor,
        padding,
        radius,
        height,
        width,
    }) => `
        cursor: pointer;
        :hover{
            opacity: 0.85
        }
        background-color: ${backgroundColor};
        ${border && `border: ${border}`};
        color: ${textColor};
        padding: ${padding};
        border-radius: ${radius};
        height: ${height};
        width: ${width};
    `}
`;

export default StyledPrimaryButton;
